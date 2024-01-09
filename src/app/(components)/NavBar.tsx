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
    <header className=" md:my-0 my-5 md:mx-5 mx-5">
      <nav>
        <ul className="flex md:flex-row flex-col justify-center md:items-center md:space-y-0 space-y-4 md:space-x-8 
        text-[#252525] text-[15px] font-bold">
          <li>
            <Link
              href="/home"
              prefetch
              className={` p-1.5 hover:text-gray-600 border-[#3b3b3b] link ${
                pathname === "/home" ? "border-[2px]" : "border-[0px]"
              } `}
              scroll={false}
              onClick={(e) => {
                console.log("pathname==", pathname);
                
              }}
            >
              Home
            </Link>
            {/* <Link
              href="/home"
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
                pathname === "/about" ? "border-[2px]" : "border-[0px]"
              } `}
            >
              <Link
                href="/about"
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
                <Dropdown.Item className="md:text-[12px] text-[8px]"
                  onClick={() => {
                    router.push(`/about/gallery`);
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
                (pathname === "/hospital"||pathname === "/hospital/opd"||
                pathname ==="/hospital/medical-sup"||pathname === "/hospital/ipd")
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
                <Dropdown.Item className="md:text-[12px] text-[8px]">
                  <div className="w-full flex flex-row justify-between">
                    <div>OPD</div>
                    <div>{'>'}</div>
                  </div>
                 
                  <Dropdown.Submenu>
                    <Dropdown.Item  className="md:text-[12px] text-[8px]" onClick={()=>{//setImageSlide(false); 
                       router.push(`/hospital/opd?id=${0}`)}
                    }>
                      Kayachikitsa
                      </Dropdown.Item>
                      <Dropdown.Divider size="xs"/>
                    <Dropdown.Item  className="md:text-[12px] text-[8px]"
                    onClick={()=>{//setImageSlide(false);
                       router.push(`/hospital/opd?id=${1}`)}
                    }>
                      Kaumarbhritya
                      </Dropdown.Item>
                      <Dropdown.Divider size="xs"/>
                    <Dropdown.Item className="md:text-[12px] text-[10px]"
                     onClick={()=>{//setImageSlide(false);
                      router.push(`/hospital/opd?id=${2}`)}
                   }>
                    Panchkarma
                    </Dropdown.Item>
                    <Dropdown.Divider size="xs"/>
                    <Dropdown.Item className="md:text-[12px] text-[8px]"
                     onClick={()=>{//setImageSlide(false);
                      router.push(`/hospital/opd?id=${3}`)}
                   }>Prasuti & Stri Roga
                   </Dropdown.Item>
                   <Dropdown.Divider size="xs"/>
                    <Dropdown.Item className="md:text-[12px] text-[8px]"
                     onClick={()=>{//setImageSlide(false);
                      router.push(`/hospital/opd?id=${4}`)}
                   }>Shalakya Tantra
                   </Dropdown.Item>
                   <Dropdown.Divider size="xs"/>
                    <Dropdown.Item className="md:text-[12px] text-[8px]"
                     onClick={()=>{//setImageSlide(false);
                      router.push(`/hospital/opd?id=${5}`)}
                   }>Shalya Tantra
                   </Dropdown.Item>
                   <Dropdown.Divider size="xs"/>
                    <Dropdown.Item className="md:text-[12px] text-[8px]"
                     onClick={()=>{
                      //setImageSlide(false);
                      router.push(`/hospital/opd?id=${6}`)}
                   }>Swasthavritta
                   </Dropdown.Item>
                  </Dropdown.Submenu>
                </Dropdown.Item>
                <Dropdown.Divider size="xs"/>
                <Dropdown.Item className="md:text-[12px] text-[8px]"
                onClick={()=>{
                  //setImageSlide(false);
                  router.push(`/hospital/ipd`)}
               }>
                  IPD
                </Dropdown.Item>
                <Dropdown.Divider size="xs"/>
                <Dropdown.Item className="md:text-[12px] text-[8px]"
                  onClick={()=>{
                    //setImageSlide(false);
                    router.push(`/hospital/medical-sup`)}
                 }>
                  MEDICAL<br className=" md:hidden" />SUPERINTENDENT
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
                (pathname === "/college"||pathname === "/college/course"||
                pathname ==="/college/faculty"||pathname === "/college/principle-profile")
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
              <Dropdown  openOnHover={true} title="">
                <Dropdown.Item className="md:text-[12px] text-[8px]"
                 onClick={()=>{
                  ////setImageSlide(false);
                  router.push(`/college/course`)}
               }>
                  COURSES OFFERED
                </Dropdown.Item>
                <Dropdown.Divider size="xs"/>
                <Dropdown.Item className="md:text-[12px] text-[8px]"
                onClick={()=>{
                  //setImageSlide(false);
                  router.push(`/college/faculty`)}
               }>
                  FACULTY
                </Dropdown.Item>
                <Dropdown.Divider size="xs"/>
                <Dropdown.Item className="md:text-[12px] text-[8px]"
                  onClick={()=>{
                    //setImageSlide(false);
                    router.push(`/college/principle-profile`)}
                 }>
                  PRINCIPALS PROFILE
                </Dropdown.Item>
              </Dropdown>
            </div>
            {/* <Link
              href="/college"
              prefetch
              className={` p-1.5  hover:text-gray-600 border-[#3b3b3b] ${
                pathname === "/college"
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
              href="/ncism"
              prefetch
              className={` p-1.5  hover:text-gray-600 border-[#3b3b3b] ${
                pathname === "/ncism" ? "border-[2px]" : "border-[0px]"
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
              href="/blog"
              prefetch
              className={` p-1.5  hover:text-gray-600 border-[#3b3b3b] ${
                pathname === "/blog" ? "border-[2px]" : "border-[0px]"
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
              href="/facilities"
              prefetch
              className={` p-1.5  hover:text-gray-600 border-[#3b3b3b] ${
                pathname === "/facilities"
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
              href="/contactus"
              prefetch
              className={` p-1.5  hover:text-gray-600 border-[#3b3b3b] ${
                pathname === "/contactus"
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
