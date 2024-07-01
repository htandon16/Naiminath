import React from "react";
import "./aboutHome.css";
const AboutHome = () => {
  return (
    <section>
      <div className="about-container">
        <div className="about-wrapper z-[999] ">
          <hr className="hr" />
          <div className="about-content z-[999]">
            <h3 className="about-heading roboto-serif-heading">
              Welcome to Naiminath
            </h3>
            <p className="about-p">
              Naiminath Ayurveda holds a commitment to providing quality
              education and top-notch facilities in the field of ayurveda
              medicine. We are a 100 bedded state of art Ayurvedic Hospital
              which is functional since 2016, where more than 200 patients visit
              the Outpatient Department every day and around 40 patients are
              present in the Inpatient Department. <br />
              <br />
              The college offers a comprehensive curriculum that not only covers
              traditional Ayurvedic practices but also integrates modern medical
              advancements with its emphasis on practical training and
              experiential learning. Students have access to well-equipped
              laboratories where they can develop their skills and gain hands-on
              experience under the guidance of experienced faculty members. This
              approach ensures that graduates are prepared to enter the
              professional world with confidence and expertise. The Hospital
              prides itself in providing a well-equipped, hygienically
              maintained panchkarma therapy rooms to suit the need and
              affordability of one and all.
            </p>
            <button className="btns rest-btns">Read More</button>
          </div>
          <div className="about-img">
            <img src="/images/clg1.jpg" alt="" className="img img1" />
            <img src="/adm/shirodhara.jpg" alt="" className="img img2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHome;
