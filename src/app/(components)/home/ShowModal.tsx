import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import * as Yup from "yup";
import { IoMdCloseCircleOutline } from "react-icons/io";

interface ContactProps {
    closeModal: () => void;
}

interface FormData {
    name: string;
    email: string;
    number: string;
    marks: string;
}

interface FormErrors {
    [key: string]: string;
}

const Contact: React.FC<ContactProps> = ({ closeModal }) => {
    const form = useRef<HTMLFormElement>(null);

    const [formdata, setformdata] = useState<FormData>({
        name: "",
        email: "",
        number: "",
        marks: "",
    });
    const [err, seterr] = useState<FormErrors>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setformdata({ ...formdata, [name]: value });
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(1, "Enter Your name")
            .matches(/^[A-Za-z\s]+$/, "Please enter a valid name"),
        email: Yup.string()
            .required("Email is Required")
            .email("Invalid email format"),
        number: Yup.string()
            .required("* Number is required")
            .matches(/^\d{10}$/, "* Phone number should be of 10 digits"),
        marks: Yup.number()
            .required("Number is required")
            .typeError("Please enter a valid Score"),
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await validationSchema.validate(formdata, { abortEarly: false });
            const pdfUrl = "/adm/NAMC_Brochure.pdf";
            const link = document.createElement("a");
            link.href = pdfUrl;
            link.target = "_blank";

            if (form.current) {
                console.log("send");

                emailjs
                    .sendForm(
                        "service_0hecvon",
                        "template_qy6pqzd",
                        form.current,
                        "LvnIzSKSRRph-QyHA"
                    )
                    .then(
                        () => {
                            link.download = "NAMC_Brochure.pdf";
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);

                            alert("Brochure Downloaded Sucessfully")

                            setformdata({
                                name: "",
                                email: "",
                                number: "",
                                marks: "",
                            });
                        },
                        (error) => {
                            alert("Failed to Download ");
                            setformdata({
                                name: "",
                                email: "",
                                number: "",
                                marks: "",
                            });
                        }
                    );
            }
        } catch (error: any) {
            const newError: FormErrors = {};
            if (error.inner) {
                error.inner.forEach((elem: Yup.ValidationError) => {
                    if (elem.path) {
                        newError[elem.path] = elem.message;
                    }
                });
            }
            seterr(newError);
        }
    };

    return (
        <div className="p-4 rounded-lg gap-8 flex flex-col w-full fixed top-0 left-0 right-0 bottom-0 bg-[#ffffffa3] justify-center z-[999] max-w-[12000px]">
            <form
                ref={form}
                onSubmit={handleSubmit}
                className="flex flex-col relative justify-center m-auto w-full  rounded-lg md:w-[70%] gap-4 bg-white p-10"
            >
                <button
                    onClick={closeModal}
                    className="absolute top-2 right-5 text-xl text-black"
                >
                    <IoMdCloseCircleOutline />
                </button>
                {/* name & email field */}
                <div className="flex md:flex-row flex-col gap-3 md:gap-10 ">
                    <div className="flex flex-col w-full gap-3">
                        <label htmlFor="">Full Name</label>
                        <input
                            type="text"
                            className="bg-[#eee] p-3 w-full rounded-lg text-blue-500 border-2  outline-none"
                            name="name"
                            value={formdata.name}
                            onChange={handleChange}
                            placeholder="Name *"
                        />
                        {err.name && <p className=" text-red-500">{err.name}</p>}
                    </div>
                    <div className="flex flex-col w-full gap-3">
                        <label htmlFor="">Email</label>
                        <input
                            type="text"
                            className="bg-[#eee] p-3 w-full rounded-lg text-blue-500 border-2  outline-none"
                            name="email"
                            value={formdata.email}
                            onChange={handleChange}
                            placeholder="Email *"
                        />
                        {err.email && <p className=" text-red-500">{err.email}</p>}
                    </div>
                </div>

                {/* contact number  */}
                <div className="flex flex-col w-full gap-3">
                    <label htmlFor="">Contact Number</label>
                    <input
                        type="text"
                        className="bg-[#eee] p-3 w-full rounded-lg text-blue-500 border-2  outline-none"
                        name="number"
                        value={formdata.number}
                        onChange={handleChange}
                        placeholder="Phone Number *"
                    />
                    {err.number && <p className=" text-red-500">{err.number}</p>}
                </div>

                {/* Message field */}
                <div className="flex flex-col w-full gap-3">
                    <label htmlFor="">NEET Score</label>
                    <input
                        type="number"
                        className="bg-[#eee] p-3 w-full rounded-lg text-blue-500 border-2  outline-none"
                        name="marks"
                        value={formdata.marks}
                        onChange={handleChange}
                        placeholder="NEET Score *"
                    />
                    {err.marks && <p className=" text-red-500">{err.marks}</p>}
                </div>

                <button
                    type="submit"
                    className="border-2 p-4 rounded-full bg-[#de0000] text-white text-xl font-bold"
                >
                    Download Brochure
                </button>
            </form>
        </div>
    );
};

export default Contact;
