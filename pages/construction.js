import Link from "next/link";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const construction = () => {
  return (
    <>
      <Header />
      <div className="section container mx-auto">
        <div className="inner">
          <h1>This page is under construction</h1>
          <h1>Please visit soon !</h1>
          <Link href="/">
            <button class="blob-btn">
              Go back
              <span class="blob-btn__inner">
                <span class="blob-btn__blobs">
                  <span class="blob-btn__blob"></span>
                  <span class="blob-btn__blob"></span>
                  <span class="blob-btn__blob"></span>
                  <span class="blob-btn__blob"></span>
                </span>
              </span>
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default construction;
