import React from "react";
import Navbar from "./navbar";
import Header from "./header";
import Portfolio from "./portfolio";
import Contact from "./contact";
import Skills from "./skills";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Skills />
      <Portfolio />
      <Contact />
    </>
  );
};
export default Home;
