import { useLoaderData, useParams } from "react-router";

export default function ProjectDetails() {
  const { id } = useParams();
  const projects = useLoaderData();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) return <p>Project not found</p>;

  return (
    <div className="text-white p-6">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p>{project.description}</p>
    </div>
  );
}
