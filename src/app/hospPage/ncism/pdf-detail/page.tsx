'use client'
import { useGlobalContext } from "@/app/context/store";

const PdfViewer = () => {
  const { blogData } = useGlobalContext();

  console.log("data=========", blogData);
 

  return (
    <div className=" flex flex-col">
      <iframe src={blogData} width="70%" height="350px"></iframe>
    </div>
  );
};

export default PdfViewer;
