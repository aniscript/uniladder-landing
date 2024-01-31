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
import Head from "next/head";
import { useToasts } from "react-toast-notifications";
import { useRouter } from "next/router";
import Footer from "../components/Footer";

const Appointment = () => {
  const router = useRouter();
  const { addToast } = useToasts();
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
    addToast("Mail sent successfully", {
      appearance: "success",
      autoDismiss: true,
    });
    router.push("/");
  }
  return (
    <>
      <Head>
        <title>Appointment - Uniladder Consultancy</title>
        <meta name="description" content="Meta description for the Home page" />
      </Head>
      <Header />
      <div className="section container mx-auto">
        <div className="inner">
          <h1>Book your video counselling Session !</h1>
          <div className="appointment-inner">
            <div className="contact-desc">
              <div className="contact-list flex flex-col md:items-center md:flex-row">
                <FaEnvelope size={48} color="#00aff0" className="mr-4" />

                <a href="mailto:receptionuniladder@gmail.com">
                  <p>receptionuniladder@gmail.com</p>
                </a>
              </div>
              <div className="contact-list flex flex-col md:items-center md:flex-row">
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
              <div className="contact-list flex flex-col md:items-center md:flex-row">
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
                      href="https://www.facebook.com/studyintheuk111"
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
                      required
                    />
                  </div>
                  <div className="form-group">
                    <div className="label">Email Address</div>
                    <input
                      className="input-group"
                      type="email"
                      name="email"
                      placeholder="Eg. anish@gmail.com"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <div className="label">Contact Number</div>
                    <input
                      className="input-group"
                      type="text"
                      name="contact"
                      placeholder="Eg. 9841234567"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <div className="label">Level</div>
                    <select name="level" id="level">
                      <option value="Undergraduate">Masters</option>
                      <option value="Postgraduate">Bachelors</option>
                      <option value="A-level">+2/A-level</option>
                      <option value="Phd">Phd</option>
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
                  <div className="form-group">
                    <div className="label">English Test Done ?</div>
                    <select name="english" id="english">
                      <option value="Not-Selected">Select one</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <div className="label">English Test Type</div>
                    <select name="type" id="type">
                      <option value="Not-done">None</option>
                      <option value="IELTS">IELTS</option>
                      <option value="PTE">PTE</option>
                      <option value="TOEFL">TOEFL</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <div className="label">Score</div>
                    <input
                      className="input-group"
                      type="text"
                      name="score"
                      placeholder="Eg. L-7, R-7, S-7, W-7"
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
      <Footer />
    </>
  );
};

export default Appointment;
