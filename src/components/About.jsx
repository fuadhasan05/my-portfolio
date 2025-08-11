import React from "react";

export default function About() {
  return (
    <div id="about" className="container mx-auto text-white py-16 px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-400">
          Get to know more about my background and skills
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Who I Am */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            I'm Fuad Hasan, a MERN Stack Developer who loves creating modern and
            user-friendly web applications. I work with MongoDB, Express.js,
            React, and Node.js to build websites that are fast, secure, and easy
            to use.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            I enjoy turning ideas into real projects and making sure they work
            smoothly on all devices. I focus on writing clean code and using the
            latest web technologies to create great user experiences.
          </p>
          <p className="text-gray-300 leading-relaxed">
            My goal is to keep improving my skills, learn new tools, and build
            projects that solve real problems.
          </p>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Skills</h3>

          {/* Languages */}
          <SkillCategory
            title="Languages"
            items={["JavaScript", "TypeScript", "Python", "C", "C++"]}
          />

          {/* Frameworks */}
          <SkillCategory
            title="Frameworks/Libraries"
            items={[
              "React.js",
              "Node.js",
              "Express.js",
              "Next.js",
              "Tailwind CSS",
              "JWT",
              "MongoDB",
            ]}
          />

          {/* Tools */}
          <SkillCategory
            title="Tools"
            items={[
              "Git",
              "GitHub",
              "VS Code",
              "Postman",
              "Figma",
              "Chrome DevTools",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

function SkillCategory({ title, items }) {
  return (
    <div className="mb-6">
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="px-4 py-1 bg-[#1b2333] rounded-lg text-gray-200 text-sm hover:bg-blue-700 transition"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
