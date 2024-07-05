"use client";
import React, { useEffect, useState } from "react";
import "./style.css";
import Image from "next/image";
import modalImg from "/public/images/modal.png"
import { IoMdCloseCircleOutline } from "react-icons/io";

const CustomModal = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    useEffect(() => {
        console.log("Modal state has changed:", isModalOpen);
        setTimeout(() => {
            setIsModalOpen(true)
        }, 300)
    }, []);

    const handleClose = () => {
        console.log("call");

        setIsModalOpen(false)
    }

    return (
        // <div className={isModalOpen ? "openModal" : "closeModal"}>
        //     <div className="modal-content">
        //         <div className="modal-header">

        //             <button onClick={handleClose}>X</button>
        //         </div>
        //         <div className="modal-body ">
        //             <Image height={750}
        //                 className="flex flex-row mx-auto"
        //                 src={modalImg}
        //                 alt=""
        //                 loading="lazy"
        //             />
        //         </div>
        //     </div>
        // </div>


        <div className={`${isModalOpen ? "flex" : "hidden"} p-10 rounded-lg  flex-col w-full fixed top-0 left-0 right-0 bottom-0 bg-[#ffffffa3] justify-center z-[999] max-w-[12000px]`}>
            <div
                className="flex flex-col relative justify-center m-auto w-full md:h-[95vh] rounded-lg md:w-[50%]  bg-white "
            >
                <button
                    onClick={handleClose}
                    className="absolute top-0 right-[50%] bg-black p-2 rounded-full text-3xl text-white font-extrabold "
                >
                    <IoMdCloseCircleOutline />
                </button>
                {/* name & email field */}

                <div className="modal-body h-full w-full ">
                    <Image height={750}
                        className="flex flex-row"
                        src={modalImg}
                        alt=""
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
};


export default CustomModal;