'use client'
import React, { useState } from "react";
import ShowModal from "./ShowModal";

const Brochure: React.FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false);

    const closeModal = () => setShowModal(false);

    // if (showModal) {
    //     document.body.style.overflow = "hidden";
    // } else {
    //     document.body.style.overflow = "auto";
    // }

    return (
        <div className="">
            <button
                className="fixed bottom-[42vh] z-[999] right-2 bg-black text-white px-4 py-2 rounded origin-bottom-right -rotate-90"
                onClick={() => setShowModal(!showModal)}
            >
                Download Brochure
            </button>
            {showModal && <ShowModal closeModal={closeModal} />}
        </div>
    );
};

export default Brochure;
