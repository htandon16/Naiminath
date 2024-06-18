import React, { useState } from "react";
import "./hero.css";
import ShowModal from "./modal/ShowModal";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Hero = () => {

  const [showModal, setshowModal] = useState(false)
  const closeModal = () => setshowModal(false)

  if (showModal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    adaptiveHeight: true,
  };

  const slides = [
    {
      id: 1,
      image: '/nan2.avif',
      text: 'Slide Title 1',
      description: 'This is the description for slide 1.',
    },
    {
      id: 2,
      image: '/certificate.avif',
      text: 'Slide Title 2',
      description: 'This is the description for slide 2.',
    },
    {
      id: 3,
      image: '/BW.avif',
      text: 'Slide Title 2',
      description: 'This is the description for slide 2.',
    },
    // Add more items as needed
  ];

  return (
    <div className=" ">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="md:h-[90vh] h-[50vh] w-[90vw] overflow-hidden  object-cover ">
            {/* <div
              className="absolute inset-0  bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            /> */}

            <img src={slide.image} className="h-full w-full" alt="" />
            {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center z-[999] ">
              <h2 className="text-white text-3xl font-bold">{slide.text}</h2>
            </div> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;


//  <section className="hero">
//       <div className="hero-wrapper">
//         <div class="element">
//           <div class="content" style={{ color: "#eef1f2" }}>
//             {/* <div class="content" style={{ color: "black" }}> */}
//             <h2 className="hero-heading">
//               Discover The World of Possibilities with Naiminath
//             </h2>
//             <p className="hero-para">APPLICATIONS ARE NOW OPEN</p>
//             <button className="btns hero-btn" onClick={() => setshowModal(!showModal)}>Apply Now</button>
//           </div>
//           {showModal && <ShowModal closeModal={closeModal} />}
//         </div>
//       </div>
//     </section> 