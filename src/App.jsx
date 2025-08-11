import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import FeaturedProjects from "./components/FeaturedProjects";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TechnicalSkills from "./components/TechnicalSkills";

function App() {
  return (
    <>
      <div className="w-11/12 mx-auto">
        <Navbar></Navbar>
        <Hero></Hero>
        <About />
        <TechnicalSkills />
        <FeaturedProjects />
        <Contact/>
      </div>
    </>
  );
}

export default App;
