'use client'
import { useGlobalContext } from "@/app/context/store";

const PdfViewer = () => {
  const { blogData } = useGlobalContext();

  console.log("data=========", blogData);
 

  return (
    <div className=" flex flex-col">
      <iframe src={blogData} width="100%" height="500px"></iframe>
    </div>
  );
};

export default PdfViewer;
