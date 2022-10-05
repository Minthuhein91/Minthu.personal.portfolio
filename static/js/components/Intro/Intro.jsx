import React, { useContext } from "react";
import "./Intro.css";
import Profile from "../../img/MainPP.png";
import TB from "../../img/TB.png";
import thumbup from "../../img/thumbup.png";
import Engineer from "../../img/ENGR.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Facebook from "../../img/FB.png";
import LinkedIn from "../../img/LI.png";
import Instagram from "../../img/IG.png";
import Whatsapp from "../../img/WA.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hello! I Am</span>
          <span>Min Thu Hein</span>
          <span>
            Mechanical Engineer with more than 6 years' of hands-on experience in construction industry,
            ACMV, P&S and Firefighting services.
          </span>
        </div>
        <Link activeClass="Contact" to="Contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
        <a href="https://www.facebook.com/minnthu.hein.5">
          <img src={Facebook} alt="" /></a>
        <a href="https://www.linkedin.com/in/min-thu-hein-602867159/">
          <img src={LinkedIn} alt="" /></a>
        <a href="https://www.instagram.com/min.thu.hein/">
          <img src={Instagram} alt="" /></a>
        <a href="https://wa.me/+959421152736">
          <img src={Whatsapp} alt="" /></a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Profile} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-20%" }}
          transition={transition}
          src={TB}
          alt=""
        />

        <motion.div
          initial={{ top: "30%", left: "50%" }}
          whileInView={{ left: "78%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={Engineer} text1="MEP" text2="Engineer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "15rem", top: "19rem" }}
          whileInView={{ left: "3rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Reliable and " text2="Professional" />
        </motion.div>

        <div className="blur" style={{ background: "#C1F5FF" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
