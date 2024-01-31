import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-section">
        <div className="container mx-auto section">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="footer-columns">
              <img
                src="/assets/images/logo.png"
                alt="Logo"
                className="footer-logo"
              />
              <p className="footer-text">
                Start your journey to study in the UK{" "}
              </p>
              <ul className="social-icons">
                <li>
                  <a
                    href="https://www.facebook.com/studyintheuk111"
                    target="_blank"
                  >
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/c/GaneshKhadkalive"
                    target="_blank"
                  >
                    <FaYoutube />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/uni-ladder-consultancy-89a7211ab/"
                    target="_blank"
                  >
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-columns">
              <h5>Head Office</h5>
              <p>
                18-36 Island Business Center, <br />
                Room 225B Second Floor, <br />
                Block P Wellington Street, <br />
                London, SE18 6PF
              </p>
              <p>+442080042071</p>
              <p>+447949228752(whatsApp only)</p>
            </div>
            <div className="footer-columns">
              <h5>Kathmandu Office</h5>
              <p>
                Hattisar Chowk, 4th Floor <br />
                Himalayan Pinewood Pvt Ltd Building <br />
                (Near Krishna pauroti)
              </p>
              <p>9818704046/015318783</p>
              <p>receptionuniladder@gmail.com</p>
            </div>
            <div className="footer-columns">
              <h5>Butwal Office</h5>
              <p>
                Devinagar, Siddhapath <br />
                Adjacent to New Horizon English Secondary School (+2 Block)
                <br /> Butwal-11
              </p>
              <p>+071-420149</p>
              <p>butwaluniladder@gmail.com</p>
            </div>
            <div className="footer-columns">
              <h5>Bangladesh Office</h5>
              <p>Dhaka, Bangladesh</p>
              <p> +447949228752( whats App only)</p>
              <p>bangladesh@ukuniladder.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright 2024. Uniladder Consultancy Pvt. Ltd.</p>
      </div>
    </div>
  );
};

export default Footer;
