// import AboutHome from "@/app/(components)/home/about/page";
// import ApplyHome from "@/app/(components)/home/apply/page";
// import BlogsHome from "@/app/(components)/home/blogs/page";
// import WhyChoose from "@/app/(components)/home/chooseUs/page";
// import EventsHome from "@/app/(components)/home/events/page";
// import Hero from "@/app/(components)/home/hero/page";
// import Youtube from "@/app/(components)/home/youtube/page";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

// const Home = () => {
//     return (
//         <div className="home font-serif ">
//             <Hero />
//             <AboutHome />
//             <WhyChoose />
//             <Youtube />
//             <EventsHome />
//             <BlogsHome />
//             <ApplyHome />
//         </div>
//     );
// };
// export default Home;

"use client";

import React from "react";
// import AboutHome from "./AboutHome"; 
// import TestimonialHome from "./TestimonialHome"; 
// import ApplyHome from "./ApplyHome";
// import WhyChoose from "./WhyChoose";
// import Youtube from "./Youtube";
// import Whatsapp from "./whatsapp/Whatsapp";
// import BlogsHome from "./BlogsHome";
// import SocialPost from "./SocialPost"; 
// import Treatment from "../Treatment"; 
import TreatmentOpd from "@/app/(components)/home/treatment/TreatmentOpd";
import Brochure from "@/app/(components)/home/Brochure";
import AboutHome from "@/app/(components)/home/about/AboutHome";
import WhyChoose from "@/app/(components)/home/chooseUs/WhyChoose";
import Youtube from "@/app/(components)/home/youtube/Youtube";
import BlogsHome from "@/app/(components)/home/blogs/BlogsHome";
import TestimonialHome from "@/app/(components)/home/testimonial/TestimonialHome";
import SocialPost from "@/app/(components)/home/social/SocialPost";
import ApplyHome from "@/app/(components)/home/apply/ApplyHome";
import Whatsapp from "@/app/(components)/Whatsapp";
// import TreatmentOpd from "./TreatmentOpd";
const Home = () => {

  return (
    <div>
      {/* <Hero /> */}
      <AboutHome />
      <TreatmentOpd />
      <WhyChoose />

      <Youtube />
      {/* <Opd />
      <Treatment /> */}
      <BlogsHome />
      {/* <NewsHome /> */}

      <TestimonialHome />
      <SocialPost />
      {/* <EventsHome /> */}
      {/* <Glimpse /> */}
      <ApplyHome />
      {/* <GalleryHome /> */}
      {/* <ContactHome /> */}
      <Whatsapp />
      <Brochure />
      <a href="https://naiminath-ayurveda.vercel.app/"><div className="apply-now-form-nt">Apply Now</div></a>
    </div>
  );
};

export default Home;
