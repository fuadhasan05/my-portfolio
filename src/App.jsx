import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="w-11/12 mx-auto">
        <Navbar></Navbar>
        <Hero></Hero>
      </div>
    </>
  );
}

export default App;
