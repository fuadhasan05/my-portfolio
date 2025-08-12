import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { FaArrowLeft, FaLightbulb, FaFlagCheckered } from "react-icons/fa";
import { Link } from "react-router";

export default function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => String(p.id) === id);
        setProject(found);
      })
      .catch((err) => console.error("Error loading project:", err));
  }, [id]);

  if (!project) {
    return (
      <div className="text-center text-white py-20">
        Loading project details...
      </div>
    );
  }

  return (
    <div className="text-white py-16 container mx-auto mt-16">
      {/* Back Button */}
      <div className="mb-8">
        <Link
          to="/"
          className="flex items-center gap-2 text-gray-400 hover:text-white transition"
        >
          <FaArrowLeft /> Back to Projects
        </Link>
      </div>

      {/* Header Section */}
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <img
          src={project.image}
          alt={project.title}
          className="rounded-xl shadow-lg w-full h-auto"
        />
        <div>
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-gray-400 mb-6">{project.description}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="bg-gray-800 px-3 py-1 rounded-full text-xs"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg"
            >
              <FiGithub /> GitHub
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg"
            >
              <FiExternalLink /> Live Demo
            </a>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          {project.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>

      {/* Future Plans & Challenges */}
      <div className="grid md:grid-cols-2 gap-8 mt-16">
        {/* Future Plans */}
        <div className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <FaFlagCheckered className="text-indigo-500 text-2xl" />
            <h3 className="text-xl font-semibold">Future Plans</h3>
          </div>
          <ul className="space-y-3 text-gray-300">
            {project.futurePlans?.map((plan, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-indigo-500 mt-1">•</span> {plan}
              </li>
            ))}
          </ul>
        </div>

        {/* Challenges */}
        <div className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <FaLightbulb className="text-yellow-500 text-2xl" />
            <h3 className="text-xl font-semibold">Challenges & Learnings</h3>
          </div>
          <ul className="space-y-3 text-gray-300">
            {project.challenges?.map((challenge, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-yellow-500 mt-1">•</span> {challenge}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
