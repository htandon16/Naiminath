"use client";
import { useGlobalContext } from "@/app/context/store";
import { useEffect } from "react";

const Faculty = () => {
  const { setImageSlide } = useGlobalContext();

  useEffect(() => {
    setImageSlide(false);
  }, [setImageSlide]);

  const facList = [
    {
      id: 1,
      name: "Rachana Sharir",
      faculty: [
        { name: "Prof. Dr. Ganesh B. Patil", designation: "Professor & HOD" },
        { name: "Dr. Arup Ratan Das", designation: "Associate Professor" },
        { name: "Dr. Priyanka Kumari", designation: "Assistant Professor" },
      ],
    },
    {
      id: 2,
      name: "Kriya Sharir",
      faculty: [
        { name: "Prof. Dr. Hemant Lata Gupta", designation: "Professor & HOD" },
        { name: "Dr. Sandhya Singh", designation: "Associate Professor" },
        { name: "Dr. Edal Singh Gurjar", designation: "Assistant Professor" },
      ],
    },
    {
      id: 3,
      name: "Samhita Evam Siddhant",
      faculty: [
        { name: "Prof. Dr. Chandan Singh", designation: "Professor & HOD" },
        { name: "Dr. Hezra Khatun", designation: "Associate Professor" },
        { name: "Dr. Siddharth Jain", designation: "Assistant Professor" },
      ],
    },
    {
      id: 4,
      name: "Agad Tantra",
      faculty: [
        { name: "Prof. Dr. Brijesh Kumar Sharma", designation: "Professor & HOD" },
        { name: "Dr. Sourav Pal", designation: "Associate Professor" },
        { name: "Dr. Sitendra Kumar", designation: "Assistant Professor" },
      ],
    },
    {
      id: 5,
      name: "Rog Nidan",
      faculty: [
        { name: "Dr. Vandana Thakur", designation: "Associate Professor" },
        { name: "Dr. Khisti Kumar Dubey", designation: "Assistant Professor" },
      ],
    },
    {
      id: 6,
      name: "Rasa Shastra Evam Bhaishajya",
      faculty: [
        { name: "Prof. Dr. Veena Kale", designation: "Professor & HOD" },
        { name: "Dr. Shristi Balbhadra", designation: "Associate Professor" },
        { name: "Dr. Jagdish Gehlot", designation: "Assistant Professor" },
      ],
    },
    {
      id: 7,
      name: "Swasthavritta & Yoga",
      faculty: [
        { name: "Prof. Dr. Girish M. Shende", designation: "Professor & HOD" },
        { name: "Dr. Rajat Chaturvedi", designation: "Associate Professor" },
        { name: "Dr. Bajrang Ramawat", designation: "Assistant Professor" },
      ],
    },
    {
      id: 8,
      name: "Dravyaguna",
      faculty: [
        { name: "Prof. Dr. Rajesh Kumar Verma", designation: "Professor & HOD" },
        { name: "Prof. Dr. Pradeep Kumar Srivastava", designation: "Professor & Principal" },
        { name: "Dr. Virendra Singh", designation: "Assistant Professor" },
      ],
    },
    {
      id: 9,
      name: "Kayachikitsa",
      faculty: [
        { name: "Prof. Dr. Ujja Shaila Cirgenshetti", designation: "Professor & HOD" },
        { name: "Dr. Pravin Kumar", designation: "Associate Professor" },
        { name: "Dr. Garima Kashyap", designation: "Assistant Professor" },
      ],
    },
    {
      id: 10,
      name: "Prasuti Evam Stri Roga",
      faculty: [
        { name: "Prof. Dr. Anupama Shamsunder M", designation: "Professor & HOD" },
        { name: "Dr. Swarnlata Kumari", designation: "Associate Professor" },
        { name: "Dr. Vasalini Mishra", designation: "Assistant Professor" },
      ],
    },
    {
      id: 11,
      name: "Shalya Tantra",
      faculty: [
        { name: "Prof. Dr. Shantamma Pawar", designation: "Professor & HOD" },
        { name: "Dr. Dhanashaksha Bhojraj Kande", designation: "Associate Professor" },
        { name: "Dr. Sujeet Chowdhury", designation: "Assistant Professor" },
      ],
    },
    {
      id: 12,
      name: "Panchkarma",
      faculty: [
        { name: "Prof. Dr. Meenakshi Chaudhary", designation: "Professor & HOD" },
        { name: "Dr. Anand Kumar Singh", designation: "Assistant Professor" },
        { name: "Dr. Sujeeta Kumari Cheepa", designation: "Assistant Professor" },
      ],
    },
    {
      id: 13,
      name: "Shalakya Tantra",
      faculty: [
        { name: "Prof. Dr. Gaurav Singh Rathore", designation: "Professor & HOD" },
        { name: "Dr. Heena Bano", designation: "Assistant Professor" },
      ],
    },
    {
      id: 14,
      name: "Shalakya – Shalya",
      faculty: [
        { name: "Dr. Gaurav Singh Rathore", designation: "Professor & HOD" },
      ],
    },
  ];

  return (
    <>
      <head>
        <title>Faculty - Naiminath Ayurveda</title>
        <meta name="description" content=" " />
      </head>

      <div className="flex flex-col">
        <div className="text-3xl mt-10 text-gray-800 text-center font-sans font-bold">
          Faculty
        </div>
        <div className="max-w-5xl mx-auto bg-white p-6 my-10 rounded-md shadow-md ring-1 ring-slate-100 overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="font-sans bg-gray-200 text-left">
              <tr>
                <th className="py-2 px-4 border">S.No.</th>
                <th className="py-2 px-4 border">Subject</th>
                <th className="py-2 px-4 border">Faculty Name</th>
                <th className="py-2 px-4 border">Designation</th>
              </tr>
            </thead>
            <tbody>
              {facList.map((dept, deptIndex) =>
                dept.faculty.map((fac, facIndex) => (
                  <tr key={`${dept.id}-${facIndex}`} className="text-[#748182] font-sans">
                    {facIndex === 0 && (
                      <>
                        <td rowSpan={dept.faculty.length} className="py-2 px-4 border align-top">
                          {deptIndex + 1}.
                        </td>
                        <td rowSpan={dept.faculty.length} className="py-2 px-4 border align-top font-medium">
                          {dept.name}
                        </td>
                      </>
                    )}
                    {facIndex !== 0 && null}
                    <td className="py-2 px-4 border">{fac.name}</td>
                    <td className="py-2 px-4 border">{fac.designation}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Faculty;
