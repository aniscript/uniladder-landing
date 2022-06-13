import React from "react";
import CountUp from "react-countup";

const Stats = () => {
  return (
    <div className="stats-section">
      {/* <div className="overlay"></div> */}
      <div className="container mx-auto section py-8">
        <h2 className="main-title mb-0">Tied up with universities</h2>
        <p className="sub-title">around the UK</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="stats-wrapper">
            <img src="/assets/images/visa.svg" className="stats-img" alt="" />

            <h2>
              <CountUp
                className="account-balance"
                start={0}
                end={2500}
                duration={2.75}
                useEasing={true}
                useGrouping={true}
                suffix="+"
              />
            </h2>
            <p>Students counselled</p>
          </div>
          <div className="stats-wrapper">
            <img
              src="/assets/images/counselling.svg"
              className="stats-img"
              alt=""
            />
            <h2>
              <CountUp
                className="account-balance"
                start={0}
                end={500}
                duration={2.75}
                useEasing={true}
                useGrouping={true}
                suffix="+"
              />
            </h2>
            <p>Students on our platform </p>
          </div>
          <div className="stats-wrapper">
            <img
              src="/assets/images/university.svg"
              className="stats-img"
              alt=""
            />
            <h2>
              <CountUp
                className="account-balance"
                start={0}
                end={100}
                duration={2.75}
                useEasing={true}
                useGrouping={true}
                suffix="+"
              />
            </h2>
            <p>Universities options</p>
          </div>
          <div className="stats-wrapper">
            <img
              src="/assets/images/departure.svg"
              className="stats-img"
              alt=""
            />
            <h2>
              <CountUp
                className="account-balance"
                start={0}
                end={100}
                duration={2.75}
                useEasing={true}
                useGrouping={true}
                suffix="%"
              />
            </h2>
            <p>Visa success rate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
