import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import Glassesimoji from "../../img/glassesimoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import CV from './CV.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My journey of</span>
        <span>education</span>
        <spane>
          Other professional qualifications are certificate in
          <br />
          M&E services installation and estimation, BIM-Revit MEP modeling, etc.
        </spane>
        <a href={CV} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={Glassesimoji}
            heading={"Bachelor of Engineering: Mechanical Engineering"}
            detail={"Yangon Technological University(Thanlyin), Myanmar"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Bachelor of Technology: Mechanical Engineering"}
            detail={"Yangon Technological University(Thanlyin), Myanmar"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Diploma: Mechanical Power Engineering"}
            detail={
              "Associateship of Goverment Technical Institute(Thanlyin), Myanmar"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(#C1F5FF)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
