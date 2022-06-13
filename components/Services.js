import React from "react";
import Tilt from "react-parallax-tilt";

const Services = () => {
  return (
    <div className="services-section">
      <div className="container mx-auto section">
        <h2 className="main-title">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Tilt className="parallax-effect" perspective={500}>
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
                Our team guides the student to choose the best suited courses
                and university for your career.
              </p>
            </div>
          </Tilt>
          <Tilt className="parallax-effect" perspective={500}>
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
                We are affiliated with the top universities in the UK. We are
                able to process the admissions faster and more efficiently.
              </p>
            </div>
          </Tilt>

          <Tilt className="parallax-effect" perspective={500}>
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
                We have 100% visa success rate in last academic year. We provide
                best consultation service regarding the visa procedure.
              </p>
            </div>
          </Tilt>

          <Tilt className="parallax-effect" perspective={500}>
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
                Our team provides briefing service for the students before their
                departure. We provide information regarding the life in the UK
                so students can be prepared for the journey.
              </p>
            </div>
          </Tilt>
          <Tilt className="parallax-effect" perspective={500}>
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
                We have dedicated team to provide the best accomodation for our
                students in the UK, so students can directly go to their
                accomodation after arrival.
              </p>
            </div>
          </Tilt>

          <Tilt className="parallax-effect" perspective={500}>
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
                We provide guidance to the students after their arrival
                regarding different registrations, procedures and tasks to do in
                the UK such as GP, NI, etc.
              </p>
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default Services;
