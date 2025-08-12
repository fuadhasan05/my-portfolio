import React from "react";
import Hero from "./Hero";
import About from "./About";
import FeaturedProjects from "./FeaturedProjects";
import TechnicalSkills from "./TechnicalSkills";
import Contact from "./Contact";

const Home = () => {
  return (
      <div className="w-11/12 mx-auto">
        <Hero></Hero>
        <About />
        <FeaturedProjects />
        <TechnicalSkills />
        <Contact />
    </div>
  );
};

export default Home;
