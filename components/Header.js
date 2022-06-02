import React from "react";
import Image from "next/image";
// import Image from "../assets/images/logo.png";
import Link from "next/link";

const Header = () => {
  return (
    <div className="container mx-auto section">
      <div className="nav">
        <div className="logo">
          <Link href="/">
            <Image
              src="/assets/images/logo.png"
              alt="logo"
              width={180}
              height={50}
            />
          </Link>
        </div>
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
