'use client'
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const ContactUsForm = () => {
  const customSize: SizeProp = "sm";

   // State for form data
   const [formData, setFormData] = useState({
    name: '',
    email: '',
    comments: '',
  });

  const handleSubmit = (e: { preventDefault: () => void; }) => { 
    e.preventDefault()
    console.log(formData);

    fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      }).then((res) => {
        console.log('Response received')
        if (res.status === 200) {
          console.log('Response succeeded!')
          formData.comments=''
          formData.email=''
          formData.name=''
        }
      })
  }

  return (
    <div className=" w-full flex flex-row justify-center items-start gap-28 mt-20">
      <form className=" text-[#666666] font-sans text-[16px] w-[30vw] p-8 border-[1px] rounded-[4px]">
        <div className="mb-4 flex flex-row gap-3 items-center">
          <label htmlFor="name" className="block whitespace-nowrap mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-1.5 border-[1px] border-gray-300 rounded-[4px] focus:outline-none focus:border-blue-500"
            placeholder="Your Name"
            onChange={(e)=>{
                setFormData((prevData) => ({
                    ...prevData,
                    name: e.target.value,
                  }));
            }}
            value={formData.name}
          />
        </div>

        <div className="mb-4 flex flex-row gap-4 items-center">
          <label htmlFor="email" className="block  mb-2 whitespace-nowrap">
            Your Email
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <FontAwesomeIcon icon={faEnvelope} size={customSize} />
            </div>
            <input
              type="email"
              id="email"
              className="w-full pr-10 pl-3 py-1.5 border-[1px] border-gray-300 rounded-[4px] focus:outline-none focus:border-blue-500"
              placeholder="Your Email"
              onChange={(e)=>{
                setFormData((prevData) => ({
                    ...prevData,
                    email: e.target.value,
                  }));
            }}
            value={formData.email}
            />
          </div>
        </div>

        <div className="mb-4 flex flex-row gap-3">
          <label htmlFor="comments" className="block mb-2 whitespace-nowrap">
            Comments
          </label>
          <textarea
            id="comments"
            className="w-full px-3 py-2 border-[1px] border-gray-300 rounded-[4px] focus:outline-none focus:border-blue-500 h-36"
            placeholder="Your Comments"
            onChange={(e)=>{
                setFormData((prevData) => ({
                    ...prevData,
                    comments: e.target.value,
                  }));
            }}
            value={formData.comments}
          ></textarea>
        </div>

        <div className=" justify-center items-center flex flex-row mt-8">
          <button
            type="submit"
            className=" bg-[#1e73be] text-white py-2 px-4 rounded-[4px] hover:bg-[#1e73be] focus:outline-none focus:ring focus:border-blue-300 text-center"
            onClick={(e)=>
                handleSubmit(e)
            }
          >
            Submit Form
          </button>
        </div>
      </form>
      <div className="container  w-[40vw]">
        <section className="mb-32 ">
          <div className="block  bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div className="flex flex-wrap items-center">
              <div className="block w-full shrink-0 grow-0 basis-auto">
                <div className="h-[400px] w-full">
                  <iframe
                    src="https://maps.google.com/maps?q=Naiminath%20Ayurvedic%20Medical&t=k&z=13&ie=UTF8&iwloc=&output=embed"
                    className="left-0 top-0 h-full w-full"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUsForm;