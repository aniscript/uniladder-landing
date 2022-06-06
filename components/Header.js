import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaClose } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [showMobile, setShowMobile] = useState(false);
  return (
    <div className="container mx-auto section">
      <div className="nav">
        <div className="logo">
          <Link href="/">
            <img
              src="/assets/images/logo.png"
              alt="logo"
              className="logo-img"
            />
          </Link>
        </div>
        {/* <div className="nav-mobile">
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
            <>
              <ul className="menu-mobile">
                <a href="/">
                  <li>Home</li>
                </a>
                <a href="/construction">
                  <li>About</li>
                </a>
                <a href="/construction">
                  <li>Our Services</li>
                </a>
                <a href="/construction">
                  <li>Universities</li>
                </a>
                <Link href="/appointment">
                  <div className="btn-primary">Book an appointment </div>
                </Link>
              </ul>
            </>
          )}
        </div> */}
        <div className="nav-right">
          <ul className="menu">
            <a href="/">
              <li>Home</li>
            </a>
            <a href="/construction">
              <li>About</li>
            </a>
            <a href="/construction">
              <li>Our Services</li>
            </a>
            <a href="/construction">
              <li>Universities</li>
            </a>
          </ul>

          <Link href="/appointment">
            <div className="btn-primary">Book an appointment </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
