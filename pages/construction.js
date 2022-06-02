import Link from "next/link";
import React from "react";
import Header from "../components/Header";

const construction = () => {
  return (
    <>
      <Header />
      <div className="section container mx-auto">
        <div className="inner">
          <h1>This page is under construction. Please visit soon !</h1>
          <Link href="/">
            <div className="btn-primary">Go back </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default construction;
