"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

import {
  faBookReader,
  faFileExcel,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import path from "path";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/app/context/store";

interface Doc {
  fileName: string;
  filePath: string;
  content: string;
  title: string;
  blobUrl: string;
}

const NCISM = () => {
  const router = useRouter();
  const { blogData, setBlogData,setImageSlide } = useGlobalContext();
  const customSize: SizeProp = "2xl";
  const [docs, setDocs] = useState<Doc[]>([]);
  const [loading, setLoading] = useState(true); // Added loading state

  const fetchDocsApi = async () => {
    try {
      const response = await fetch("/api/ncism", {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error: any) {
      //console.log("Error fetching data:", error.message);
      //throw error; // Rethrow the error to handle it elsewhere if needed
    }
  };

  useEffect(() => {
    setImageSlide(false)
    callApi();
  }, [setImageSlide]);

  const callApi = async () => {
    try{
      await fetchDocsApi()
      .then((result) => {
        setDocs(result);
        setLoading(false); // Set loading to false when data is fetched
        console.log("getResult=", result);
      })
      .catch(() => {
        setLoading(false); // Set loading to false on error
      });
    }catch(error){
      setLoading(false);
    }
   
  };

  const DocDetail = (content: string) => {
    const dataUrl = `data:application/pdf;base64,${content}`;
    setBlogData(dataUrl);
    // router.push(`/hospPage/blog/blog-detail?data=${blog.content}`);
    router.push(`/hospPage/ncism/pdf-detail`);
};

  return (
    <div className="flex flex-col my-12 justify-center items-center mx-40">
      <div className="">
        <h2 className="text-2xl text-[#144575] font-medium">
          REGULATORY INFO - NCISM Mandate
        </h2>
      </div>
      <div className="flex w-full mt-12 gap-10">
        <div className="w-1/2 flex flex-col justify-center items-start">
        {docs && docs.length > 0 ? (
            docs
              .filter((doc) => doc.fileName.toLowerCase().endsWith(".pdf"))
              .map((pdfDoc, index) => (
                <div
                  key={index}
                  className="flex justify-start items-center w-full h-fit border-b-[0.01px] p-3 hover:bg-slate-50 cursor-pointer"
                  onClick={async (e) => DocDetail(pdfDoc.content)}
                >
                  <FontAwesomeIcon
                    color="#23a455"
                    icon={faFilePdf}
                    size={customSize}
                    className="pr-3"
                  />
                  <p>{pdfDoc.title}</p>
                </div>
              ))
          ) : (
            <p>No PDF documents available</p>
          )}
        </div>

        <div className="w-1/2 flex flex-col justify-center items-start">
        {docs && docs.length > 0 ? (docs
            .filter((doc) => doc.fileName.toLowerCase().endsWith(".pdf"))
            .map((pdfDoc, index) => (
              <div
                key={index}
                className="flex justify-start items-center w-full h-fit border-b-[0.01px] p-3 hover:bg-slate-50 cursor-pointer"
                onClick={async (e) => DocDetail(pdfDoc.content)}
              >
                <FontAwesomeIcon
                  color="#23a455"
                  icon={faFilePdf}
                  size={customSize}
                  className="pr-3"
                />
                <p>
                  {pdfDoc.title}
                </p>
                {/* <Link
                  href={`/tmp/upload/${encodeURIComponent(pdfDoc.fileName)}`}
                  target="_blank"
                >
                  {pdfDoc.title}
                </Link> */}

                {/* <p className="text-[#8ed1fc]">{pdfDoc.title}</p> */}
              </div>
            ))
          ):(
            <p>No PDF documents available</p>
          )}
        </div>
      </div>
    </div>
  );
};




export default NCISM;
