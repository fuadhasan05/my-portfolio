import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { VscCallOutgoing } from "react-icons/vsc";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "Service", "Projects", "Blog"];

  return (
    <nav className="bg-gradient-to-tr from-purple-800/20 to-pink-500/10 text-white py-3 px-6 md:px-16 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left: Logo */}
        <div className="text-3xl font-signature tracking-wide flex-1">
          Fuad Hasan
        </div>

        {/* Center: Menu */}
        <div className="p-[2px] rounded-full animated-gradient-border">
          <ul className="hidden md:flex items-center space-x-6 flex-1 justify-center bg-slate-800 rounded-full shadow-2xl py-2 px-10">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="text-gray-100 hover:text-white transition duration-300 cursor-pointer"
              >
                {item}
              </li>
            ))}
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 px-3 py-1 rounded-full text-white font-medium shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2">
            Request a <VscCallOutgoing />
          </button>
          </ul>
        </div>

        {/* Right: Button */}
        <div className="hidden md:flex flex-1 justify-end">
          <button className="bg-slate-800 px-3 py-2 rounded-lg text-white font-medium shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2">
            ctrl+k
          </button>
        </div>
        
        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <FiMenu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-[#0F172A] p-4 rounded-lg space-y-3">
          {navItems.map((item, index) => (
            <div key={index} className="text-white border-b pb-2">
              {item}
            </div>
          ))}
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-2 rounded-full text-white font-medium flex items-center gap-2 w-full justify-center">
            Request a <FaPhone />
          </button>
        </div>
      )}
    </nav>
  );
}
