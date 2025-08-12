import { useState } from "react";
import { useNavigate } from "react-router";
import { FaCloudDownloadAlt, FaTelegramPlane } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { VscCallOutgoing } from "react-icons/vsc";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", target: "home" },
    { label: "About", target: "about" },
    { label: "Projects", target: "projects" },
  ];

  const handleScroll = (target) => {
    if (window.location.pathname !== "/") {
      // Navigate to home and add scroll target as query param
      navigate(`/?scroll=${target}`);
    } else {
      if (target === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const section = document.getElementById(target);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <>
      <nav className="bg-[#0f0f1a] text-white py-3 md:px-16 shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between container mx-auto">
          <div
            className="text-4xl flex-1 font-signature cursor-pointer select-none inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500"
            onClick={() => handleScroll("home")}
          >
            Fuad Hasan
          </div>

          <div className="p-[2px] rounded-full animated-gradient-border">
            <ul className="hidden md:flex items-center space-x-6 flex-1 justify-center bg-slate-800 rounded-full shadow-2xl py-2 px-10">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleScroll(item.target)}
                  className="text-gray-100 hover:text-white transition duration-300 cursor-pointer"
                >
                  {item.label}
                </li>
              ))}
              <button
                onClick={() => setShowContact(true)}
                className="bg-gradient-to-r from-pink-500 to-purple-500 px-3 py-1 rounded-full text-white font-medium shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                Request a <VscCallOutgoing />
              </button>
            </ul>
          </div>

          <div className="hidden md:flex flex-1 justify-end">
            <a
              href="/resume.pdf"
              download="Fuad_Hasan_Resume.pdf"
              className="bg-slate-800 px-3 py-2 rounded-lg text-white font-medium shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              Resume <FaCloudDownloadAlt />
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <FiMenu size={24} />
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 bg-[#0F172A] p-4 rounded-lg space-y-3">
            {navItems.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  handleScroll(item.target);
                  setIsOpen(false);
                }}
                className="text-white border-b pb-2 cursor-pointer"
              >
                {item.label}
              </div>
            ))}
            <button
              onClick={() => {
                setShowContact(true);
                setIsOpen(false);
              }}
              className="bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-2 rounded-full text-white font-medium flex items-center gap-2 w-full justify-center"
            >
              Request a <VscCallOutgoing />
            </button>
          </div>
        )}
      </nav>

      {showContact && (
        <div className="fixed inset-0 bg-[#0f0f1a] bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-lg relative">
            <button
              onClick={() => setShowContact(false)}
              className="absolute top-3 right-3 text-black text-lg font-bold"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4 text-center">
              Send Me a Message
            </h2>
            <form className="flex-1 max-w-lg p-6 rounded-lg border bg-gray-900 border-gray-400/40 shadow-lg flex flex-col gap-4">
              <input
                type="text"
                placeholder="Name"
                className="rounded-md py-3 px-4 bg-gray-500 text-gray-50 placeholder-gray-100 focus:outline-none"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="rounded-md py-3 px-4 bg-gray-500 text-gray-50 placeholder-gray-100 focus:outline-none"
                required
              />
              <select
                className="rounded-md py-3 px-4 bg-gray-500 text-gray-50 focus:outline-none"
                defaultValue="Project inquiries"
                required
              >
                <option disabled>Project inquiries</option>
                <option>Project inquiries</option>
                <option>Collaboration</option>
                <option>Others</option>
              </select>
              <textarea
                placeholder="Message"
                rows={5}
                className="rounded-md py-3 px-4 bg-gray-500 text-gray-50 focus:outline-none resize-none"
                required
              />
              <button
                type="submit"
                className="mt-4 bg-slate-800 hover:bg-slate-400 transition rounded-md py-3 font-semibold text-white flex justify-center items-center gap-2 cursor-pointer"
              >
                <FaTelegramPlane /> Send
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
