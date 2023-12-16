"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

import {
  faBookReader,
  faFileCsv,
  faFileExcel,
  faFilePdf,
  faFileZipper,
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
  const { blogData, setBlogData, setImageSlide } = useGlobalContext();
  const customSize: SizeProp = "2xl";
  const [docs, setDocs] = useState<Doc[]>([]);
  const [loading, setLoading] = useState(true); // Added loading state

  const API_KEY = "AIzaSyCYBae_0O2BuXaG6oiDAouK0ZHO5vlM27Y";
  const folderId = "146Am-MP_RV0TbS44jjSWTsPYZImzk6hq";
  const apiUrl = `https://www.googleapis.com/drive/v3/files?q=${folderId}+in+parents&key=${API_KEY}`;
  
  const fetchDocsApi = async () => {
    try {
      const response = await fetch(apiUrl, {
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


  const filesList = [
    {url:"/doc/ncism/doc1.pdf", title:"NOC from State Government"},
    {url:"/doc/ncism/doc2.pdf", title:"Consent of Affiliation from University"},
    {url:"/doc/ncism/doc3.pdf", title:"Letter of Intent from NCISM 2021-22"},
    {url:"/doc/ncism/doc4.pdf", title:"Letter of Permission from NCISM 2021-22"},
    {url:"/doc/ncism/doc5.pdf", title:"Letter of Permission from NCISM 2022-23"},
    {url:"/doc/ncism/doc6.pdf", title:"Permission Letter 2023-24"},
    {url:"/doc/ncism/doc7.pdf", title:"Letter of Affiliation from University 2021-22"},
    {url:"/doc/ncism/doc8.pdf", title:"Letter of Affiliation from University 2022-23"},
    {url:"/doc/ncism/doc9.pdf", title:"List of Teaching Staff"},
    {url:"/doc/ncism/doc10.pdf", title:"List of Non Teaching Staff"},
    {url:"/doc/ncism/doc11.pdf", title:"List of Hospital Staff"},
    {url:"/doc/ncism/doc12.pdf", title:"Details of Affiliating University"},
    {url:"/doc/ncism/doc13.pdf", title:"Details of Vice Chancellor - Affiliating University"},
    {url:"/doc/ncism/doc14.pdf", title:"College Council"},
    {url:"/doc/ncism/doc15.pdf", title:"Clinical Material of the Hospital 1 Jan 2023 to 31 July 2023"},
    {url:"/doc/ncism/doc16.pdf", title:"Clinical Material of the Hospital 1 Jan 2022 to 31 December 2022"},
    {url:"/doc/ncism/doc17.pdf", title:"Clinical Material of the Hospital 1 Jan 2021 to 31 Dec 2021"},
    {url:"/doc/ncism/doc18.xlsx", title:"Clinical Material of the Hospital 1 Jan 2020 to 31 Dec 2020"},
    {url:"/doc/ncism/doc19.xlsx", title:"Clinical Material of the Hospital Date 1 Jan to 31 Dec 2019"},
    {url:"/doc/ncism/doc20.pdf", title:"Awards and Achievements"},
    {url:"/doc/ncism/doc21.pdf", title:"CME and Conferences"},
    {url:"/doc/ncism/doc22.pdf", title:"Research Publications"},
    {url:"/doc/ncism/doc23.pdf", title:"Results"},
    {url:"/doc/ncism/doc24.zip", title:"Biometric Attendance - Teaching Staff, Non-Teaching Staff & Hospital Staff"},
    {url:"/doc/ncism/doc25.zip", title:"List of students admitted"},
    
  ];
  const GetFileIcon=({ fileType }: { fileType: string })=> {
    switch (fileType) {
      case 'pdf':
        return (
          <FontAwesomeIcon
            color="#ad1c1c"
            icon={faFilePdf}
            size={customSize}
            className="pr-3"
          />
        );
      case 'zip':
        return (
          <FontAwesomeIcon
            color="#ff9900"
            icon={faFileZipper}
            size={customSize}
            className="pr-3"
          />
        );
      case 'xlsx':
        return (
          <FontAwesomeIcon
            color="#23a455"
            icon={faFileExcel}
            size={customSize}
            className="pr-3"
          />
        );
      // Add more cases as needed for other file types
      default:
        return null;
    }
  }

  useEffect(() => {
    setImageSlide(false);
    callApi();
  }, [setImageSlide]);

  const callApi = async () => {
    try {
      await fetchDocsApi()
        .then((result) => {
          setDocs(result);
          setLoading(false); // Set loading to false when data is fetched
          console.log("getResult=", result);
        })
        .catch(() => {
          setLoading(false); // Set loading to false on error
        });
    } catch (error) {
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
        <div className="w-full flex flex-wrap justify-start items-center">
          {filesList && filesList.length > 0 ? (
            filesList
              .map((doc, index) => (
                <div
                  key={index}
                  className="flex justify-start items-center basis-1/2 h-fit border-b-[0.01px] p-3 hover:bg-slate-50 cursor-pointer"
                  onClick={async (e) => router.push(doc.url)}
                >
                  <GetFileIcon fileType={doc.url.split('.').pop()||""}/>
                  <p className="text-[#81ccdb]">{doc.title}</p>
                </div>
              ))
          ) : (
            <p>No PDF documents available</p>
          )}
        </div>
      </div>
    </div>
    
    // <div className="flex flex-col my-12 justify-center items-center mx-40">
    //   <div className="">
    //     <h2 className="text-2xl text-[#144575] font-medium">
    //       REGULATORY INFO - NCISM Mandate
    //     </h2>
    //   </div>
    //   <div className="flex w-full mt-12 gap-10">
    //     <div className="w-1/2 flex flex-col justify-center items-start">
    //       {docs && docs.length > 0 ? (
    //         docs
    //           .filter((doc) => doc.fileName.toLowerCase().endsWith(".pdf"))
    //           .map((pdfDoc, index) => (
    //             <div
    //               key={index}
    //               className="flex justify-start items-center w-full h-fit border-b-[0.01px] p-3 hover:bg-slate-50 cursor-pointer"
    //               onClick={async (e) => DocDetail(pdfDoc.content)}
    //             >
    //               <FontAwesomeIcon
    //                 color="#23a455"
    //                 icon={faFilePdf}
    //                 size={customSize}
    //                 className="pr-3"
    //               />
    //               <p>{pdfDoc.title}</p>
    //             </div>
    //           ))
    //       ) : (
    //         <p>No PDF documents available</p>
    //       )}
    //     </div>

    //     <div className="w-1/2 flex flex-col justify-center items-start">
    //       {docs && docs.length > 0 ? (
    //         docs
    //           .filter((doc) => doc.fileName.toLowerCase().endsWith(".pdf"))
    //           .map((pdfDoc, index) => (
    //             <div
    //               key={index}
    //               className="flex justify-start items-center w-full h-fit border-b-[0.01px] p-3 hover:bg-slate-50 cursor-pointer"
    //               onClick={async (e) => DocDetail(pdfDoc.content)}
    //             >
    //               <FontAwesomeIcon
    //                 color="#23a455"
    //                 icon={faFilePdf}
    //                 size={customSize}
    //                 className="pr-3"
    //               />
    //               <p>{pdfDoc.title}</p>
    //               {/* <Link
    //               href={`/tmp/upload/${encodeURIComponent(pdfDoc.fileName)}`}
    //               target="_blank"
    //             >
    //               {pdfDoc.title}
    //             </Link> */}

    //               {/* <p className="text-[#8ed1fc]">{pdfDoc.title}</p> */}
    //             </div>
    //           ))
    //       ) : (
    //         <p>No PDF documents available</p>
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
};

export default NCISM;
