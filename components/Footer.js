import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-section">
        <div className="container mx-auto section">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
            <div className="footer-columns flex justify-start md:justify-center ">
              <ul className="footer-list">
                <li>
                  <Link href="/about">
                    <a>About Us </a>
                  </Link>
                </li>
                <li>
                  <Link href="/services">
                    <a>Our Services</a>
                  </Link>
                </li>
                <li>
                  <Link href="/construction">
                    <a>Universities</a>
                  </Link>
                </li>
                <li>
                  <Link href="/sample">
                    <a>Sample Documents</a>
                  </Link>
                </li>
                <li>
                  <Link href="/appointment">
                    <a>Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-columns">
              <h5>Head Office</h5>
              <div className="flex">
                <FaMapMarkerAlt className="mr-3" size={24} color="#f96301" />
                <p>Island Business Centre, Wellington Street, London</p>
              </div>
              <div className="flex">
                <FaPhoneAlt className="mr-3" size={24} color="#f96301" />
                <p>+442080042071</p>
              </div>
            </div>
            <div className="footer-columns">
              <h5>Nepal Office</h5>
              <div className="flex">
                <FaMapMarkerAlt className="mr-3" size={24} color="#f96301" />
                <p>Bagbazar, Kathmandu, Nepal</p>
              </div>
              <div className="flex">
                <FaPhoneAlt className="mr-3" size={24} color="#f96301" />
                <p>+977015318783</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright 2022. Uniladder Consultancy Pvt. Ltd.</p>
      </div>
    </div>
  );
};

export default Footer;
