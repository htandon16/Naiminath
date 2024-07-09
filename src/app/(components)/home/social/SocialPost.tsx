import React from "react";
import { LuMessageSquare, LuHeart } from "react-icons/lu";
import Image from "next/image";

const SocialPost = () => {
    const Gallery = [
        {
            imageLink: "/adm/insta/insta.jpg",
        },
        {
            imageLink: "/adm/insta/insta3.avif",
        },
        {
            imageLink: "/adm/insta/insta6.avif",
        },
        {
            imageLink: "/adm/insta/insta4.avif",
        },
        {
            imageLink: "/adm/insta/insta2.avif",
        },
        {
            imageLink: "/adm/insta/insta5.avif",
        },
        {
            imageLink: "/adm/insta/insta7.avif",
        },
        {
            imageLink: "/adm/insta/insta8.avif",
        },
    ];
    return (
        <div className="flex w-full flex-col justify-center my-[100px]">
            <div className="why-wrapper">
                <h3 className="why-heading roboto-serif-heading lined-heading">
                    See our world! Follow us on Instagram
                </h3>
                {/* <hr className="hr" /> */}
            </div>
            <div className="h-auto px-8 md:px-[44px] mt-16 gap-4 grid grid-cols-1 m-auto md:grid-cols-4 group-hover:bg-black max-w-[1366px] justify-center items-center">
                {Gallery.map(({ imageLink }, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden h-[20rem] round-lg"
                    >
                        <img
                            className="h-full w-full max-w-full rounded-lg  object-center transform transition-transform duration-300 hover:scale-110"
                            src={imageLink}
                            alt="gallery-photo"
                        />

                        <div
                            className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 
                        transition-opacity duration-300 bg-black bg-opacity-50 text-white text-center rounded-lg"
                        >
                            <div className="flex justify-between gap-[40px] ">
                                <a
                                    href="https://www.instagram.com/namcagra/"
                                    target="_blank"
                                    className="flex items-center gap-2"
                                >
                                    <span className="font-white font-extrabold text-3xl">
                                        <LuHeart />
                                    </span>
                                    <div>0</div>
                                </a>
                                <a
                                    href="https://www.instagram.com/namcagra/"
                                    target="_blank"
                                    className="flex items-center gap-2"
                                >
                                    <span className="font-white font-extrabold text-3xl">
                                        <LuMessageSquare />
                                    </span>
                                    <div>0</div>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SocialPost;
