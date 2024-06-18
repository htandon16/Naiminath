import React, { useState } from 'react'
import * as Yup from 'yup'
import { IoMdCloseCircleOutline } from "react-icons/io";

const Contact = ({ closeModal }) => {
    const [formdata, setformdata] = useState({
        name: '',
        email: '',
        number: '',
        marks: ''
    })
    const [err, seterr] = useState()

    // handle change 
    const handleChange = (e) => {
        const { name, value } = e.target
        setformdata({ ...formdata, [name]: value })
    }

    // validation of form
    const validationSchema = Yup.object({
        name: Yup.string().min(1, "Enter Your name").matches(/^[A-Za-z\s]+$/, 'Please an valid name'),
        email: Yup.string().required("Email is Required").email("Invalid email format"),
        number: Yup.string().required('* Number is required').matches(/^\d{10}$/, "* Phone number should be of 10 digit"),
        marks: Yup.number().required('Number is required').typeError('Please enter a valid Score'),
    })

    // handle submit
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await validationSchema.validate(formdata, { abortEarly: false })
        } catch (error) {
            const newError = {};
            error.inner.forEach(elem => {
                newError[elem.path] = elem.message
            });
            seterr(newError)
        }
    }


    return (
        <div className='p-4 rounded-lg gap-8 flex flex-col w-full fixed top-0 left-0 right-0 bottom-0 bg-[#ffffffa3] justify-center z-[999] max-w-[12000px]'>
            <form onSubmit={handleSubmit} className='flex flex-col relative justify-center m-auto w-full  rounded-lg md:w-[70%] gap-4 bg-white p-10'>

                <button onClick={closeModal} className='absolute top-2 right-5 text-xl text-black'>
                    <IoMdCloseCircleOutline />
                </button>
                {/* name & email field */}
                <div className='flex md:flex-row flex-col gap-3 md:gap-10 '>
                    <div className='flex flex-col w-full gap-3'>
                        <label htmlFor="">Full Name</label>
                        <input type="text"
                            className='bg-[#eee] p-3 w-full rounded-lg text-blue-500 border-2  outline-none'
                            name='name'
                            value={formdata.name}
                            onChange={handleChange}
                            placeholder='Name *' />

                        {err && <p className=" text-red-500">{err.name}</p>}
                    </div>
                    <div className='flex flex-col w-full gap-3'>
                        <label htmlFor="">Email</label>
                        <input type="text"
                            className='bg-[#eee] p-3 w-full rounded-lg text-blue-500 border-2  outline-none'
                            name='email'
                            value={formdata.email}
                            onChange={handleChange}
                            placeholder='Email *' />

                        {err && <p className=" text-red-500">{err.email}</p>}
                    </div>

                </div>

                {/* contact number  */}
                <div className='flex flex-col w-full gap-3'>
                    <label htmlFor="">Contact Number</label>
                    <input type="text"
                        className='bg-[#eee] p-3 w-full rounded-lg text-blue-500 border-2  outline-none'
                        name='number'
                        value={formdata.number}
                        onChange={handleChange}
                        placeholder='Phone Number *' />

                    {err && <p className=" text-red-500">{err.number}</p>}
                </div>

                {/* Message field */}
                <div className='flex flex-col w-full gap-3'>
                    <label htmlFor="">NEET Score</label>
                    <input type="number"
                        className='bg-[#eee] p-3 w-full rounded-lg text-blue-500 border-2  outline-none'
                        name='marks'
                        value={formdata.marks}
                        onChange={handleChange}
                        placeholder='NEET Score *' />

                    {err && <p className=' text-red-500'>{err.marks}</p>}
                </div>

                <button type='submit' className='border-2 p-4 rounded-full bg-[#de0000] text-white text-xl font-bold'>
                    Download Brochure
                </button>
            </form>
        </div>
    )
}

export default Contact