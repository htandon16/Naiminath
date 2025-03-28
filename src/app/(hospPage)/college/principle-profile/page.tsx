'use client'
import { useGlobalContext } from "@/app/context/store";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const PrincipalProfile = () => {
  const { setImageSlide } = useGlobalContext();

  useEffect(() => {
    console.log('Page loaded');
    setImageSlide(false);
  }, [setImageSlide]);

  return (
    <>
      <head>
        <title>Principal’s Profile - Naiminath Ayurveda</title>
        <meta name="description" content=" " />
      </head>

      <div className="flex flex-col justify-center items-center font-serif">
        <div
          className=" bg-[url('/images/aboutus_bg.jpg')] bg-cover h-[20vh] w-full flex items-center justify-center 
      text-[#54595f] md:text-[32px] text-[28px] font-extrabold border-b-[0.009px] border-[#8b939465] font-sans"
        >
          Principal’s Profile
        </div>
        <div className=" text-2xl mt-10 text-gray-500 px-5">Prof. Dr. Pradeep Kumar Srivastava</div>
        <div className="md:w-[60vw] w-[90vw] flex flex-col bg-white border border-gray-200 divide-y divide-gray-200 rounded-xl m-12">
          <details className="py-6 group" open={false}>
            <summary className="flex items-center justify-between cursor-pointer px-6">
              <h5 className="text-lg font-medium text-gray-900">Basic Details</h5>

              <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </summary>
            <div className="border-t border-gray-300 mt-6"></div>
            <div className="mt-4 leading-relaxed text-red-500 px-6">
              <div className=" font-serif">
                <p>
                  Name : <span className="font-normal text-gray-700">Prof. Dr. Pradeep Kumar Srivastava</span>
                </p>
                <p>
                  Department : <span className="font-normal text-gray-700">Dravyaguna </span>
                </p>
                <p>
                  D.O.B.: <span className="font-normal text-gray-700">24-Oct-1962</span>
                </p>
                <p>
                  Teacher Code: <span className="font-normal text-gray-700">AYDG01139</span>
                </p>
                <p>
                  Date of Joining: <span className="font-normal text-gray-700">29/09/2023</span>
                </p>
                <p>
                  Teaching Experience:{" "}
                  <span className="font-normal text-gray-700">29 years</span>
                </p>
              </div>

              <div className="mt-4">
                <p className=" font-serif text-red-500">Current Address:</p>
                <span className="ml-4 text-gray-700">
                  Plot No. 3, Shankar Puri, Near Ram Navjeevan Nursing Home, Agra, U.P. - 282010
                </span>
              </div>

              {/* <div className="mt-4 font-bold">
                <p className="font-bold mb-5">Contact:</p>
                <p className="ml-4">
                  <span className="text-black font-normal">1.</span>{" "}
                  <span className=" text-red-500">Phone:</span>{" "}
                  <span className="text-gray-700">+919860569679</span>
                </p>
                <p className="ml-4">
                  <span className="text-black font-normal ">2.</span>{" "}
                  <span className=" text-red-500">Email:</span>{" "}
                  <span className="text-gray-700">drgbpatil@gmail.com</span>
                </p>
              </div> */}
            </div>
          </details>

          <details className="py-6 group" open={false}>
            <summary className="flex items-center justify-between cursor-pointer px-6">
              <h5 className="text-lg font-medium text-gray-900">
                Academic Qualification
              </h5>

              <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </summary>
            <div className="border-t border-gray-300 mt-6"></div>
            <div className="mt-4 px-6">
              <p className="font-bold mb-5">Educational Qualifications:</p>
              <p className="ml-4">
                <span className="text-black">1.</span>{" "}

                <span className="font-normal">
                  UG Qualification (University & Year): Kanpur University, Kanpur - 1986
                </span>
              </p>
              <p className="ml-4">
                <span className="text-black">2.</span>{" "}
                <span className="font-normal">PG Qualification with Subject (University & Year): Rajasthan University, Jaipur - 1992</span>
              </p>
            </div>
          </details>
        </div>
      </div>
    </>

  );
};

export default PrincipalProfile;
