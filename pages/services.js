import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import servicesList from "../components/services-list";
import Tilt from "react-parallax-tilt";

const services = () => {
  return (
    <>
      <Head>
        <title>Our Services - Uniladder Consultancy</title>
        <meta name="description" content="Meta description for the Home page" />
      </Head>
      <Header />
      <div className="section container mx-auto">
        <div className="inner">
          <h1>Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {servicesList.map((service, index) => (
              <Tilt className="parallax-effect" perspective={500}>
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
      <Footer />
    </>
  );
};

export default services;
