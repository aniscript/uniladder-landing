import React from "react";

const Flow = () => {
  const flows = [
    {
      id: 1,
      step: "01",
      imgUrl: "/assets/images/steps/step1.svg",
      title: "Assessment of Application",
      details: [
        {
          id: 1,
          text: "University and course selection",
        },
        {
          id: 2,
          text: "Deposit payment for processing",
        },
        {
          id: 3,
          text: "All required documents submission",
        },
      ],
    },
    {
      id: 2,
      step: "02",
      imgUrl: "/assets/images/steps/step2.svg",
      title: "Application Submission",
      details: [
        {
          id: 1,
          text: "Apply to multiple universities",
        },
        {
          id: 2,
          text: "Fulfill any conditions if required",
        },
      ],
    },
    {
      id: 3,
      step: "03",
      imgUrl: "/assets/images/steps/step3.svg",
      title: "Enrollment Application",
      details: [
        {
          id: 1,
          text: "Unconditional offer",
        },
        {
          id: 2,
          text: "University deposit payment",
        },
        {
          id: 3,
          text: "Interview",
        },
      ],
    },
    {
      id: 4,
      step: "04",
      imgUrl: "/assets/images/steps/step4.svg",
      title: "Pre-CAS Application",
      details: [
        {
          id: 1,
          text: "Prepare Bank statement / Education loan",
        },
        {
          id: 2,
          text: "Get Tuberculosis report",
        },
      ],
    },
    {
      id: 5,
      step: "05",
      imgUrl: "/assets/images/steps/step5.svg",
      title: "CAS Issued",
      details: [
        {
          id: 1,
          text: "Confirmation of Acceptance for Studies (CAS) gets issued",
        },
      ],
    },
    {
      id: 6,
      step: "06",
      imgUrl: "/assets/images/steps/step6.svg",
      title: "Visa Application",
      details: [
        {
          id: 1,
          text: "IHS Payment",
        },
        {
          id: 2,
          text: "UKVI Payment",
        },
        {
          id: 3,
          text: "VFS Booking",
        },
        {
          id: 4,
          text: "Visa Status",
        },
      ],
    },
    {
      id: 7,
      step: "07",
      imgUrl: "/assets/images/steps/step7.svg",
      title: "Post Visa",
      details: [
        {
          id: 1,
          text: "University enrollment",
        },
        {
          id: 2,
          text: "Flight tickets",
        },
        {
          id: 3,
          text: "Room arrangements",
        },
        {
          id: 4,
          text: "Airport pick-up",
        },
      ],
    },
  ];
  return (
    <div className="flow-section">
      <div className="container mx-auto section">
        <h2 className="main-title">Steps of application</h2>
        <div className="flow-wrapper">
          {flows.map((flow) => (
            <div className="flow-card">
              <h1>{flow.step}</h1>
              <div className="flow-content">
                <div className="flow-content-head">
                  <img src={flow.imgUrl} alt="" />
                  <h2>{flow.title}</h2>
                </div>
                <div className="horizontal-line"></div>
                {flow.details.map((detail) => (
                  <p>{detail.text}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Flow;
