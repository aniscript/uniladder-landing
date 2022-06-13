import Header from "../components/Header";
import Hero from "../components/Hero";
import Head from "next/head";
import Process from "../components/Process";
import Services from "../components/Services";
import Featured from "../components/Featured";
import Flow from "../components/Flow";
import Footer from "../components/Footer";
import Stats from "../components/Stats";
import Ready from "../components/Ready";
import Testimonial from "../components/Testimonial";
import Videos from "../components/Videos";
import { FaWhatsapp } from "react-icons/fa";

function HomePage() {
  return (
    <>
      <Head>
        <title>Home - Uniladder Consultancy</title>
        <meta name="description" content="Meta description for the Home page" />
      </Head>
      <Header />
      <Hero />
      <Process />
      <Services />
      <Featured />
      <Flow />
      <Testimonial />
      <Videos />
      <Stats />
      <Ready />
      <Footer />
      <a
        href="https://wa.me/+442080042071"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="whatsapp-icon" />
      </a>
    </>
  );
}

export default HomePage;
