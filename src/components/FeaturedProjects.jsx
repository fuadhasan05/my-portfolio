import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { Link } from "react-router";

export default function FeaturedProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error loading projects:", err));
  }, []);

  return (
    <div id="projects" className="text-white py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
        <p className="text-gray-400 text-lg">
          Check out some of my recent work
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 container mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.briefDescription}</p>

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

              <ul className="text-sm text-gray-300 mb-6 list-disc list-inside">
                {project.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              <div className="mt-auto flex items-center justify-between">
                <Link
                  to={`/project-details/${project.id}`}
                  className="bg-white text-black px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-200 transition"
                >
                  View Details <FaArrowRight />
                </Link>
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
