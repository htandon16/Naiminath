import React from "react";
import Treatment from "./Treatment";
import Opd from "./Opd";
const TreatmentOpd = () => {
  return (
    <div>
      <div
        className="w-full flex flex-col justify-center items-center md:bg-cover bg-no-repeat
      bg-[url('https://naiminath.org/image/deseas-bg.jpg')] bg-opacity-25 font-sans"
      >
        <Treatment />
        <Opd />
      </div>
    </div>
  );
};

export default TreatmentOpd;
