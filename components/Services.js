import React from "react";

const Services = () => {
  return (
    <div className="services-section">
      <div className="container mx-auto section">
        <h2 className="main-title">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="services-wrapper">
            <div class="services-img-wrapper">
              <img
                class="services-img"
                src="/assets/images/counselling.svg"
                alt="Career Counselling"
              />
            </div>
            <h2 class="services-title">Career Counselling</h2>
            <p class="services-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum
              cras vitae eget enim tellus augue a dui viverra.
            </p>
          </div>
          <div class="services-wrapper">
            <div class="services-img-wrapper">
              <img
                class="services-img"
                src="/assets/images/university.svg"
                alt="University Admissions"
              />
            </div>
            <h2 class="services-title">University Admissions</h2>
            <p class="services-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum
              cras vitae eget enim tellus augue a dui viverra.
            </p>
          </div>
          <div class="services-wrapper">
            <div class="services-img-wrapper">
              <img
                class="services-img"
                src="/assets/images/visa.svg"
                alt="Visa Consultancy"
              />
            </div>
            <h2 class="services-title">Visa Consultancy</h2>
            <p class="services-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum
              cras vitae eget enim tellus augue a dui viverra.
            </p>
          </div>
          <div class="services-wrapper">
            <div class="services-img-wrapper">
              <img
                class="services-img"
                src="/assets/images/accomodation.svg"
                alt="Accomodation"
              />
            </div>
            <h2 class="services-title">Accomodation</h2>
            <p class="services-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum
              cras vitae eget enim tellus augue a dui viverra.
            </p>
          </div>
          <div class="services-wrapper">
            <div class="services-img-wrapper">
              <img
                class="services-img"
                src="/assets/images/departure.svg"
                alt="Pre-Departure Briefing"
              />
            </div>
            <h2 class="services-title">Pre-Departure Briefing</h2>
            <p class="services-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum
              cras vitae eget enim tellus augue a dui viverra.
            </p>
          </div>
          <div class="services-wrapper">
            <div class="services-img-wrapper">
              <img
                class="services-img"
                src="/assets/images/guidance.svg"
                alt="Post-Visa Guidance"
              />
            </div>
            <h2 class="services-title">Post-Visa Guidance</h2>
            <p class="services-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum
              cras vitae eget enim tellus augue a dui viverra.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
