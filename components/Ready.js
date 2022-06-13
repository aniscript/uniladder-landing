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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim
              quisque at massa vel quis turpis eu. Nam cursus aliquet ultricies
              semper neque, pellentesque aliquam, et consequat. Faucibus nulla
              venenatis, amet vitae orci viverra nisl sollicitudin malesuada.
              Ultricies non ac tempor arcu turpis hendrerit laoreet elementum.
            </p>
            {/* <Link href="/appointment">
              <div className="btn btn-secondary inline-flex items-centerpy-5">
                Book Appointment Now <FaArrowRight className="ml-2" />
              </div>
            </Link> */}
            <Link href="/appointment">
              <button class="blob-btn">
                Book an appointment
                <span class="blob-btn__inner">
                  <span class="blob-btn__blobs">
                    <span class="blob-btn__blob"></span>
                    <span class="blob-btn__blob"></span>
                    <span class="blob-btn__blob"></span>
                    <span class="blob-btn__blob"></span>
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
