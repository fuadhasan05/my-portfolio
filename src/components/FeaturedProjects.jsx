import { FaArrowRight } from "react-icons/fa";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export default function FeaturedProjects() {
  const projects = [
    {
      title: "Aptora - Building Management System",
      description:
        "Aptora is a modern web application for managing apartment buildings, agreements, users, and administrative operations. It streamlines apartment listings, agreement requests, coupon management, payments, and announcements for both admins and users.",
      image: "https://i.ibb.co.com/29XKyxj/aptora.png",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      bullets: [
        "Streamlined apartment listings and agreement request workflows",
        "Integrated coupon management, payment processing, and announcements",
      ],
      github: "https://github.com/fuadhasan05/aptora",
      live: "https://aptora-25.web.app/",
    },
    {
      title: "ShareBite",
      description:
        "ShareBite is a community-driven food sharing platform built with React, Vite, Express, and MongoDB. It enables users to share surplus food, request meals, and help reduce food waste.",
      image: "https://i.ibb.co.com/99spJ4Zw/sharebite.png",
      tech: ["React", "Vite", "Express", "MongoDB"],
      bullets: [
        "Enabled users to share and request food through a community marketplace",
        "Designed for reducing food waste and connecting local communities",
      ],
      github: "https://github.com/fuadhasan05/share-bite",
      live: "https://sharebite25.web.app/",
    },
    {
      title: "GardenGlee: A Community Gardening Platform",
      description:
        "A comprehensive platform for gardening enthusiasts to share tips, connect with local gardeners, ask plant care questions, and participate in gardening events. GardenGlee fosters a vibrant community around shared interests such as composting, hydroponics, balcony gardening, and more.",
      image: "https://i.ibb.co.com/Nh7MN5R/gardenglee.png",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      bullets: [
        "Created a social hub for gardeners to share advice and resources",
        "Facilitated local events and Q&A for gardening best practices",
      ],
      github: "https://github.com/fuadhasan05/gardenglee",
      live: "https://gardenglee25.web.app/",
    },
  ];

  return (
    <div className="text-white py-16 px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
        <p className="text-gray-400 text-lg">Check out some of my recent work</p>
      </div>

      {/* Project Cards */}
      <div className="grid md:grid-cols-3 gap-8 container mx-auto px-4">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg flex flex-col"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-gray-800 px-3 py-1 rounded-full text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Bullets */}
              <ul className="text-sm text-gray-300 mb-6 list-disc list-inside">
                {project.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              {/* Footer */}
              <div className="mt-auto flex items-center justify-between">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-200 transition"
                >
                  View Details <FaArrowRight />
                </a>
                <div className="flex gap-3 text-gray-400">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    <FiGithub size={20} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    <FiExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
