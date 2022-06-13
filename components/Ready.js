import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Ready = () => {
  return (
    <div className="ready-section">
      <div className="container mx-auto section">
        <div className="ready-wrapper">
          <div className="ready-content">
            <h2>Are you ready to fly and</h2>
            <h5>pursue your dreams?</h5>
            <p>
              If you want to study in the UK and make the best for your career,
              Uni ladder is happy to help you achieve your dream. We will
              provide the best guidance for you from the start and even after
              you have reached the UK. Our counsellers are always available to
              help you. Feel free to book an appointment with us and we will
              contact you soon.
            </p>
            <Link href="/appointment">
              <button className="blob-btn">
                Book an appointment
                <span className="blob-btn__inner">
                  <span className="blob-btn__blobs">
                    <span className="blob-btn__blob"></span>
                    <span className="blob-btn__blob"></span>
                    <span className="blob-btn__blob"></span>
                    <span className="blob-btn__blob"></span>
                  </span>
                </span>
              </button>
            </Link>
          </div>
          <img src="/assets/images/ready.png" alt="" className="ready-img" />
        </div>
      </div>
    </div>
  );
};

export default Ready;
