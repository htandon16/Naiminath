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
        { name: "Prof. Dr. Hazera Khatun", designation: "Associate Professor" },
        { name: "Dr. Siddharth Jain", designation: "Assistant Professor" },
        { name: "Dr. Ramvir", designation: "Assistant Professor" },
        { name: "Mr. Murari Saraswat", designation: "Assistant Professor Sanskrit" },
      ],
    },
    {
      id: 4,
      name: "Agad Tantra",
      faculty: [
        { name: "Prof. Dr. Brijesh Kumar Sharma", designation: "Professor & HOD" },
        { name: "Dr. Sourav Pal", designation: "Associate Professor" },
        { name: "Dr. Jitendra Kumar", designation: "Assistant Professor" },
      ],
    },
    {
      id: 5,
      name: "Rog Nidan",
      faculty: [
        { name: "Dr.  Vandana Thakur", designation: "Associate Professor" },
        { name: "Dr. Kshitij Kumar Dubey", designation: "Assistant Professor" },
      ],
    },
    {
      id: 6,
      name: "Rasa Shastra Evam Bhaishajya Kalpana",
      faculty: [
        { name: "Prof. Dr. Veena I Kale", designation: "Professor & HOD" },
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
      name: "Kayachikitsha",
      faculty: [
        { name: "Prof. Dr. Diyya Shaila Chrysenthia", designation: "Professor & HOD" },
        { name: "Dr. Pravin Kumar", designation: "Associate Professor" },
        { name: "Dr. Garima Kashyap", designation: "Assistant Professor" },
        { name: "Dr. Suman Rani", designation: "Assistant Professor" },
      ],
    },
    {
      id: 10,
      name: "Prasuti Evam Stri Roga",
      faculty: [
        { name: "Prof. Dr. Anupama Shamsunder Madhekar", designation: "Professor & HOD" },
        { name: "Dr. Bhawana Yadav", designation: "Associate Professor" },
        { name: "Dr. Suman Kumari", designation: "Assistant Professor" },
        { name: "Dr. Vasihali Mishra", designation: "Assistant Professor" },
        { name: "Dr. Ashwini Shamrao Pawar", designation: "Assistant Professor" },
      ],
    },
    {
      id: 11,
      name: "Panchkarma",
      faculty: [
        { name: "Prof. Dr. Maheshchandra Bhojraj Kandate", designation: "Professor & HOD" },
        { name: "Dr. Subhajit Chowdhury", designation: "Associate Professor" },
        { name: "Dr. Neelam Prakash Dubey", designation: "Assistant Professor" },
        { name: "Dr. Hemendra Kumar Singh", designation: "Assistant Professor" },
      ],
    },
    {
      id: 12,
      name: "Bal Rog",
      faculty: [
        { name: "Prof. Dr. Sanjay Kumar Chheepa", designation: "Professor & HOD" },
        { name: "Dr. Jaipal Poonia", designation: "Assistant Professor" },
      ],
    },
    {
      id: 13,
      name: "Shalakya Tantra",
      faculty: [
        { name: "Prof. Dr. Devendra Singh Rathore", designation: "Professor & HOD" },
        { name: "Dr. Sandeep Anand", designation: "Associate Professor" },
        { name: "Dr. Snehapriya P.R.", designation: "Assistant Professor" },
      ],
    },
    {
      id: 14,
      name: "Shalya Tantra",
      faculty: [
        { name: "Prof. Dr. Dheeraj Mohan", designation: "Professor & HOD" },
        { name: "Dr. Sayantan Chakraborty", designation: "Assistant Professor" },
        { name: "Dr. Indrabir Mishra", designation: "Assistant Professor" },
      ],
    },
    {
      id: 15,
      name: "Biostatistics",
      faculty: [
        { name: "Mrs. Anjali Bhardwaj", designation: "Biostatistician" },
      ],
    },
    {
      id: 16,
      name: "Yoga",
      faculty: [
        { name: "Mr. Rahul Dubey", designation: "Yoga Teacher" },
      ],
    },
  ];

  return (
    <>
      <head>
        <title>Faculty - Naiminath Ayurveda</title>
        <meta name="description" content=" " />
      </head>

      <div className="flex flex-col px-4">
        <div className="text-3xl mt-10 text-gray-800 text-center font-sans font-bold">
          Faculty
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block max-w-6xl mx-auto bg-white p-6 my-10 rounded-md shadow-md ring-1 ring-slate-100 overflow-x-auto">
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

        {/* Mobile Card View */}
        <div className="lg:hidden space-y-6 my-8">
          {facList.map((dept, deptIndex) => (
            <div key={dept.id} className="bg-white p-4 rounded-md shadow-md ring-1 ring-gray-100">
              <div className="text-lg font-semibold mb-2 text-[#374151]">{deptIndex + 1}. {dept.name}</div>
              <div className="divide-y divide-gray-200">
                {dept.faculty.map((fac, idx) => (
                  <div key={idx} className="py-2">
                    <p className="text-gray-800 font-medium">{fac.name}</p>
                    <p className="text-gray-500 text-sm">{fac.designation}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Faculty;
