'use client'
import React, { useEffect } from "react";
import Image from "next/image";
import { useGlobalContext } from "@/app/context/store";

const AboutGallery = () => {
  const imageUrls = [
    "https://naiminathayurveda.org/wp-content/uploads/cache/2021/01/IMG_20201121_143228-scaled/1703810852.jpg",
    "https://naiminathayurveda.org/wp-content/uploads/cache/2021/10/Screenshot-2021-06-29-at-10_45_16-AM/3172699517.png",
    "https://naiminathayurveda.org/wp-content/uploads/cache/2021/10/Screenshot-2021-06-29-at-10_44_46-AM/3269599887.png",
    "https://naiminathayurveda.org/wp-content/uploads/cache/2021/10/IMG_20210811_111157-1-scaled/2371784007.jpg",
    "https://naiminathayurveda.org/wp-content/uploads/cache/2021/10/IMG_20210811_111626-scaled/1153182267.jpg",
    "https://naiminathayurveda.org/wp-content/uploads/cache/2021/10/IMG-20211209-WA0051/1150043889.jpg",
    "https://naiminathayurveda.org/wp-content/uploads/cache/2021/10/IMG-20211209-WA0036/1741640649.jpg",
    "https://naiminathayurveda.org/wp-content/uploads/cache/2021/10/IMG-20211209-WA0050/1323374629.jpg",
    "https://naiminathayurveda.org/wp-content/uploads/cache/2021/10/IMG-20211209-WA0049/887123959.jpg",
    "https://naiminathayurveda.org/wp-content/uploads/cache/2021/10/IMG-20211209-WA0043/964380894.jpg",
    "https://naiminathayurveda.org/wp-content/uploads/cache/2021/10/IMG-20211209-WA0052/2637567585.jpg",
    "https://naiminathayurveda.org/wp-content/uploads/cache/2021/10/IMG-20211209-WA0046/2455516985.jpg",
    "https://naiminathayurveda.org/wp-content/uploads/cache/2021/10/IMG-20211209-WA0053/2930016827.jpg",
    "https://naiminathayurveda.org/wp-content/uploads/cache/2021/10/IMG-20211209-WA0047/2714674019.jpg",
    "https://naiminathayurveda.org/wp-content/uploads/cache/2021/10/IMG-20211209-WA0044/1356721890.jpg",
    "https://naiminathayurveda.org/wp-content/uploads/cache/2021/10/IMG-20211209-WA0034/2833758410.jpg",
    "https://naiminathayurveda.org/wp-content/uploads/cache/2021/10/IMG-20211209-WA0037/2096421506.jpg",
    "https://naiminathayurveda.org/wp-content/uploads/cache/2021/10/IMG-20211209-WA0038/965735375.jpg",
    "https://naiminathayurveda.org/wp-content/uploads/cache/2021/10/IMG-20211209-WA0039/468104662.jpg",
    "https://naiminathayurveda.org/wp-content/uploads/cache/2021/10/IMG-20211209-WA0042/3199664040.jpg",
    "https://naiminathayurveda.org/wp-content/uploads/cache/2021/10/IMG-20211209-WA0045/3421486291.jpg",
    "https://naiminathayurveda.org/wp-content/uploads/cache/2021/10/IMG-20211209-WA0033/4122665852.jpg",
    "https://naiminathayurveda.org/wp-content/uploads/cache/2021/10/IMG-20211209-WA0041/2963089133.jpg",
    "https://naiminathayurveda.org/wp-content/uploads/cache/2021/10/IMG-20211209-WA0048/864618023.jpg",
    "https://naiminathayurveda.org/wp-content/uploads/cache/2021/10/IMG-20211209-WA0035/3010540637.jpg",
  ];

  const { setImageSlide } = useGlobalContext();
  
  useEffect(() => {
    console.log('Page loaded');
    setImageSlide(false);
  }, [setImageSlide]);

  return (
    <div className="flex flex-wrap flex-row flex-4 gap-2 justify-center mx-10 my-10">
      {imageUrls.map((imageUrl, index) => (
        <div key={index} className="flex-none w-fit h-fit basis-1/5">
          <Image
            src={imageUrl}
            alt={`Image ${index + 1}`}
            className="w-full h-full object-cover rounded"
            width={250}
            height={250}
          />
        </div>
      ))}
    </div>
  );
};

export default AboutGallery;
