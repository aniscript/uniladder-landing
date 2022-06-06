import Header from "../components/Header";
import Hero from "../components/Hero";
import Head from "next/head";

function HomePage() {
  return (
    <>
      <Head>
        <title>Home - Uniladder Consultancy</title>
        <meta name="description" content="Meta description for the Home page" />
      </Head>
      <Header />
      <Hero />
    </>
  );
}

export default HomePage;
