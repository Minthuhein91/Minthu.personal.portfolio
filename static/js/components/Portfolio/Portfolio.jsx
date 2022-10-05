import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import AWC from "../../img/YGNA.png";
import Novotel from "../../img/NYH.png";
import DLE from "../../img/CIL.png";
import Central from "../../img/Central.png";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Welcome To My</span>
      <span>Portfolio!</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <h1>@Excel Power Engineering Co. ltd</h1>
          <img src={Novotel} alt="" />
          <a href="https://drive.google.com/file/d/1s1JEanl89xi-OF9tcndt7wlZVZbRMOOr/view?usp=sharing">
      <button className="button p-button">View Project</button>
       </a>
        </SwiperSlide>
        <SwiperSlide>
          <h1>@Asia World Co. Ltd</h1>
          <img src={AWC} alt="" />
          <a href="https://drive.google.com/file/d/1TJqPiLzxiS4HVffO3FTEfHqXGR8YOfke/view?usp=sharing">
      <button className="button p-button">View Project</button>
      </a>

        </SwiperSlide>
        <SwiperSlide>
        <h1>@Delight Engineering Co. Ltd</h1>
          <img src={Central} alt="" />
          <a href="https://drive.google.com/file/d/1yn8gnWSb-M3FdU3Pd_usCZwqbviFevu3/view?usp=sharing">
      <button className="button p-button">View Project</button>
       </a>
        </SwiperSlide>
        <SwiperSlide>
        <h1>@Delight Engineering Co. Ltd</h1>
          <img src={DLE} alt="" />
          <a href="https://drive.google.com/file/d/1K-AD5ZRJrTXjf-9ejgLFcd81ZAdRn-Mi/view?usp=sharing">
      <button className="button p-button">View Project</button>
      </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
