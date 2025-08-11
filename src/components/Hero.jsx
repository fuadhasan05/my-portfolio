import img from "../assets/fuadHasan4-r.png";
import ".././index.css";
import { FaCloudDownloadAlt, FaPhone } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden flex items-center justify-center mt-20"
    >
      {/* Gradient glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr z-0 pointer-events-none" />

      {/* Content container */}
      <div className="relative z-10 items-center justify-between gap-12 py-16">
        {/* Left text content */}
        <div className="text-center max-w-2xl">
          <p className="text-xl font-bold text-white mb-3">Hey 👋 I'm</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Fuad Hasan
          </h1>
          <p className="text-2xl sm:text-3xl font-semibold text-pink-500 italic mb-4">
            MERN Stack Developer
          </p>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Specialized in building stunning pixel-perfect interactive
            websites/applications.
          </p>
          {/* Image */}
          <div className="flex justify-center">
            <div className="w-62 h-62 rounded-lg shadow-lg border-2 overflow-hidden bg-gray-600 hover:bg-gray-300">
              <img
                src={img}
                alt="Fuad Hasan"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-1 rounded-full text-white font-medium flex items-center gap-2 justify-center cursor-pointer">
            Resume <FaCloudDownloadAlt />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
