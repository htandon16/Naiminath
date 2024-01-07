'use client'
import {
  faBook,
  faMailBulk,
  faPhone,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import NavBar from "./NavBar";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { useRouter } from "next/navigation";


const Header = ({ imageSlider }: { imageSlider: boolean }) => {
  const customSize: SizeProp = "lg";
  const rounter= useRouter();

  return (
    <div
      className={`flex flex-col w-full ${imageSlider ? "bg-transparent" : "bg-green-500"} font-medium bg-orange-400`}
    >
      <div className="flex border-[#748182] bg-[#ded636] py-3 px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-4 justify-start items-center text-[11px] md:text-[14px] text-stone-700">
          <FontAwesomeIcon icon={faStopwatch} color="#a33a2e" size={customSize}/>
          <p>Open Hours-9am to 4pm</p>
          <div className="h-full border border-[#a33a2e]"></div>
          <FontAwesomeIcon icon={faMailBulk} color="#a33a2e" size={customSize}/>
          <p>info@naiminathayurveda.org</p>
        </div>
        <div className="flex md:ml-auto items-center text-[11px] md:text-[14px] font-semibold mt-2 md:mt-0"
          onClick={()=>{
            rounter.push('/doc/perm_letter.pdf')
          }}>
          <FontAwesomeIcon icon={faPhone} color="#a33a2e" size={customSize}/>
          <p>+91-8193896320</p>
          <div className="h-full border mx-3 border-[#a33a2e]"></div>
          <p>Permission Letter</p>
        </div>
      </div>

      <div className="flex md:px-8 w-full bg-white py-5 border-b-[1px] border-r-slate-300">
        <div className="w-[200px] h-[50px] mt-1">
          <div className="w-full h-full bg-[url('/images/ayurvedalogo.png')] bg-no-repeat bg-contain"></div>
        </div>
        <NavBar />
        <div className="flex md:hidden justify-end items-center bg-[#fff500] rounded-lg px-4 py-3 gap-2 text-[14px] font-semibold">
          <FontAwesomeIcon icon={faBook} color="#a33a2e" className="" size={customSize} />
          <p className="">Admission Open</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
