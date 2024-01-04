"use client";
import React, { useState } from "react";

export const ImportantLink = () => {
  const [isPopupVisible, setPopupVisibility] = useState(false);

  const showPopup = () => {
    setPopupVisibility(true);
  };

  const hidePopup = () => {
    setPopupVisibility(false);
  };

  return (
    <div className="relative">
      <button
        className="fixed bottom-[55vh] right-2 bg-black text-white px-4 py-2 rounded transform origin-bottom-right -rotate-90"
        onMouseEnter={showPopup}
        onMouseLeave={hidePopup}
      >
        Show Text
      </button>

      {isPopupVisible && (
        <div
          className="fixed bottom-[25vh] right-12 bg-[#ded636] text-black px-4 py-2 rounded shadow"
          onMouseEnter={showPopup}
          onMouseLeave={hidePopup}
        >
          <div className="modal-window-content flex flex-col gap-1 font-sans">
            <p>
              {" "}
              <span style={{ fontSize: "24px" }}>Important Links</span>
            </p>
            <p>
              1. Ministry of AYUSH (
              <a href="https://main.ayush.gov.in/">
                https://main.ayush.gov.in/
              </a>
              )
            </p>
            <p>
              2. National Commission for Indian System of Medicine (
              <a href="https://ncismindia.org/">https://ncismindia.org/</a>)
            </p>
            <p>
              3. Dr. Bhimrao Ambedkar University, Agra (
              <a href="http://www.dbrau.org.in/">http://www.dbrau.org.in/</a>)
            </p>
            <p>
              4. Mahayogi Guru Gorakhnath AYUSH University, Uttar Pradesh (
              <a href="https://www.mggaugkp.ac.in/">www.mggaugkp.ac.in</a>
              )&nbsp;
            </p>
            <p>
              5. Uttar Pradesh PG AYUSH Counselling (
              <a href="https://pgcounselling.ayushup.in/)">
                http://pgcounselling.ayushup.in/)
              </a>
            </p>
            <p>
              6. Uttar Pradesh State AYUSH Society (
              <a href="https://web.archive.org/web/20230922012956/https://ayushup.in/">
                https://ayushup.in/
              </a>
              )
            </p>
            <p>
              7. Vidya Lakshmi Education Loan Portal (
              <a href="https://web.archive.org/web/20230922012956/https://www.vidyalakshmi.co.in/Students/">
                https://www.vidyalakshmi.co.in/Students/
              </a>
              )
            </p>
            <p>
              <a href="https://forms.eduqfix.com/nhmcharcof/add">
                FEES PAYMENT: CLICK HERE TO PAY FEES
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
