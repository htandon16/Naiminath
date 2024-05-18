import React from "react";
import "./applyHome.css";

const counters = [
  { num: 3570, val: "Students" },
  { num: 170, val: "Research Publications" },
  { num: 3, val: "National Awards" },
  { num: 150, val: "Top Instructors and Experts" },
];

const ApplyHome = () => {
  return (
    <div className="applyHome">
      <div className="apply-box">
        <div className="apply-sec">
          <h3 className="why-heading">Apply for Admissions</h3>
          <hr className="hr" />
          <p className="applyp">
            At Naiminath Ayurvedic Medical College we don’t expect intelligence
            to come in any particular shape or form. We’re looking for future
            students who are inquisitive, passionate, original and determined to
            grow.
          </p>
          <button className="btns hero-btn rest-btns">Apply Now</button>
        </div>
      </div>
      <div className="counter">
        <div className="counts">
          {counters.map((item, index) => (
            <div key={index} className="count">
              <div className="count-num">{item.num}</div>
              <div className="count-val">{item.val}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApplyHome;
