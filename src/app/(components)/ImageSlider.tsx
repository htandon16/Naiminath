"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    nextArrow: (
      <div>
        <div className="next-slick-arrow bg-slate-900"> ⫸ </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="prev-slick-arrow bg-sky-900"> ⫷ </div>
      </div>
    ),
  };

  return (
    <Slider {...settings}>
      {/* Add your slider images here */}
      <div className="h-[80vh] w-[100vw] bg-cover bg-no-repeat bg-[url('/images/image1.png')]" />
      <div className="h-[80vh] w-[100vw] bg-cover bg-no-repeat bg-[url('/images/image2.png')]" />
      <div className="h-[80vh] w-[100vw] bg-cover bg-no-repeat bg-[url('/images/image3.jpg')]" />
      {/* Add more images as needed */}
    </Slider>
  );
};

export default ImageSlider;
