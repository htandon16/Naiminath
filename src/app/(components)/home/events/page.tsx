'use client'
import React from "react";
import "./eventsHome.css";
import events from "@/app/(data)/events";
import Image from "next/image";

const EventsHome = () => {
  // const sortedData = events.sort((a, b) => new Date(b.date) - new Date(a.date));
  const sortedData = events.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  // console.log(sortedData);
  const latestThree = sortedData.slice(0, 3);
  // console.log(latestThree);

  return (
    <div className="events-home">
      <div className="why-wrapper">
        <h3 className="why-heading">Upcoming Events</h3>
        <hr className="hr" />
        <div className="eventTiles">
          {latestThree.map((event, index) => (
            <div key={index}>
              {event.latest && (
                <div 
                  className="latest-tile"
                  style={{
                    backgroundImage: `url(${event.img.src})`,
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
                  <Image src={event.img} alt="" />
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
        <button className="btns">
          More Naiminath Events
        </button>
      </div>
    </div>
  );
};

export default EventsHome;
