"use client";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import React, { useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGlobalContext } from "@/app/context/store";
import { Helmet } from 'react-helmet';
import Divider from "@/app/(components)/dropdown/Divider";


type SliderItem = {
  image: string;
  text: string;
};

const HomePage = () => {
  const { setImageSlide } = useGlobalContext();
  
  useEffect(() => {
    console.log('Page loaded');
    setImageSlide(true);
  }, [setImageSlide]);

 
  return (
    <>
    <Helmet>
    <meta name="robots" content="max-image-preview:large"/>
    <title>Home Naiminath Ayurveda : Top BAMS College in India</title>
    <meta name="description" content="NA" />
    <meta name="viewport" content="width=1536"></meta>
    </Helmet>
    <div className="w-max-full flex flex-col justify-center items-center -mt-4 font-sans pb-20">
      {/* ayurveda treatement section */}
      <div className="w-full flex flex-col justify-center items-center bg-cover bg-no-repeat
      bg-[url('https://hindijaankaari.in/wp-content/uploads/2023/12/greenbg-scaled.jpeg')] font-sans">
       <div className=" bg-slate-500 w-full h-3 mb-[32px]"></div> 
      <AyurvedaTreatmentSection  />
      <WhatIsAyurveda />
      </div>
      <div className="w-full flex flex-col justify-center items-center pt-5">
      <OpdSection />
      <PrivateBamsSection />
      </div>
      
      <AboutUsSection />
      <NaiminathAyurvedaSection />
      
    </div>
    </>
    
  );
};

const AyurvedaTreatmentSection = () => {
  const sliderItems:SliderItem[] = [
    { image: '/images/ayd_treate1.jpg', text: 'Abhyangam' },
    { image: '/images/ayd_treate2.jpg', text: 'Shirodhara' },
    { image: '/images/ayd_treate3.jpg', text: 'Kashayadhara' },
    { image: '/images/ayd_treate4.jpg', text: 'Greeva Basti' },
    { image: '/images/ayd_treate5.jpg', text: 'Janu Basti' },
    { image: '/images/ayd_treate6.jpg', text: 'Kati Basti' },
    { image: '/images/ayd_treate7.jpg', text: 'Spine Basti' },
    { image: '/images/ayd_treate8.jpg', text: 'Kizhi' },
   
  ];
  return (
    <>
      <h2 className="text-[34px] text-[#525252] font-semibold">Ayurvedic Treatments</h2>
      <p className="text-[19px] text-[#7c7777] font-semibold">List of Ayurvedic Treatments</p>
      <div className=" w-[66%] my-[3%] mx-[20%]  items-center justify-center">
        <AyurvedaTreatmentImageSlider items={sliderItems} />
      </div>
    </>
  );
};

const OpdSection = () => {
  const sliderItems:SliderItem[] = [
    { image: '/images/opd1.jpg', text: 'Kaumarbhritya' },
    { image: '/images/opd2.jpg', text: 'Kayachikitsa' },
    { image: '/images/opd3.jpg', text: 'Panchkarma' },
    { image: '/images/opd4.jpg', text: 'Prasuti & Stri Roga' },
    { image: '/images/opd5.jpg', text: 'Shalakya Tantra' },
    { image: '/images/opd6.jpg', text: 'Shalya Tantra' },
    { image: '/images/opd7.jpg', text: 'Swasthavritta' },
    { image: '/images/opd1.jpg', text: 'Kaumarbhritya' },
   
  ];
  return (
    <>
      <h2 className="text-[32px] text-[#525252]">OPD</h2>
      <p className="text-[17px] text-[#7c7777]">List of OPD</p>
      <div className=" w-[66%] my-[3%] mx-[20%] items-center justify-center">
        <AyurvedaTreatmentImageSlider items={sliderItems}/>
      </div>
    </>
  );
};

const WhatIsAyurveda = () => {
  return (
    <div className=" w-[70%] my-[4%] mx-[10%] flex flex-row">
      <div className="w-[28vw] h-[46vh] bg-contain bg-no-repeat bg-[url('/images/ayurveda_img.png')]" />
      <div className="w-[44vw] h-full ms-[5%]">
        <label className=" text-[32px] font-semibold text-[#525252]">What is Ayurveda?</label>
        <p className="text-[#042d04] mt-[3%]">
          Ayurveda is an ancient knowledge cultivated by the sages of India. It
          has been developed from various treatises and manuscripts and has made
          its way to becoming one of the ancient most but modern health care
          techniques. ‘Ayur’ means life and ‘Veda’ means science. Thus, the term
          ‘Ayurveda’ means ‘science of life’. The theories and notions of
          Ayurveda have been practiced since the past 5000 years. It recommends
          methods for appropriate living and longevity. It includes instructions
          to maintain good health as well as dealing with illness through yoga,
          treatments, herbal medicines, correct diet and lifestyle changes.
        </p>
        <p className="text-[#042d04] mt-[3.5%]">
          Ayurveda prescribes many treatments for various medical conditions
          such as rheumatism, respiratory problems, blood pressure, cholesterol,
          paralysis etc. This system of medicine is special in that it makes use
          of only natural ingredients and as a result are totally harmless and
          at the same time highly curative.
        </p>
      </div>
    </div>
  );
};

