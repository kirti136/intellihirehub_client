import { useState, useEffect } from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import video from "../../assets/video.mp4";
import { FiSend } from "react-icons/fi";
import { GiDodge } from "react-icons/gi";
import {
  FaTwitter,
  FaYoutube,
  FaInstagramSquare,
  FaTripadvisor,
} from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!isMounted) {
      AOS.init({ duration: 2000 });
      setIsMounted(true);
    }
  }, [isMounted]);

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Fly with us</h2>
          </div>

          <div className="inputDiv flex">
            <input

              type="text"
              placeholder="Enter Email Address"
            />
            <button className="btn flex" type="submit">
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          {/* Footer Intro,Logo,Para,Social */}
          <div className="footerIntro flex">
            {/* Logo */}
            <div className="logoDiv">
              <Link to={"/"} className="a logo flex">
                <GiDodge className="icon" />ntelliHireHub.
              </Link>
            </div>
            {/* Paragraph */}
            <div className="footerParagraph">
              <p>Our job portal streamlines recruitment, connecting job seekers and employers for efficient hiring. We aim to redefine job search experiences by fostering meaningful connections and facilitating seamless talent acquisition.</p>
            </div>
            {/* Socials */}
            <div className="footerSocials flex">
              <FaTwitter className="icon" />
              <FaYoutube className="icon" />
              <FaInstagramSquare className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>

          {/* Links */}
          <div className="footerLinks grid">
            {/* Group 01 */}
            <div
              // data-aos-duration="2000"

              className="linkGroup"
            >
              <span className="groupTitle">OUR AGENCY</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Insurance
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Tourism
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Payment
              </li>
            </div>

            {/* Group 02 */}
            <div
              // data-aos-duration="2000"

              className="linkGroup"
            >
              <span className="groupTitle">PARTNERS</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Zomato
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Amazon
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Netflix
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Tata
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                TripAdvisor
              </li>
            </div>

            {/* Group 03 */}
            <div
              // data-aos-duration="2000"

              className="linkGroup"
            >
              <span className="groupTitle">LAST MINUTE</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                London
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Canada
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                California
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Bharat
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Indonesia
              </li>
            </div>
          </div>

          {/* Footer Div */}
          <div className="footerDiv flex">
            <small>BEST JOBPORTAL WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED - IntelliHireHub 2023</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
