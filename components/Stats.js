import React from "react";
import CountUp from "react-countup";

const Stats = () => {
  const stats = [
    {
      id: 1,
      title: "Students counselled",
      imgUrl: "/assets/images/visa.svg",
      count: 2500,
      suffix: "+",
    },
    {
      id: 2,
      title: "Students on our platform",
      imgUrl: "/assets/images/counselling.svg",
      count: 500,
      suffix: "+",
    },
    {
      id: 3,
      title: "Universities options",
      imgUrl: "/assets/images/university.svg",
      count: 100,
      suffix: "+",
    },
    {
      id: 4,
      title: "Visa success rate",
      imgUrl: "/assets/images/departure.svg",
      count: 100,
      suffix: "%",
    },
  ];
  return (
    <div className="stats-section">
      <div className="container mx-auto section py-8">
        <h2 className="main-title mb-0">Tied up with universities</h2>
        <p className="sub-title">around the UK</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div className="stats-wrapper">
              <img src={stat.imgUrl} className="stats-img" alt="" />
              <h2>
                <CountUp
                  className="account-balance"
                  start={0}
                  end={stat.count}
                  duration={2.75}
                  useEasing={true}
                  useGrouping={true}
                  suffix={stat.suffix}
                />
              </h2>
              <p>{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
