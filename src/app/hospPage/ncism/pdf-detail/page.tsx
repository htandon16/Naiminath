// components/PdfViewer.js
import { useGlobalContext } from "@/app/context/store";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PdfViewer = () => {
  const { blogData } = useGlobalContext();

  console.log("data=========", blogData);
  useEffect(() => {}, []);

  return (
    <div className=" flex flex-col">
      <div>{blogData}</div>
      <iframe src={blogData} width="100%" height="500px"></iframe>
    </div>
  );
};

export default PdfViewer;
