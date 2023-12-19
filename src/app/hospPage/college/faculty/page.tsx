"use client";
import { useGlobalContext } from "@/app/context/store";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const Faculty = () => {
  const { setImageSlide } = useGlobalContext();

  useEffect(() => {
    console.log("Page loaded");
    setImageSlide(false);
  }, [setImageSlide]);

  const facList = [
    {
      id: 1,
      name: "Kriya Sharir",
      faculty: [
        "a) Prof. Dr. Hemant Lata Gupta, Professor (HOD)",
        "b) Dr. Sandhya Singh, Associate Professor",
        "c) Dr. Edal Singh Gurjar, Assistant Professor",
      ],
    },
    {
      id: 2,
      name: "Rachana Sharir",
      faculty: [
        "a) Prof. Dr. Ganesh Basweshwar Patil, Principal and Professor (HOD)",
        "b) Prof. Dr. Arup Ratan Das, Associate Professor",
        "c) Dr. Priyanka Kumari, Assistant Professor",
      ],
    },
    {
      id: 3,
      name: "Samhita & Siddhant",
      faculty: [
        "a)  Prof. Dr. Suprit Gupta, Professor (HOD)",
        "b)  Dr. Pawan Kumar, Associate Professor",
        "c)  Dr. Siddharth Jain, Assistant Professor",
      ],
    },
    {
      id: 4,
      name: "Sanskrit",
      faculty: ["a) Mr. Jeetendra Kumar, M.A. (Sanskrit)"],
    },
    {
      id: 5,
      name: "Swasthvritta evam Yoga",
      faculty: [
        "a) Prof. Dr. Ramdas Dhanaji Chavan, Professor (HOD)",
        "b) Prof. Dr. Vijay Suresh Shirke, Professor",
        "c) Dr. Bajrang Ramawat, Assistant Professor",
      ],
    },
    {
      id: 6,
      name: "Rog Nidan evum Vikriti Vigyan",
      faculty: [
        "a) Prof. Dr. Mupparapu Rajanna, Professor (HOD)",
        "b) Dr. Kamal Kishore, Associate Professor",
        "c) Dr. Prayasha Rohilla, Assistant Professor",
      ],
    },
    {
      id: 7,
      name: "Agad Tantra evum Vidhi Vaidyaka",
      faculty: [
        "a) Prof. Dr. Mahantesh Hiremath, Professor (HOD)",
        "b) Dr. Sourav Pal, Associate Professor",
        "c) Dr. Ankit Gupta, Assistant Professor",
      ],
    },
    {
      id: 8,
      name: "Rasa shastra evum Bhaishajya Kalpana",
      faculty: [
        "a) Prof. Dr. Veena I. Kale, Professor (HOD)",
        "b) Dr. Shristi Balbhadra, Associate Professor",
        "c) Dr. Jagdish Gehlot, Assistant Professor",
      ],
    },
    {
      id: 9,
      name: "Dravyaguna",
      faculty: [
        "a) Prof. Dr. Pradeep Kumar, Professor (HOD)",
        "b) Dr. Rajesh Kumar Verma, Professor",
        "c) Dr. Bhavna Gupta, Assistant Professor",
      ],
    },
  ];

  return (
    <>
    <Helmet>
    <meta name="robots" content="max-image-preview:large"/>
    <title>Faculty Naiminath Ayurveda : Top BAMS College in India</title>
    <meta name="description" content="NA" />
    </Helmet>
      <div className=" flex flex-col">
      <div className=" text-3xl mt-10 text-gray-800 text-center font-sans font-bold">
        Faculty
      </div>
      <div className="max-w-4xl mx-auto bg-white p-6 my-10 rounded-md shadow-md ring-1 ring-slate-100">
        <table className="min-w-full">
          <thead className=" font-sans">
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border">
                <strong>S.No.</strong>
              </th>
              <th className="py-2 px-4 border">
                <strong>Subject</strong>
              </th>
              <th className="py-2 px-4 border">
                <strong>Faculty</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            {facList.map((department, index) => (
              <tr key={department.id} className="text-[#748182] font-sans">
                <td className="py-2 px-4 border">
                  <strong>{index + 1}.</strong>
                </td>
                <td className="py-2 px-4 border">
                  <strong>{department.name}</strong>
                </td>
                <td className="py-2 px-4 border">
                  <ul className="list-inside">
                    {department.faculty.map((faculty, facultyIndex) => (
                      <div className="my-4" key={facultyIndex}>
                        <li>
                          <strong>
                            <span>{`${faculty
                              .split(",")
                              .slice(0, -1)
                              .join(",")}`}</span>
                            <span className="font-normal italic">
                              {faculty.split(",").pop()}
                            </span>
                          </strong>
                        </li>

                        {facultyIndex !== department.faculty.length - 1 && (
                          <div className="border-t border-gray-300 my-4"></div>
                        )}
                      </div>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  
  );
};

export default Faculty;
