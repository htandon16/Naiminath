'use client'
import React, { useState } from "react";
import "./blogsHome.css";
import { FaAnglesDown } from "react-icons/fa6";
import Image from "next/image";

const BlogsHome = () => {
    const blogs = [
        {
            img: "/images/clg2.jpg",
            title: "Unlocking the Wisdom of Ayurveda",
            desc: "Welcome to Naiminath Ayurvedic Medical College, where tradition meets innovation in the realm of holistic healthcare. In this inaugural blog post, we'll take a journey through the corridors of this esteemed institution, exploring its rich history, academic offerings, and commitment to preserving and advancing the ancient science of Ayurveda.Established with a vision to revive and promote the age-old wisdom of Ayurveda, Naiminath Ayurvedic Medical College stands as a beacon of excellence in the field of alternative medicine. Nestled amidst serene surroundings, our college provides an ideal environment for students to delve deep into the teachings of Ayurveda and emerge as proficient healers. At Naiminath, we believe in fostering a holistic approach to education, combining traditional teachings with modern scientific advancements. Our curriculum is meticulously designed to impart comprehensive knowledge of Ayurvedic principles, herbal medicine, therapeutic techniques, and diagnostic methods. Students are not only equipped with theoretical understanding but also receive hands-on training through clinical practice and research projects.      Beyond academics, Naiminath Ayurvedic Medical College is a vibrant community of like-minded individuals passionate about promoting health and wellness. Our faculty comprises experienced practitioners and scholars who are dedicated to nurturing the next generation of Ayurvedic physicians. Whether you're embarking on a journey to become an Ayurvedic doctor or seeking alternative healthcare solutions, Naiminath Ayurvedic Medical College welcomes you to explore the timeless wisdom of Ayurveda and embark on a path to holistic well-being. Stay tuned for our upcoming blogs, where we'll delve deeper into the various facets of Ayurvedic education and the unique offerings of Naiminath Ayurvedic Medical College.",
            date: "13 May",
        },
        {
            img: "/images/1.jpeg",
            title: "Embracing Innovation in Ayurvedic Medicine",
            desc: "While rooted in tradition, Ayurveda is not static. It is a dynamic system of medicine that has evolved over thousands of years, adapting to changing circumstances and incorporating new knowledge and techniques along the way. At Naiminath, we recognize the importance of innovation in keeping Ayurveda relevant and effective in the modern context. Our faculty members are actively engaged in research and development, exploring innovative approaches to Ayurvedic diagnosis, treatment, and prevention. From standardizing herbal formulations to leveraging cutting-edge technologies for diagnostic imaging, we strive to integrate the best of both worlds, preserving the authenticity of Ayurveda while harnessing the power of modern science. Additionally, our collaborations with other institutions and healthcare organizations enable us to stay abreast of the latest advancements in integrative medicine, ensuring that our students are well-equipped to navigate the complexities of today's healthcare landscape. As we look to the future, Naiminath Ayurvedic Medical College remains committed to pushing the boundaries of Ayurvedic medicine, pioneering new paths in research, education, and patient care. Through our dedication to innovation and excellence, we aim to uphold the legacy of Ayurveda and make meaningful contributions to the health and well-being of individuals and communities worldwide.",
            date: "11 May",
        },
        {
            img: "/images/clg3.png",
            title: "The Essence of Ayurvedic Education at Naiminath",
            desc: "In our previous blog post, we provided an introduction to Naiminath Ayurvedic Medical College, offering a glimpse into our commitment to preserving and advancing the ancient science of Ayurveda. In this installment, we'll delve deeper into the essence of Ayurvedic education at our institution and what sets us apart in the realm of alternative medicine. At Naiminath, we believe that education is not just about acquiring knowledge but also embodying wisdom. Our approach to Ayurvedic education is rooted in traditional teachings while embracing modern advancements in healthcare. Students are guided to understand the fundamental principles of Ayurveda, including the concept of Doshas (bio-energies), Dhatus (tissues), and Malas (waste products), among others. One of the hallmarks of our educational philosophy is experiential learning. Through our well-equipped laboratories and clinical training facilities, students have the opportunity to apply theoretical knowledge in real-world settings, honing their diagnostic and therapeutic skills under the guidance of experienced practitioners. Furthermore, our emphasis on research encourages students to explore new frontiers in Ayurvedic medicine, conducting studies that contribute to the growing body of evidence supporting the efficacy of traditional healing modalities. Beyond the classroom, Naiminath Ayurvedic Medical College fosters a culture of holistic well-being, nurturing the physical, mental, and spiritual health of our students. Yoga, meditation, and mindfulness practices are integrated into the curriculum to promote self-awareness and stress management, essential qualities for aspiring healers. As we continue our journey of exploration and discovery, Naiminath Ayurvedic Medical College remains committed to empowering students with the knowledge and skills to become compassionate and competent practitioners of Ayurveda, dedicated to serving humanity and preserving the legacy of this ancient healing tradition.",
            date: "10 May",
        },
    ];

    const [hoveredIndex, setHoveredIndex] = useState(0);

    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(0);
    };
    return (
        <div className="blogs-home">
            <div className="blogs-home-wrapper">
                <div className="why-wrapper">
                    <h3 className="why-heading roboto-serif-heading lined-heading">
                        Blogs
                    </h3>
                    {/* <hr className="hr" /> */}
                </div>
                <div className="blogs-main">
                    <div className="blogs-main-right">
                        {blogs.map((blog, index) => (
                            <div
                                // className="blog-single"
                                className={`blog-single ${hoveredIndex === index ? "hovered" : "unhovered"
                                    }`}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                                key={index}
                            >
                                <hr
                                    className={` ${hoveredIndex === index ? "hovhr" : "unhovhr"}`}
                                />
                                <div
                                    className={`bdate ${hoveredIndex === index ? "hovdate" : "unhovdate"
                                        }`}
                                >
                                    {blog.date}
                                </div>
                                <div className="btext">
                                    <div className="btitle">{blog.title}</div>
                                    <div className="bdesc">
                                        {blog.desc.slice(0, 100) + "..."} <span>Read More.</span>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                        ))}
                        <a href="https://naiminathayurveda.org/blog" target="_blank">
                            <FaAnglesDown color="#de0000ff" />
                        </a>
                    </div>
                    <div className="blogs-main-left">
                        {hoveredIndex !== null && (
                            <img
                                className="blogs-home-img"
                                src={blogs[hoveredIndex].img}
                                alt=""
                            />
                        )}
                    </div>
                </div>
            </div>
            {/* <button className="btns hero-btn blog-btn">More Blogs</button> */}
        </div>
    );
};

export default BlogsHome;
