import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import FeaturedProjects from "./FeaturedProjects";
import TechnicalSkills from "./TechnicalSkills";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
      <div className="w-11/12 mx-auto">
        <Navbar></Navbar>
        <Hero></Hero>
        <About />
        <FeaturedProjects />
        <TechnicalSkills />
        <Contact />
        <Footer />
    </div>
  );
};

export default Home;
