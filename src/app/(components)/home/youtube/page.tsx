import React from "react";
import "./youtube.css";
import { FaPlay } from "react-icons/fa6";
import Link from "next/link";

const Youtube = () => {
  return (
    <div className="yt-sec">
      <div className="yt-sec-wrapper">
        <div className="yt-sec-left">
          <h3 className="yt-head">
            We're Naiminath <br /> <strong>& We're Different</strong>
          </h3>
          <p className="yt-p">
            WE ARE MAKING LEARNING MORE RELEVANT AND TRANSFORMATIONAL.
          </p>
        </div>
        <div className="play-button-container">
          <div className="icon-container">
            <div className="yt-sec-right">
              <Link href="https://www.youtube.com/@nhmcagra" target="_blank">
                <div className="border-grow">
                  <FaPlay className="play-icon" size={80} color="red" />
                  <div className="pulse"></div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
