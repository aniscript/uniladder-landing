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
                <div>
                  <div className="mb-2">
                    <p>Head Office:</p>
                    <p>
                      <span>
                        18-36 Island Business Center, <br />
                        Room 225B Second Floor, <br />
                        Block P Wellington Street, <br />
                        London, SE18 6PF
                      </span>
                    </p>
                    <h5>+442080042071</h5>
                  </div>
                  <div className="mb-2">
                    <p>Kathmandu Office:</p>
                    <p>
                      <span>
                        Hattisar Chowk, 4th Floor <br />
                        Himalayan Pinewood Pvt Ltd Building <br />
                        (Near Krishna pauroti)
                      </span>
                    </p>
                    <h5>9818704046/015318783</h5>
                    <h5>receptionuniladder@gmail.com</h5>
                  </div>
                  <div className="mb-2">
                    <p>Butwal Office:</p>
                    <p>
                      <span>
                        Devinagar, Siddhapath <br />
                        Adjacent to New Horizon English Secondary School (+2
                        Block)
                        <br /> Butwal-11
                      </span>
                    </p>
                    <h5>+071-420149</h5>
                    <h5>butwaluniladder@gmail.com</h5>
                  </div>
                  <div className="mb-2">
                    <p>Bangladesh Office:</p>
                    <p>
                      <span>Dhaka, Bangladesh</span>
                    </p>
                    <h5>+447949228752( whats App only)</h5>
                    <h5>bangladesh@ukuniladder.com</h5>
                  </div>
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
