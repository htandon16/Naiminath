import React, { useState } from "react";
import ShowModal from "./modal/ShowModal";
const Brochure = () => {
  const [showModal, setshowModal] = useState(false);
  const closeModal = () => setshowModal(false);

  // if (showModal) {
  //     document.body.style.overflow = "hidden";
  // } else {
  //     document.body.style.overflow = "auto";
  // }
  return (
    <div className="">
      <button
        className="fixed bottom-[55vh] z-[999] right-2 bg-black text-white px-4 py-2 rounded origin-bottom-right -rotate-90"
        onClick={() => setshowModal(!showModal)}
      >
        Download Brochure
      </button>
      {showModal && <ShowModal closeModal={closeModal} />}
    </div>
  );
};

export default Brochure;
