import React from "react";
import {
  FaArrowRight,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
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
          <div className="appointment-inner">
            <div className="contact-desc">
              <div className="contact-list flex items-center">
                <FaEnvelope size={48} color="#00aff0" className="mr-4" />

                <a href="mailto:info@uniladder.co.uk">
                  <p>receptionuniladder@gmail.com</p>
                </a>
              </div>
              <div className="contact-list flex items-center">
                <FaPhone size={48} color="#00aff0" className="mr-4" />
                <div>
                  <a href="tel:+442080042071">
                    <p>+442080042071</p>
                  </a>
                  <a href="tel:+9779808428046">
                    <p>+9779808428046</p>
                  </a>
                  <a href="tel:+977015318783">
                    <p>+977015318783</p>
                  </a>
                </div>
              </div>
              <div className="contact-list flex items-center">
                <FaMapMarkerAlt size={48} color="#00aff0" className="mr-4" />
                <div>
                  <p>
                    <span>Head Office:</span>
                  </p>
                  <p>Island Business Centre, Wellington Street, London</p>
                  <p>
                    <span>Nepal Contact Office:</span>
                  </p>
                  <p>Bagbazar, Kathmandu, Nepal</p>
                </div>
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
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
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
                  <div className="form-group">
                    <div className="label">Level</div>
                    <select name="level" id="level">
                      <option value="undergraduate">Masters</option>
                      <option value="postgraduate">Bachelors</option>

                      <option value="phd">Phd</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <div className="label">Academic Background</div>
                    <input
                      className="input-group"
                      type="text"
                      name="academic"
                      placeholder="Eg. BBS"
                    />
                  </div>
                  <div className="form-group">
                    <div className="label">Grade/Percentage</div>
                    <input
                      className="input-group"
                      type="text"
                      name="grade"
                      placeholder="Eg. 70%"
                    />
                  </div>
                  <div className="form-group">
                    <div className="label">Passout year</div>
                    <input
                      className="input-group"
                      type="text"
                      name="passout"
                      placeholder="Eg. 2021"
                    />
                  </div>
                </div>

                <button className="btn-primary inline-flex items-center text-white py-5 mt-4">
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
