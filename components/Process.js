import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineUser, AiOutlineCalendar } from "react-icons/ai";
import { BiPaperPlane } from "react-icons/bi";

const Process = () => {
  return (
    <div className="process-section">
      <div className="container mx-auto section">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4">
          <div className="process-wrapper">
            <div className="process-circle">
              <AiOutlineUser size={48} color="#fff" />
            </div>
            <h3>Create your profile</h3>
            <p>First create your profile and let us know your interests.</p>
          </div>
          <div className="process-wrapper">
            <div className="process-circle">
              <AiOutlineCalendar size={48} color="#fff" />
            </div>
            <h3>Book an appointment</h3>
            {/* <p>Book a 1:1 video chat appointment paying a small fee.</p> */}
            <p>Book a 1:1 video chat appointment with our counseller.</p>
          </div>
          <div className="process-wrapper">
            <div className="process-circle">
              <BiPaperPlane size={48} color="#fff" />
            </div>
            <h3>Start your journey</h3>
            <p>
              Choose an university and course best suited for your career and
              start your journey to study abroad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
