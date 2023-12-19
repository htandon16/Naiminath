"use client";
import React from "react";
import { useGlobalContext } from "../context/store";
import dynamic from "next/dynamic";
import Header from "./Header";
import ImageSlider from "./ImageSlider";

// const Header = dynamic(
//   () => import('./Header'),
//   { ssr: false }
// )
// const ImageSlider = dynamic(
//   () => import('./ImageSlider'),
//   { ssr: false }
// )

const BannerHeader = () => {
  const { imageSlide, setImageSlide } = useGlobalContext();
  // const imageSlide = false;
  return (
    <div className="">
      <Header imageSlider={imageSlide} />
      {imageSlide && <ImageSlider />}
    </div>
  );
};
export default BannerHeader;
