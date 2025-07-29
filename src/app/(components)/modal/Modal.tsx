"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import modalImg from "/public/images/popup_images/naminathpopup.png";
import { IoMdCloseCircleOutline } from "react-icons/io";
// import Cookies from "js-cookie";

const CustomModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    // const hasSeenPopup = Cookies.get("popup_seen");

    // if (!hasSeenPopup) {
    //   setTimeout(() => {
        setIsModalOpen(true);
    //     Cookies.set("popup_seen", "true", { expires: 1 });
    //   }, 300);
    // }
  }, []);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className={`${
        isModalOpen ? "flex" : "hidden"
      } p-4 sm:p-6 rounded-lg flex-col w-full fixed top-0 left-0 right-0 bottom-0 bg-black/60 justify-center items-center z-[999]`}
      onClick={()=>setIsModalOpen(false)}
    >
      <div className="relative w-full max-w-[90%] sm:max-w-[500px] aspect-[4/5] bg-white rounded-lg overflow-hidden" onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 bg-black p-1 rounded-full text-2xl text-white z-10"
        >
          <IoMdCloseCircleOutline />
        </button>

        <Image
          src={modalImg}
          alt="Popup"
          fill
          className="object-contain rounded-lg"
          priority
        />
      </div>
    </div>
  );
};

export default CustomModal;
