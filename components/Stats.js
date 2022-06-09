import React from "react";

const Stats = () => {
  return (
    <div className="stats-section">
      {/* <div className="overlay"></div> */}
      <div className="container mx-auto section py-8">
        <h2 className="main-title mb-0">Tied up with universities</h2>
        <p className="sub-title">around the UK</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="stats-wrapper">
            <h2>2500+</h2>
            <p>Students counselled</p>
          </div>
          <div className="stats-wrapper">
            <h2>500+</h2>
            <p>Students on our platform </p>
          </div>
          <div className="stats-wrapper">
            <h2>30+</h2>
            <p>Universities options</p>
          </div>
          <div className="stats-wrapper">
            <h2>100%</h2>
            <p>Visa success rate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
