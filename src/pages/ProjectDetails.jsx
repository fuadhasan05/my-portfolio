import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import {
  FaArrowLeft,
  FaLightbulb,
  FaFlagCheckered,
  FaStar,
  FaTools,
} from "react-icons/fa";
import { Link } from "react-router";
import { BiSolidSearchAlt2 } from "react-icons/bi";

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
      <div className="text-center text-gray-400 py-20 text-lg">
        Loading project details...
      </div>
    );
  }

  const navLinks = [
    { label: "Overview", id: "overview" },
    { label: "Key Features", id: "key-features" },
    { label: "Tech Stack", id: "tech-stack" },
    { label: "Challenges & Learnings", id: "challenges-learnings" },
    { label: "Future Plans", id: "future-plans" },
  ];

  return (
    <div className="text-gray-300 min-h-screen py-16 container mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 mt-16">
      {/* Main content */}
      <main className="flex-1 max-w-4xl">
        {/* Back Button */}
        <div className="mb-10">
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-500 hover:text-white transition"
          >
            <FaArrowLeft /> Back to Projects
          </Link>
        </div>

        {/* Title & Buttons */}
        <div className="flex flex-col md:flex-row gap-5 justify-between mb-6 ">
          <h1 className="text-4xl font-bold text-white leading-tight">
            {project.title}
          </h1>
          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-5 py-2 bg-gray-900 border border-gray-700 rounded-full hover:scale-105 duration-300 transition text-sm"
            >
              <FiGithub />
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-105 duration-300 rounded-full transition text-sm"
            >
              <FiExternalLink /> Live Demo
            </a>
          </div>
        </div>
        <p className="text-gray-400 leading-relaxed">{project.briefDescription}</p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-3 mt-6">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="bg-gray-900 border border-gray-700 px-3 py-1 rounded-lg text-xs font-semibold"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Main Image */}
        <div className="mt-12 rounded-xl border border-gray-800 shadow-lg overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full object-cover"
          />
        </div>

        {/* Overview */}
        <section id="overview" className="mt-16">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
            <BiSolidSearchAlt2 className="text-white" /> Overview
          </h2>
          <p className="max-w-3xl leading-relaxed text-gray-300">
            {project.description}
          </p>
        </section>

        {/* Key Features */}
        <section id="key-features" className="mt-16">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
            <FaStar className="text-yellow-400" /> Key Features
          </h2>
          <div className="">
            {project.keyFeatures.map((feature, i) => (
              <div
                key={i}
                className="bg-gray-900 border border-gray-800 p-3 shadow hover:shadow-lg hover:border-gray-700 transition"
              >
                {feature}
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section id="tech-stack" className="mt-16">
          <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
            <FaTools className="text-indigo-500" /> Tech Stack
          </h2>
          <ul className="list-disc pl-6 space-y-2 max-w-3xl text-gray-300">
            {project.techStack?.map((item, i) => (
              <li key={i}>
                <span className="font-semibold underline underline-offset-4 ">
                  {item.name}
                </span>{" "}
                – {item.description}
              </li>
            ))}
          </ul>
        </section>

        {/* Challenges & Future Plans */}
        <div className="space-y-10 mt-20">
          {/* Challenges */}
          <section
            id="challenges-learnings"
            className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-800"
          >
            <div className="flex items-center gap-3 mb-5">
              <FaLightbulb className="text-yellow-500 text-3xl" />
              <h3 className="text-2xl font-semibold">Challenges & Learnings</h3>
            </div>
            <ul className="space-y-3 text-gray-300 list-disc pl-5">
              {project.challenges?.map((challenge, idx) => (
                <li key={idx}>{challenge}</li>
              ))}
            </ul>
          </section>

          {/* Future Plans */}
          <section
            id="future-plans"
            className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-800"
          >
            <div className="flex items-center gap-3 mb-5">
              <FaFlagCheckered className="text-indigo-500 text-3xl" />
              <h3 className="text-2xl font-semibold">Future Plans</h3>
            </div>
            <ul className="space-y-3 text-gray-300 list-disc pl-5">
              {project.futurePlans?.map((plan, idx) => (
                <li key={idx}>{plan}</li>
              ))}
            </ul>
          </section>
        </div>

        {/* Outcome */}
        {/* <section id="outcome" className="mt-20 max-w-3xl">
          <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
            🎯 Outcome
          </h2>
          <p className="text-gray-300 leading-relaxed">{project.outcome}</p>
        </section> */}
      </main>

      {/* Sidebar */}
      <aside className="hidden md:block w-64 sticky top-20 self-start text-gray-400 text-sm">
        <h3 className="mb-6 text-2xl font-semibold text-white">On this page</h3>
        <nav className="flex flex-col gap-3">
          {navLinks.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              className="hover:text-white transition cursor-pointer"
            >
              {label}
            </a>
          ))}
        </nav>
      </aside>
    </div>
  );
}
