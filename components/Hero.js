import React from "react";
import {
  FaArrowRight,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="container mx-auto section">
      <div className="hero-section">
        <div className="hero-content">
          <h1>
            Start your Journey to study <span>in the UK</span>
          </h1>

          <p>
            Get real time help through video chat from the{" "}
            <span>British Council Certified Counsellor.</span>
          </p>
          <Link href="/appointment">
            <div className="btn btn-primary inline-flex items-center text-white py-5">
              Book Appointment Now <FaArrowRight className="ml-2" />
            </div>
          </Link>
          <h5 className="py-5">
            <span>2500+</span> students counselled
          </h5>
          <h5 className="pb-5">
            <span>100% visa success rate</span> for the last academic year
          </h5>
          <ul className="social-icons">
            <li>
              <a
                href="https://www.facebook.com/uniladder.consultancy.1"
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
        <img
          src="/assets/images/hero-new.svg"
          alt="hero-bg"
          className="hero-img"
        />
      </div>
    </div>
  );
};

export default Hero;
