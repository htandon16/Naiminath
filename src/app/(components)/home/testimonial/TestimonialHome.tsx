import React from "react";
import "./testimonialHome.css";

interface Review {
  name: string;
  review: string;
  img: string;
  time: string;
}

const reviews: Review[] = [
  {
    name: "Rohini Rajpoot",
    review:
      "The faculty at NAMC are not only experts in Ayurveda but also dedicated mentors who guide students with personalised attention, nurturing their growth and development.",
    img: "",
    time: "2 months ago",
  },
  {
    name: "Mamta Gupta",
    review:
      "Students at NAMC benefit from a rich learning environment that combines ancient wisdom with modern scientific research, preparing them to become compassionate and knowledgeable healers.",
    img: "",
    time: "2 months ago",
  },
  {
    name: "Mukesh Sharma",
    review:
      "Beautiful place, very good faculty and administration, they need to upgrade hospital facilities",
    img: "",
    time: "a month ago",
  },
  {
    name: "Seema Jain",
    review:
      "Great medical college infrastructure with all modern amenities. Hospitals is too good and panchkarma is best. Doctors are good and helpful. Ambience is peaceful. Good faculty for teaching students.",
    img: "",
    time: "2 years ago",
  },
];

interface ReviewsProps {
  name: string;
  time: string;
  review: string;
}

const Reviews: React.FC<ReviewsProps> = ({ name, time, review }) => {
  return (
    <div>
      <div className="written-wrapper">
        <div className="written">
          <div className="rname">{name}</div>
          <div className="rtime">{time}</div>
          <div className="rreview">{review}</div>
        </div>
      </div>
    </div>
  );
};

interface Testimonial {
  divtoshow: JSX.Element;
}

const testimonials: Testimonial[] = [
  {
    divtoshow: (
      <iframe
        width="400"
        height="220"
        src="https://www.youtube.com/embed/1KE89Nvwfko?si=kiXmA0ApQWxoAtUr"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    ),
  },
  {
    divtoshow: (
      <Reviews
        name={reviews[0].name}
        review={reviews[0].review}
        time={reviews[0].time}
      />
    ),
  },
  {
    divtoshow: (
      <iframe
        width="400"
        height="220"
        src="https://www.youtube.com/embed/XfmEuD-vd14?si=-PYo0TNqcWF6AdVb"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    ),
  },
  {
    divtoshow: (
      <Reviews
        name={reviews[2].name}
        review={reviews[2].review}
        time={reviews[2].time}
      />
    ),
  },
  {
    divtoshow: (
      <iframe
        width="400"
        height="220"
        src="https://www.youtube.com/embed/VzHCtwGn6-0?si=C7PCSf8cj_5LkSgU"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    ),
  },
  {
    divtoshow: (
      <Reviews
        name={reviews[3].name}
        review={reviews[3].review}
        time={reviews[3].time}
      />
    ),
  },
];

const TestimonialHome: React.FC = () => {
  return (
    <div className="testimonial-container">
      <div className="why-wrapper">
        <h3 className="why-heading text-white roboto-serif-heading lined-heading">
          What our students say about us
        </h3>
        <div className="testimonials">
          {testimonials.map((test, index) => (
            <div key={index} className="testimonial">
              {test.divtoshow}
            </div>
          ))}
        </div>
        <button className="btns hero-btn rest-btns">
          More Naiminath Reviews
        </button>
      </div>
    </div>
  );
};

export default TestimonialHome;
