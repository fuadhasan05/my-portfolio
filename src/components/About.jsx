import React from "react";

export default function About() {
  return (
    <div id="about" className="container mx-auto text-white py-16">
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
        <div className="space-y-8  leading-relaxed">
          <div>
            <h3 className="text-xl font-semibold flex items-center gap-2">
              💡 From Curiosity to Code
            </h3>
            <p>
              I still remember the first time I wrote a few lines of HTML — it
              felt like magic seeing something I created appear on a screen.
              That spark turned into a passion, taking me from simple static
              pages to building complete{" "}
              <span className="font-semibold">MERN Stack applications</span> and
              exploring{" "}
              <span className="font-semibold">AI engineering</span>.    
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold flex items-center gap-2">
              🛠 What I Do Best
            </h3>
            <ul className="list-disc pl-6">
              <li>Crafting sleek, intuitive interfaces</li>
              <li>Fine-tuning performance for speed & efficiency</li>
              <li>Experimenting with AI tools to bring ideas to life</li>
            </ul>
            <p className="mt-2">
              I create software that’s not just functional but{" "}
              <span className="font-semibold">meaningful</span> — blending{" "}
              <span className="font-semibold">clean, user-focused design</span>{" "}
              with <span className="font-semibold">powerful, scalable back-end systems</span>.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold flex items-center gap-2">
              📚 Beyond the Code
            </h3>
            <p>
              When I’m not coding, I’m a{" "}
              <span className="font-semibold">book lover</span> — from deep tech
              reads to history and non-fiction. Reading fuels my
              creativity and shapes the way I solve problems.
            </p>
          </div>

          <div>
            {/* <h3 className="text-xl font-semibold flex items-center gap-2">
              🚀 My Mindset
            </h3> */}
            <p>
              <span className="font-semibold">Curious. Persistent. Adaptable.</span>{" "}
              I’m always learning, always building, and always chasing the next
              challenge. For me, coding isn’t just work — it’s a craft I’m
              mastering <span className="italic">one project at a time</span>.
            </p>
          </div>
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
