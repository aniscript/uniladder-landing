import React from "react";
import {
  FaArrowRight,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import Header from "../components/Header";

const Appointment = () => {
  async function handleOnSubmit(e) {
    e.preventDefault();
    const formData = {};
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });
    fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(formData),
    });
  }
  return (
    <>
      <Header />
      <div className="section container mx-auto">
        <div className="inner">
          <h1>Book your video counselling Session !</h1>
          <div className="flex">
            <div className="contact-desc">
              <div className="contact-list">
                <h2>Email</h2>
                <a href="mailto:info@uniladder.co.uk">
                  <p>info@uniladder.co.uk</p>
                </a>
              </div>
              <div className="contact-list">
                <h2>Address</h2>
                <p>Bagbazar, Kathmandu, Nepal</p>
                <p>Island Business Centre, Wellington Street, London</p>
              </div>
              <div className="contact-list">
                <h2 className="_2B7v3OyMli6L__KhEA5tdV">Social links</h2>
                <ul className="social-icons">
                  <li>
                    <a
                      href="https://www.facebook.com/uniladder.consultancy.1"
                      target="_blank"
                    >
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/c/GaneshKhadkalive"
                      target="_blank"
                    >
                      <FaYoutube />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/uni-ladder-consultancy-89a7211ab/"
                      target="_blank"
                    >
                      <FaLinkedin />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="form-section">
              <form
                className="form-wrapper"
                method="post"
                onSubmit={handleOnSubmit}
              >
                <div className="form-group">
                  <div className="label">Full Name</div>
                  <input
                    className="input-group"
                    type="text"
                    name="fullName"
                    placeholder="Eg. Anish Lamsal"
                  />
                </div>
                <div className="form-group">
                  <div className="label">Email Address</div>
                  <input
                    className="input-group"
                    type="email"
                    name="email"
                    placeholder="Eg. anish@gmail.com"
                  />
                </div>
                <div className="form-group">
                  <div className="label">Contact Number</div>
                  <input
                    className="input-group"
                    type="text"
                    name="contact"
                    placeholder="Eg. 9841234567"
                  />
                </div>
                <div className="form-group">
                  <div className="label">Location</div>
                  <input
                    className="input-group"
                    type="text"
                    name="location"
                    placeholder="Eg. Hetauda"
                  />
                </div>
                <button className="btn-primary inline-flex items-center text-white py-5">
                  Book now <FaArrowRight className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointment;
