import React, { useContext } from "react";
import "./Works.css";
import DLE from "../../img/DLE.png";
import YACL from "../../img/YACL.png";
import JICA from "../../img/JICA.png";
import CT from "../../img/CT.png";
import AWC from "../../img/AWC.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Worked for All These
          </span>
          <span>Companies & Clients</span>
          <spane>
            During this over 6 years' of journey,
            <br />
           I successfully completed all the assignments
            <br />
            to the satisfaction of the organization.
            <br />
            
          </spane>
          <Link to="Contact" smooth={true} spy={true}>
            <button className="button w-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={YACL} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={AWC} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={JICA} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={DLE} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={CT} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
