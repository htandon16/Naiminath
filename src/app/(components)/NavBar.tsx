"use client";
import Link from "next/link";
import { useState } from "react";
import { useGlobalContext } from "../context/store";
import { usePathname } from "next/navigation";

const NavBar = () => {
  // const [active, setActive] = useState("home");

  const { setImageSlide } = useGlobalContext();
  let pathname = usePathname();
  // console.log("NavBar=", active);
  return (
    <header className="">
      <nav>
        <ul className="flex space-x-8 text-[#252525] text-[15px] font-bold">
          <li>
            <Link
              href="/hospPage/home"
              prefetch
              className={` p-1.5 hover:text-gray-600 border-[#3b3b3b] link ${
                pathname === "/hospPage/home" ? "border-[2px]" : "border-[0px]"
              } `}
              scroll={false}
              onClick={(e) => {
                console.log("pathname==", pathname);
                setImageSlide(true);

                // //setActive("home");
              }}
            >
              Home
            </Link>
            {/* <Link
              href="/hospPage/home"
              className={` p-1.5 hover:text-gray-600 border-[#3b3b3b] ${
                active === "home" ? "border-[2px]" : "border-[0px]"
              } `}
              prefetch
              scroll={false}
              onClick={(e) => {
                setImageSlide(true);
                //setActive("home");
              }}
            >
              Home
            </Link> */}
          </li>
          <li>
            <Link
              href="/hospPage/about"
              prefetch
              className={` p-1.5  hover:text-gray-600 border-[#3b3b3b]  ${
                pathname === "/hospPage/about" ? "border-[2px]" : "border-[0px]"
              } `}
              scroll={false}
              onClick={(e) => {
                console.log("pathname==", pathname);
                setImageSlide(false);
                ////setActive("about");
              }}
            >
              About us
            </Link>
            {/* <Link
              href="/hospPage/about"
              prefetch
              className={` p-1.5  hover:text-gray-600 border-[#3b3b3b] ${
                active === "about" ? "border-[2px]" : "border-[0px]"
              } `}
              scroll={false}
              onClick={(e) => {
                setImageSlide(false);
                //setActive("about");
              }}
            >
              About us
            </Link> */}
          </li>
          <li>
            <Link
              href="/hospPage/hospital"
              prefetch
              className={` p-1.5  hover:text-gray-600 border-[#3b3b3b] ${
                pathname === "/hospPage/hospital"
                  ? "border-[2px]"
                  : "border-[0px]"
              }  transition-opacity duration-300 ease-in-out`}
              scroll={false}
              onClick={(e) => {
                setImageSlide(false);
                ////setActive("hospital");
              }}
            >
              Hospital
            </Link>
            {/* <Link
              href="#"
              prefetch
              className={` p-1.5  hover:text-gray-600 border-[#3b3b3b] ${
                active === "hospital" ? "border-[2px]" : "border-[0px]"
              } transition-opacity duration-300 ease-in-out`}
              scroll={false}
              onClick={(e) => {
                setImageSlide(false);
                //setActive("hospital");
              }}
            >
              Hospital
            </Link> */}
          </li>
          <li>
            <Link
              href="/hospPage/college"
              prefetch
              className={` p-1.5  hover:text-gray-600 border-[#3b3b3b] ${
                pathname === "/hospPage/college"
                  ? "border-[2px]"
                  : "border-[0px]"
              } transition-opacity duration-6000 ease-in-out`}
              scroll={false}
              onClick={(e) => {
                setImageSlide(false);
                //setActive("college");
              }}
            >
              College
            </Link>
          </li>
          <li>
            <Link
              href="/hospPage/ncism"
              prefetch
              className={` p-1.5  hover:text-gray-600 border-[#3b3b3b] ${
                pathname === "/hospPage/ncism" ? "border-[2px]" : "border-[0px]"
              } transition-opacity duration-300 ease-in-out`}
              scroll={false}
              onClick={(e) => {
                setImageSlide(false);
                //setActive("ncism");
              }}
            >
              NCISM
            </Link>
          </li>
          <li>
            <Link
              href="/hospPage/blog"
              prefetch
              className={` p-1.5  hover:text-gray-600 border-[#3b3b3b] ${
                pathname === "/hospPage/blog" ? "border-[2px]" : "border-[0px]"
              } transition-opacity duration-300 ease-in-out`}
              scroll={false}
              onClick={(e) => {
                setImageSlide(false);
                //setActive("blog");
              }}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/hospPage/facilities"
              prefetch
              className={` p-1.5  hover:text-gray-600 border-[#3b3b3b] ${
                pathname === "/hospPage/facilities"
                  ? "border-[2px]"
                  : "border-[0px]"
              } transition-opacity duration-300 ease-in-out`}
              scroll={false}
              onClick={(e) => {
                setImageSlide(false);
                //setActive("facilities");
              }}
            >
              Facilities
            </Link>
          </li>
          <li>
            <Link
              href="/hospPage/contact"
              prefetch
              className={` p-1.5  hover:text-gray-600 border-[#3b3b3b] ${
                pathname === "/hospPage/contact"
                  ? "border-[2px]"
                  : "border-[0px]"
              } transition-opacity duration-300 ease-in-out`}
              scroll={false}
              onClick={(e) => {
                setImageSlide(false);
                //setActive("contact");
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
