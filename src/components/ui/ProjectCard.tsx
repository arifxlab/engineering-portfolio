import { FaGithub, FaGlobe } from "react-icons/fa";

import type { Project } from "../../domain/project";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { Card } from "./Card";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40">
      {project.image && (
        <div className="aspect-video overflow-hidden rounded-xl bg-zinc-900">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
      )}

      <div className="mt-6 flex items-center justify-between">
        <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
          {project.category}
        </span>

        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            project.status === "Completed"
              ? "bg-emerald-500/10 text-emerald-400"
              : "bg-yellow-500/10 text-yellow-400"
          }`}
        >
          {project.status}
        </span>
      </div>

      <h3 className="mt-5 text-2xl font-bold text-white">
        {project.title}
      </h3>

      <p className="mt-4 leading-7 text-zinc-400">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <span className="text-sm text-zinc-500">
          {project.year}
        </span>

        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={() => window.open(project.github, "_blank")}
          >
            <FaGithub className="mr-2" />
            GitHub
          </Button>

          {project.demo && (
            <Button
              onClick={() => window.open(project.demo, "_blank")}
            >
              <FaGlobe className="mr-2" />
              Demo
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}
