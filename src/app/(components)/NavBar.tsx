"use client";
import Link from "next/link";
import { useGlobalContext } from "../context/store";
import { usePathname, useRouter } from "next/navigation";
import Dropdown from "./dropdown";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

const NavBar = () => {
  const customSize: SizeProp = "lg";
  const router = useRouter();
  let pathname = usePathname();
  

  return (
    <header className="">
      <nav>
        <ul className="flex justify-center items-center space-x-8 text-[#252525] text-[15px] font-bold">
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
                //setImageSlide(true);
                //setActive("home");
              }}
            >
              Home
            </Link> */}
          </li>
          <li>
            <div
              className={`outline-none focus:outline-none flex flex-row items-center border-[#3b3b3b]  pr-1  ${
                pathname === "/hospPage/about" ? "border-[2px]" : "border-[0px]"
              } `}
            >
              <Link
                href="/hospPage/about"
                prefetch
                className={` p-1.5  hover:text-gray-600 `}
                scroll={false}
                onClick={(e) => {
                  console.log("pathname==", pathname);
                  ////setActive("about");
                }}
              >
                About us
              </Link>
              <Dropdown title="" openOnHover={true}>
                <Dropdown.Item
                  onClick={() => {
                    router.push(`/hospPage/about/gallery`);
                  }}
                >
                  GALLERY
                </Dropdown.Item>
              </Dropdown>
            </div>
          </li>
          <li>
            <div
              className={`outline-none focus:outline-none flex flex-row items-center border-[#3b3b3b]  pr-1  ${
                (pathname === "/hospPage/hospital"||pathname === "/hospPage/hospital/opd"||
                pathname ==="/hospPage/hospital/medical-sup"||pathname === "/hospPage/hospital/ipd")
                  ? "border-[2px]"
                  : "border-[0px]"
              } `}
            >
              <Link
                href="#"
                prefetch
                className={` p-1.5  hover:text-gray-600 `}
                scroll={false}
                onClick={(e) => {
                  ////setImageSlide(false);
                  ////setActive("hospital");
                }}
              >
                Hospital
              </Link>
              <Dropdown openOnHover={true} title="">
                <Dropdown.Item>
                  <div className="w-full flex flex-row justify-between">
                    <div>OPD</div>
                    <div>{'>'}</div>
                  </div>
                 
                  <Dropdown.Submenu>
                    <Dropdown.Item onClick={()=>{//setImageSlide(false);
                       router.push(`/hospPage/hospital/opd?id=${0}`)}
                    }>
                      Kayachikitsa
                      </Dropdown.Item>
                      <Dropdown.Divider size="lg"/>
                    <Dropdown.Item 
                    onClick={()=>{//setImageSlide(false);
                       router.push(`/hospPage/hospital/opd?id=${1}`)}
                    }>
                      Kaumarbhritya
                      </Dropdown.Item>
                      <Dropdown.Divider size="lg"/>
                    <Dropdown.Item 
                     onClick={()=>{//setImageSlide(false);
                      router.push(`/hospPage/hospital/opd?id=${2}`)}
                   }>
                    Panchkarma
                    </Dropdown.Item>
                    <Dropdown.Divider size="lg"/>
                    <Dropdown.Item
                     onClick={()=>{//setImageSlide(false);
                      router.push(`/hospPage/hospital/opd?id=${3}`)}
                   }>Prasuti & Stri Roga
                   </Dropdown.Item>
                   <Dropdown.Divider size="lg"/>
                    <Dropdown.Item
                     onClick={()=>{//setImageSlide(false);
                      router.push(`/hospPage/hospital/opd?id=${4}`)}
                   }>Shalakya Tantra
                   </Dropdown.Item>
                   <Dropdown.Divider size="lg"/>
                    <Dropdown.Item
                     onClick={()=>{//setImageSlide(false);
                      router.push(`/hospPage/hospital/opd?id=${5}`)}
                   }>Shalya Tantra
                   </Dropdown.Item>
                   <Dropdown.Divider size="lg"/>
                    <Dropdown.Item
                     onClick={()=>{
                      //setImageSlide(false);
                      router.push(`/hospPage/hospital/opd?id=${6}`)}
                   }>Swasthavritta
                   </Dropdown.Item>
                  </Dropdown.Submenu>
                </Dropdown.Item>
                <Dropdown.Divider size="lg"/>
                <Dropdown.Item
                onClick={()=>{
                  //setImageSlide(false);
                  router.push(`/hospPage/hospital/ipd`)}
               }>
                  IPD
                </Dropdown.Item>
                <Dropdown.Divider size="lg"/>
                <Dropdown.Item
                  onClick={()=>{
                    //setImageSlide(false);
                    router.push(`/hospPage/hospital/medical-sup`)}
                 }>
                  MEDICAL SUPERINTENDENT
                </Dropdown.Item>
              </Dropdown>
            </div>
            {/* <Link
              href="#"
              prefetch
              className={` p-1.5  hover:text-gray-600 border-[#3b3b3b] ${
                active === "hospital" ? "border-[2px]" : "border-[0px]"
              } transition-opacity duration-300 ease-in-out`}
              scroll={false}
              onClick={(e) => {
                //setImageSlide(false);
                //setActive("hospital");
              }}
            >
              Hospital
            </Link> */}
          </li>
          <li>
          <div
              className={`outline-none focus:outline-none flex flex-row items-center border-[#3b3b3b]  pr-1  ${
                (pathname === "/hospPage/college"||pathname === "/hospPage/college/course"||
                pathname ==="/hospPage/college/faculty"||pathname === "/hospPage/college/principle-profile")
                  ? "border-[2px]"
                  : "border-[0px]"
              } `}
            >
              <Link
                href="#"
                prefetch
                className={` p-1.5  hover:text-gray-600 `}
                scroll={false}
                onClick={(e) => {
                  ////setImageSlide(false);
                  ////setActive("hospital");
                }}
              >
                College
              </Link>
              <Dropdown openOnHover={true} title="">
                <Dropdown.Item
                 onClick={()=>{
                  ////setImageSlide(false);
                  router.push(`/hospPage/college/course`)}
               }>
                  COURSES OFFERED
                </Dropdown.Item>
                <Dropdown.Divider size="lg"/>
                <Dropdown.Item
                onClick={()=>{
                  //setImageSlide(false);
                  router.push(`/hospPage/college/faculty`)}
               }>
                  FACULTY
                </Dropdown.Item>
                <Dropdown.Divider size="lg"/>
                <Dropdown.Item
                  onClick={()=>{
                    //setImageSlide(false);
                    router.push(`/hospPage/college/principle-profile`)}
                 }>
                  PRINCIPALS PROFILE
                </Dropdown.Item>
              </Dropdown>
            </div>
            {/* <Link
              href="/hospPage/college"
              prefetch
              className={` p-1.5  hover:text-gray-600 border-[#3b3b3b] ${
                pathname === "/hospPage/college"
                  ? "border-[2px]"
                  : "border-[0px]"
              } transition-opacity duration-6000 ease-in-out`}
              scroll={false}
              onClick={(e) => {
                //setImageSlide(false);
                //setActive("college");
              }}
            >
              College
            </Link> */}
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
                //setImageSlide(false);
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
                //setImageSlide(false);
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
                //setImageSlide(false);
                //setActive("facilities");
              }}
            >
              Facilities
            </Link>
          </li>
          <li>
            <Link
              href="/hospPage/contactus"
              prefetch
              className={` p-1.5  hover:text-gray-600 border-[#3b3b3b] ${
                pathname === "/hospPage/contactus"
                  ? "border-[2px]"
                  : "border-[0px]"
              } transition-opacity duration-300 ease-in-out`}
              scroll={false}
              onClick={(e) => {
                //setImageSlide(false);
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
