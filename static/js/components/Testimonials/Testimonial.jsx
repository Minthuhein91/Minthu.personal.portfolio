import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Skilled In AutoCAD, BIM-Revit(MEP), Adobe Photoshop, Illustrator, Microsoft Project, Word, Excel and Powerpoint.",
    },
    {
      img: profilePic2,
      review:
        "I have CREATIVE SPRIT, FAST LEARNING, ABILITY TO WORK UNDER PRESSURE, MOTIVATED and TIME MANAGEMENT.",
    },
    {
      img: profilePic3,
      review:
        "I always willing to learn new technologies or new experiences for my career development.",
    },
    {
      img: profilePic4,
      review:
        "When I have free times, I study myself and practice.",
    },
  ];
 
  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Employers always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
       
      <div className="blur t-blur1" style={{ background: "var(#C1F5FF)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <a href="https://drive.google.com/file/d/1D7Qjo94Jr5vP-btImpShQY6KiIF_WBws/view?usp=sharing">
      <button className="button">Learn More</button>
      </a>
    </div>
  );
};

export default Testimonial;
