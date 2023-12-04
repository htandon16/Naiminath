"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useGlobalContext } from "@/app/context/store";

interface Blog {
  fileName: string;
  filePath: string;
  content: string;
}

const BlogPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const { blogData, setBlogData } = useGlobalContext();
  const router = useRouter();
  
  const fetchBlogsApi = async () => {
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
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchBlogsApi().then((result) => {
      setBlogs(result);
      console.log("getResult=", result);
    });
  }, []);
 
  return (
    <div className="min-h-screen flex flex-wrap gap-5 p-[20px] justify-center items-center">
      {blogs.map((blog, index) => (
        <div
          key={blog.fileName}
          className="flex flex-col justify-center items-center basis-1/4 h-fit rounded-lg 
          overflow-hidden min-h-[350px] shadow-md inset-11 hover:bg-slate-50 cursor-pointer"
          onClick={async () => {
            setBlogData(blog.content);
            // router.push(`/hospPage/blog/blog-detail?data=${blog.content}`);
            router.push(`/hospPage/blog/blog-detail`);
          }}
        >
          <div className="w-full pb-2 flex-1 justify-center items-center">
            <h1 className="text-white py-2 text-center bg-black ">
              Blog {"-"} {index + 1}
            </h1>
            <div
              className=" overflow-hidden px-2 pt-2 w-full"
              style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                WebkitLineClamp: 10,
              }}
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>
          <div
            className="text-white overflow-hidden w-full p-4 text-center  bg-slate-400"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              WebkitLineClamp: 2,
            }}
          >
            {/* {`${blog.fileName}`} */}
          </div>
        </div>
      ))}
    </div>
  );
};
export default BlogPage;
