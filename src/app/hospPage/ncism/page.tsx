import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import {
  faBookReader,
  faFileExcel,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";

const NCISM = () => {
  const customSize: SizeProp = "2xl";
  return (
    <div className="flex flex-col my-12 justify-center items-center mx-40">
      <div className="">
        <h2 className="text-2xl text-[#144575] font-medium">
          REGULATORY INFO - NCISM Mandate
        </h2>
      </div>
      <div className="flex w-full mt-12 gap-10">
        <div className="w-1/2 flex flex-col justify-center items-start">
          <div className="flex justify-start items-center w-full h-fit border-b-[0.01px] p-3">
            <FontAwesomeIcon
              color="#ad1c1c"
              icon={faFilePdf}
              size={customSize}
              className="pr-3"
            />
            <p className="text-[#8ed1fc]">Your text here</p>
          </div>
        </div>

        <div className="w-1/2 flex flex-col justify-center items-start">
          <div className="flex justify-start items-center w-full h-fit border-b-[0.01px] p-3">
            <FontAwesomeIcon
              color="#23a455"
              icon={faFilePdf}
              size={customSize}
              className="pr-3"
            />
            <p className="text-[#8ed1fc]">Your text here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NCISM;
