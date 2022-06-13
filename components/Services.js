import React from "react";
import Tilt from "react-parallax-tilt";
import servicesList from "./services-list";

const Services = () => {
  return (
    <div className="services-section">
      <div className="container mx-auto section">
        <h2 className="main-title">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {servicesList.map((service, index) => (
            <Tilt className="parallax-effect" perspective={500} key={index}>
              <div className="services-wrapper">
                <div className="services-img-wrapper">
                  <img
                    className="services-img"
                    src={service.img}
                    alt="Career Counselling"
                  />
                </div>
                <h2 className="services-title">{service.title}</h2>
                <p className="services-description">{service.description}</p>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
