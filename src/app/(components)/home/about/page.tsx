import React from "react";
import "./aboutHome.css";

const AboutHome = () => {
    return (
        <section>
            <div className="about-container">
                <div className="about-wrapper">
                    <hr className="hr" />
                    <div className="about-content">
                        <h3 className="about-heading">Welcome to Naiminath</h3>
                        <p className="about-p">
                            Naiminath Ayurvedic College, Hospital and Research Centre is a
                            pioneer in the field of Ayurvedic treatment in the world. The
                            Hospital offers treatment for every ailment and is extremely
                            affordable. The Hospital is successfully running Out patient
                            departments in Kayachikitsa, Kaumarbhritya, Panchkarma, Prasuti &
                            Stri Roga, Shalakya tantra, Shalya tantra, Swasthavritta, Dental
                            and Physiotherapy. The Hospital prides itself in providing a
                            well-equipped, hygienically maintained panchkarma therapy rooms to
                            suit the need and affordability of one and all. <br />
                            <br />
                            {/* To provide world class education and treatment, this 100 bedded
                            state of art Ayurvedic Hospital is functional since 2016 where
                            more than 200 patients visit the Outdoor Department every day and
                            around 40 patients are present in the Indoor Department. */}
                        </p>
                        <button className="btns rest-btns">Read More</button>
                    </div>
                    <div className="about-img">
                        <img src="/new_home/clg1.jpg" alt="" className="img img1" />
                        <img src="/new_home/shirodhara.jpg/" alt="" className="img img2" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHome;
