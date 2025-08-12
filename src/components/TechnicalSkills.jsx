import { useState } from "react";
import {
  FaPython,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiC,
  SiCplusplus,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiJsonwebtokens,
  SiMongodb,
  SiPostman,
  SiFigma,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export default function TechnicalSkills() {
  const [activeCategory, setActiveCategory] = useState("Languages");

  const skillsData = {
    Languages: [
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Python", icon: <FaPython className="text-yellow-300" /> },
      { name: "C", icon: <SiC className="text-blue-400" /> },
      { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
    ],
    "Frameworks/Libraries": [
      { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-300" />,
      },
      { name: "JWT", icon: <SiJsonwebtokens className="text-orange-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    ],
    Tools: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
      { name: "VS Code", icon: <VscVscode className="text-blue-400" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
      { name: "Figma", icon: <SiFigma className="text-pink-400" /> },
    ],
  };

  return (
    <div className="text-white py-16 px-4">
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Technical Skills</h1>
        <p className="text-gray-400">
          My expertise across various technologies and tools
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex justify-center space-x-4 mb-8">
        {Object.keys(skillsData).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              activeCategory === category
                ? "bg-gray-700"
                : "bg-transparent hover:bg-gray-800"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto bg-gray-900 rounded-lg p-5">
        {skillsData[activeCategory].map((skill, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 bg-black px-4 py-2 rounded-lg shadow hover:shadow-lg transition"
          >
            <span className="text-xl">{skill.icon}</span>
            <span className="text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
