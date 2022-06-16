import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineUser, AiOutlineCalendar } from "react-icons/ai";
import { BiPaperPlane } from "react-icons/bi";

const Process = () => {
  const processes = [
    {
      id: 1,
      icon: <AiOutlineUser size={48} color="#fff" />,
      title: "Create your profile",
      subTitle: "First create your profile and let us know your interests.",
    },
    {
      id: 2,
      icon: <AiOutlineCalendar size={48} color="#fff" />,
      title: "Book an appointment",
      subTitle: "Book a 1:1 video chat appointment with our counseller.",
    },
    {
      id: 1,
      icon: <BiPaperPlane size={48} color="#fff" />,
      title: "Start your journey",
      subTitle:
        "Choose an university and course best suited for your career and start your journey to study in the UK.",
    },
  ];
  return (
    <div className="process-section">
      <div className="container mx-auto section">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4">
          {processes.map((process) => (
            <div className="process-wrapper">
              <div className="process-circle">{process.icon}</div>
              <h3>{process.title}</h3>
              <p>{process.subTitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
