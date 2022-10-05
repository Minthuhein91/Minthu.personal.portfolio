import React from "react";
import "./Footer.css";
import Building from "../../img/FTB.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import WhatsApp from "@iconscout/react-unicons/icons/uil-whatsapp";


const Footer = () => {
  return (
    <div className="footer">
      <img src={Building} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span style={{ color:"Gray" }}>minthuhein91@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/min.thu.hein/">
          <Insta color="Gray" size={"3rem"} />
          </a>
          <a href="https://www.facebook.com/minnthu.hein.5">
          <Facebook color="Gray" size={"3rem"} />
          </a>
          <a href="https://www.linkedin.com/in/min-thu-hein-602867159/">
          <LinkedIn color="Gray" size={"3rem"} />
          </a>
          <a href="https://wa.me/+959421152736">
          <WhatsApp color="Gray" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