const PrivateBamsSection = () => {
  return (
    <div className=" w-[70%] h-full mt-[6%] mx-[10%] flex flex-row-reverse">
      <div className="w-[40vw] h-[35vw] bg-contain -mt-[4%] bg-no-repeat bg-[url('/images/private_bams_img.jpg')]" />
      <div className="w-[44vw] h-full mr-[10%]">
        <label className=" text-3xl text-[#525252] font-semibold">
          Private BAMS College in Agra, UP <br />
          (India)
        </label>
        <p className="text-[#7c7777] mt-[3%]">
          Naiminath Ayurveda is one of the best private BAMS colleges in Agra,
          Uttar Pradesh. With its commitment to providing quality education and
          top-notch facilities, Naiminath Ayurveda stands out as a leader in the
          field of ayurveda medicine. The college offers a comprehensive
          curriculum that not only covers traditional Ayurvedic practices but
          also integrates modern medical advancements.
        </p>
        <p className="text-[#7c7777] mt-[3.5%]">
          What sets Naiminath Ayurveda apart from other institutions is its
          emphasis on practical training and experiential learning. Students
          have access to well-equipped laboratories where they can develop their
          skills and gain hands-on experience under the guidance of experienced
          faculty members. This approach ensures that graduates are prepared to
          enter the professional world with confidence and expertise.
        </p>
      </div>
    </div>
  );
};

const NaiminathAyurvedaSection = () => {
  return (
    <div className=" w-[70%] h-full mt-[3%] mx-[10%] flex flex-row-reverse">
      <div className="w-[48vw] h-[48vh] mt-[5%] bg-contain bg-no-repeat bg-[url('/images/namida_ayurveda.png')]" />
      <div className="w-[44vw] h-full mr-[1%]">
        <label className=" text-3xl text-[#525252] font-semibold">
          Naiminath Ayurveda : Inside Agra&apos;s Ayurvedic Medical College
        </label>
        <p className="text-[#7c7777] mt-[3%]">
          Located in the historical city of Agra, Naiminath Ayurveda is a hidden
          gem that stands out as the top ayurvedic college in Agra. This
          prestigious ayurvedic medical college offers a unique blend of
          traditional practices and modern advancements, making it one of the
          most sought-after institutions for aspiring ayurvedic practitioners.
          Stepping foot inside its hallowed halls feels like entering a
          sanctuary devoted to ancient healing wisdom.
        </p>
        <p className="text-[#7c7777] mt-[3.5%]">
          What sets Naiminath apart from other private ayurvedic colleges in UP
          is its emphasis on practical experience alongside theoretical
          knowledge. Students here have the unique opportunity to engage in
          hands-on learning through internships at the attached hospital. Under
          the expert guidance of seasoned practitioners, they gain invaluable
          insight into diagnosing ailments, prescribing treatments, and
          observing patients’ progress firsthand. Depending upon the type of
          colleges, there are different fees structures for private BAMS
          colleges fees in UP.
        </p>
      </div>
    </div>
  );
};

const AboutUsSection = () => {
  return (
    <div className="w-full h-fit bg-blue-300 relative">
      <Image
        src="/images/about_home_bg.jpg"
        className="w-full h-[85vh]"
        alt="about image"
        width={1600}
        height={800}
      />
       
      <div className="w-full-max absolute top-[12%] start-[45%] right-[10%]">
        <label className="md:text-3xl text-xl font-semibold text-[#525252]">About Us</label>
        <p className="text-[#7c7777] mt-[5%] text-[11px] md:text-[16px]">
          Naiminath Ayurvedic Hospital is the pioneer in the field of Ayurvedic
          treatment in the world. The Hospital offers treatment for every
          ailment and is affordable. The Hospital has
          <br /> is <br />
          successfully running Out patient departments in Kayachikitsa,
          Kaumarbhritya, Panchkarma, Prasuti & Stri Roga, Shalakya tantra,
          Shalya tantra, Swasthavritta, Dental and Physiotherapy. The Hospital
          prides itself in providing a well-equipped, hygienically maintained
          panchkarma therapy rooms to suit the need and affordability of one and
          all.
        </p>
        <p className="text-[#7c7777] mt-[3%] text-[11px]  md:text-[16px]">
          To provide world class education and treatment, this 100 bedded state
          of art Ayurvedic Hospital is functional since 2016 where more than 200
          patients visit the Outdoor Department every day and around 40 patients
          are present in the Indoor Department.
        </p>

        <button
          className="mt-[6%] w-fit h-fit px-[26px] pt-[5px] pb-[10px] text-[16px] text-white rounded-[20px] bg-[#e63280]
          hover:underline"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

const AyurvedaTreatmentImageSlider = ({ items }:{items:SliderItem[]}) => {
  const customSize: SizeProp = "xl";

  const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className="slick-arrow w-fit h-fit absolute z-10 top-[30%] md:top-[40%] left-[3%]"
        onClick={onClick}
      >
        <FontAwesomeIcon
          size={customSize}
          icon={faChevronLeft}
          color="rgba(238,238,238,.9)"
        />
      </div>
    );
  };

  const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className="slick-arrow w-fit h-fit absolute z-10 top-[30%] md:top-[40%] right-[3%]"
        onClick={onClick}
      >
        <FontAwesomeIcon
          size={customSize}
          icon={faChevronRight}
          color="rgba(238,238,238,.9)"
        />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    vertical: false,
    useTransform: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    
  };



  return (
    <Slider {...settings} className="text-[#7c7777] relative ">
      {items.map((item, index) => (
        <div key={index} className=" p-[10px] text-center">
          {/* <div className="h-fit w-[10vw] md:h-[235px] md:w-[235px] bg-no-repeat rounded-[10px]">
  <img className="w-full h-full" src={item.image} alt={item.image} />
</div> */}
          <div
            className=" h-[18vh] w-[15vw] md:h-[235px] md:w-[235px] bg-cover bg-no-repeat rounded-[10px]"
            style={{ backgroundImage: `url(${item.image})` }}
          />
          <p>{item.text}</p>
        </div>
      ))}
    </Slider>
  );
};

export default HomePage;
