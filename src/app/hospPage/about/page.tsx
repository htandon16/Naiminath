"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useGlobalContext } from "@/app/context/store";

const AboutUs = () => {

  const { setImageSlide } = useGlobalContext();
  
  useEffect(() => {
    console.log('Page loaded');
    setImageSlide(false);
  }, [setImageSlide]);

  return (
    <div className="flex flex-col items-center justify-center font-sans h-full w-full">
      <div
        className=" bg-[url('/images/aboutus_bg.jpg')] bg-cover h-[20vh] w-full flex items-center justify-center 
      text-[#54595f] text-[32px] font-extrabold border-b-[0.009px] border-[#8b939465]"
      >
        About Us
      </div>
      <div className="flex flex-row w-[74vw] justify-center gap-6 mt-10">
        <Image
          src="/images/about_hospital.jpg"
          className="w-[390px] h-[290px] rounded-[7px] shadow-md ring-1 ring-slate-100"
          alt="about image"
          width={1600}
          height={800}
          
        />
        <div className="text-[#7c7777] text-[17px]">
          <p>
            Naiminath Ayurvedic Hospital is the pioneer in the field of Ayurveda
            in the world. The Hospital offers treatment for every ailment and is
            affordable. The Hospital has is successfully running Out patient
            departments in Kayachikitsa, Kaumarbhritya, Panchkarma, Prasuti &
            Stri Roga, Shalakya tantra, Shalya tantra, Swasthavritta, Dental and
            Physiotherapy. The Hospital prides itself in providing a
            well-equipped, hygienically maintained panchkarma therapy rooms to
            suit the need and affordability of one and all.
          </p>
          <p className=" mt-3">
            To provide world class education and treatment, this 100 bedded
            state of art Ayurvedic Hospital is functional since 2016 where more
            than 200 patients visit the Outdoor Department every day and around
            40 patients are present in the Indoor Department.
          </p>
        </div>
      </div>
      <div className="relative mt-20 w-full h-[80vh] bg-orange-700 flex justify-center items-center">
        <Image
          src="/images/abou_us_green_tea_bg.jpg"
          className="w-full h-full rounded-[7px] object-cover"
          alt="about image"
          layout="fill"
        />
        <div className="absolute top-1/4 w-[75vw] h-full flex flex-row justify-center items-start bg-opacity-70 gap-10">
          <div className=" basis-1/2">
            <div className="text-[#3c4f43] text-[32px] font-medium">Vision</div>
            <p className="mt-3 text-[#506759]">
              Our vision is to be an innovative, leading global Ayurvedic
              Medical College, Hospital and Research Centre dedicated to
              transforming the youth into the most competent doctors equipped
              with highest professional as well as clinical skills in the field
              of Ayurveda System of Medicine through rigorous and intensive
              training with Holistic approach and appropriate guidance.
            </p>
          </div>
          <div className=" basis-1/2 text-white" style={{ textShadow: '1px 1px 2px #0005b6' }}>
            <div className="text-[30px] font-medium">Mission</div>
            <p className="mt-3">
              The mission of Naiminath Ayurvedic Hospital is to improve the
              health of our Community and the Global Community by setting the
              standard of excellence in patient care. We aim –
            </p>
            <p className="mt-3">
              To be the world’s preeminent Ayurvedic healthcare institution.
            </p>
            <p className="mt-3">
              To educate budding healthcare professionals and to participate in
              appropriate clinical research.
            </p>
            <p className="mt-3">
              To cultivate an environment of trust, honesty, mutual respect and
              compassion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
