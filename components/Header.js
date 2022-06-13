import React, { useState } from "react";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [showMobile, setShowMobile] = useState(false);
  return (
    <div className="container mx-auto">
      <div className="nav section">
        <div className="logo">
          <Link href="/">
            <a>
              <img
                src="/assets/images/logo.png"
                alt="logo"
                className="logo-img"
              />
            </a>
          </Link>
        </div>
        <div className="nav-mobile">
          <div className="toggle">
            {showMobile ? (
              <AiOutlineClose
                size={32}
                onClick={() => setShowMobile(!showMobile)}
              />
            ) : (
              <AiOutlineMenu
                size={32}
                onClick={() => setShowMobile(!showMobile)}
              />
            )}
          </div>

          {showMobile && (
            <div className="menu-mobile">
              <ul className="mobile-nav">
                <Link href="/">
                  <a>
                    <li>Home</li>
                  </a>
                </Link>
                <Link href="/construction">
                  <a>
                    <li>About</li>
                  </a>
                </Link>
                <Link href="/services">
                  <a>
                    <li>Our Services</li>
                  </a>
                </Link>
                <a href="/construction">
                  <a>
                    <li>Universities</li>
                  </a>
                </a>
                <Link href="/appointment">
                  <a>
                    <div className="btn-primary mt-8">Book an appointment </div>
                  </a>
                </Link>
              </ul>
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
          )}
        </div>
        <div className="nav-right">
          <ul className="menu">
            <Link href="/">
              <a>
                <li>Home</li>
              </a>
            </Link>
            <Link href="/construction">
              <a>
                <li>About</li>
              </a>
            </Link>

            <Link href="/services">
              <a>
                <li>Our Services</li>
              </a>
            </Link>
            <Link href="/construction">
              <a>
                <li>Universities</li>
              </a>
            </Link>
          </ul>
          <Link href="/appointment">
            <a>
              <button className="blob-btn">
                Book an appointment
                <span className="blob-btn__inner">
                  <span className="blob-btn__blobs">
                    <span className="blob-btn__blob"></span>
                    <span className="blob-btn__blob"></span>
                    <span className="blob-btn__blob"></span>
                    <span className="blob-btn__blob"></span>
                  </span>
                </span>
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
