// import React from "react";
// import "./eventsHome.css";
// import events from "./events";

// const EventsHome = () => {
//   const sortedData = events.sort((a, b) => new Date(b.date) - new Date(a.date));

//   const latestThree = sortedData.slice(0, 3);

//   return (
//     <div className="events-home">
//       <div className="why-wrapper">
//         <h3 className="why-heading  roboto-serif-heading lined-heading">
//           Upcoming Events
//         </h3>
//         {/* <hr className="hr" /> */}
//         <div className="eventTiles">
//           {latestThree.map((event, index) => (
//             <div key={index}>
//               {event.latest && (
//                 <div
//                   className="latest-tile"
//                   style={{
//                     backgroundImage: `url(${event.img})`,
//                     backgroundColor: "#3f3f3f8f",
//                   }}
//                 >
//                   <div className="ledate">{event.date}</div>
//                   <div className="ldesc">
//                     <div className="letitle">{event.title}</div>
//                     <div className="letime">{event.time}</div>
//                   </div>
//                 </div>
//               )}
//               {!event.latest && (
//                 <div className="rest-tiles">
//                   <img src={event.img} alt="" className="tile-image" />
//                   <div className="redate">{event.date}</div>
//                   <div className="redesc">
//                     <div className="retitle">{event.title}</div>
//                     <div className="retime">{event.time}</div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//         <button className="btns hero-btn more-btns rest-btns">
//           More Naiminath Events
//         </button>
//       </div>
//     </div>
//   );
// };

// export default EventsHome;

import React from "react";
import events from "./events";
import "./eventsHome.css"; // Make sure to adjust this path based on your project structure

const EventsHome = () => {
  const sortedData = events.sort((a, b) => new Date(b.date) - new Date(a.date));
  const latestThree = sortedData.slice(0, 3);

  return (
    <div className="events-home">
      <div className="why-wrapper">
        <h3 className="why-heading roboto-serif-heading lined-heading">
          Upcoming Events
        </h3>
        <div className="eventTiles">
          {latestThree.map((event, index) => (
            <div key={index}>
              {event.latest && (
                <div
                  className="latest-tile"
                  style={{
                    backgroundImage: `url(${event.img.src})`, // Use event.img.src to access the src of the imported image
                    backgroundColor: "#3f3f3f8f",
                  }}
                >
                  <div className="ledate">{event.date}</div>
                  <div className="ldesc">
                    <div className="letitle">{event.title}</div>
                    <div className="letime">{event.time}</div>
                  </div>
                </div>
              )}
              {!event.latest && (
                <div className="rest-tiles">
                  <img src={event.img.src} alt="" className="tile-image" />{" "}
                  {/* Render using img tag */}
                  <div className="redate">{event.date}</div>
                  <div className="redesc">
                    <div className="retitle">{event.title}</div>
                    <div className="retime">{event.time}</div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <button className="btns hero-btn more-btns rest-btns">
          More Naiminath Events
        </button>
      </div>
    </div>
  );
};

export default EventsHome;
