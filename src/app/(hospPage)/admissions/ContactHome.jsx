import React, { useEffect } from "react";

function ContactHome() {
  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Get all sections
      const sections = document.querySelectorAll(".section");

      // Iterate through each section
      sections.forEach((section, index) => {
        // Calculate the distance between the top of the section and the top of the viewport
        const distanceToTop = section.getBoundingClientRect().top;

        // If the distance to the top of the section is less than or equal to 0 (i.e., it's in view or above the viewport)
        if (distanceToTop <= 0) {
          // If the next section exists
          if (sections[index + 1]) {
            // Scroll to the next section
            sections[index + 1].scrollIntoView({ behavior: "smooth" });
          }
        }
      });
    };

    // Add scroll event listener to the window
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div>
      <div className="section" id="section1">
        Content of section 1
      </div>
      <div className="section" id="section2">
        Content of section 2
      </div>
      <div className="section" id="section3">
        Content of section 3
      </div>
    </div>
  );
}

export default ContactHome;
