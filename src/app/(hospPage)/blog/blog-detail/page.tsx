"use client";
import { useGlobalContext } from "@/app/context/store";
import { useSearchParams } from "next/navigation";
import React from "react";

const BlogDetail = () => {
  const { blogData } = useGlobalContext();
  // const searchParams = useSearchParams();
  // const data = searchParams?.get("data") ?? "";
  // console.log("params====", data);
  return (
    <div className="w-full h-screen flex flex-row justify-center items-top mt-10">
      <div
        className="md:basis-1/2 md:mx-0 mx-5 bg-white shadow-slate-400 shadow-[0_0px_50px_-20px_rgba(0,0,0,0.3)] 
      z-10 border-slate-400 rounded-[15px] min-h-[350px] max-h-[90%] overflow-hidden flex flex-col justify-center items-center"
      >
        <div className=" bg-[#ded636] text-center text-white text-[20px] py-2 font-sans w-full">
          Blog
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: blogData }}
          className="px-5 py-3 flex-1 overflow-y-auto text-center"
        ></div>
        <div className=" bg-slate-400 h-[20px] py-2 font-sans w-full"></div>
      </div>
    </div>
  );
};
export default BlogDetail;
