import React from "react";
import "./whyChoose.css";
import { FaBookOpen, FaUserGraduate, FaGraduationCap } from "react-icons/fa";

const cardData = [
  {
    img: <FaBookOpen />,
    heading: "Academics",
    desc: "At Naiminath, the educational journey knows no bounds. Our courses are guided by esteemed faculty members.",
    btn: "",
  },
  {
    img: <FaUserGraduate />,
    heading: "Vibrant Student Life",
    desc: "Our housing system fosters additional learning opportunities by bringing together peers and professors from diverse backgrounds.",
    btn: "",
  },
  {
    img: <FaGraduationCap />,
    heading: "Scholarships",
    desc: "Our financial assistance program ensures that UniCamp is accessible to families all over India, regardless of their financial circumstances.",
    btn: "",
  },
];

const WhyChoose = () => {
  return (
    <>
      <div className="why-container">
        <div className="why-wrapper">
          <h3 className="why-heading">Why Choose Naiminath</h3>
          <hr className="hr" />
          <p className="about-p">
            Premier Ayurvedic education, merging tradition with modernity,
            shaping future healers.
          </p>
          <div className="why-cards">
            {cardData.map((card, index) => (
              <div key={index} className="why-card">
                <div className="card-img">{card.img}</div>
                <div className="card-heading">{card.heading}</div>
                <div className="card-desc">{card.desc}</div>
                <button className="btns">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChoose;
