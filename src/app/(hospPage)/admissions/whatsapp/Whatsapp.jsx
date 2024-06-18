import React, { useState } from "react";
import "./whatsapp.css";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";

const Whatsapp = () => {
  const [msg, setMsg] = useState("Hello!");
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(!open);
  };

  const handleWA = (e) => {
    setOpen(!open);
    location.href = `https://api.whatsapp.com/send?phone=919528024473&text=${msg}`;
  };

  const handleChange = (e) => {
    setMsg(e.target.value);
    console.log(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleWA();
    }
  };

  return (
    <div>
      <div className="wa-container">
        <div className="wa-wrapper">
          <div
            className={`wa-icon ${open ? "hide" : "show"}`}
            onClick={() => setOpen(!open)}
          >
            <IoLogoWhatsapp size={50} />
          </div>

          {/* </form> */}
          <div className={`wa-dialog ${open ? "show" : "hide"}`}>
            <div className="msg-container">Hey! How can I help you?</div>
            <div className="close" onClick={handleClose}>
              <IoMdCloseCircle size={25} color="#fff" />
            </div>
            <div className="msg-box">
              {/* <form className="msg-form" onSubmit={handleWA}> */}
              <div className="inputdiv">
                <input
                  type="text"
                  value={msg}
                  onChange={handleChange}
                  onKeyDown={handleKeyPress}
                />
              </div>
              <button onClick={handleWA} className="send">
                <IoSend size={30} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whatsapp;
