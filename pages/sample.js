import Link from "next/link";
import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import sampleList from "../components/sample-list";

const sample = () => {
  return (
    <>
      <Head>
        <title>Sample Documents - Uniladder Consultancy</title>
        <meta name="description" content="" />
      </Head>
      <Header />
      <div className="section container mx-auto">
        <div className="inner">
          <h1>Sample Documents</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {sampleList.map((sample, index) => (
              <div className="sample-wrapper">
                <h2 className="services-title">{sample.title}</h2>
                {/* <p className="services-description">{sample.description}</p> */}
                <a href={sample.link} download target="_blank">
                  <button class="mt-3 bg-transparent hover:bg-blue-400 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-400 hover:border-transparent rounded">
                    Download
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default sample;
