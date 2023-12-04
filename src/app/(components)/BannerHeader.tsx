"use client";
import React from "react";
import Header from "./Header";
import ImageSlider from "./ImageSlider";
import { useGlobalContext } from "../context/store";

const BannerHeader = () => {
  const { imageSlide, setImageSlide } = useGlobalContext();
  // const imageSlide = false;
  return (
    <div className=" ">
      <Header imageSlider={imageSlide} />
      {imageSlide && <ImageSlider />}
    </div>
  );
};
export default BannerHeader;
