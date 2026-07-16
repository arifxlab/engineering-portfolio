import { FadeIn } from "../ui/FadeIn";
import { ProjectCard } from "../ui/ProjectCard";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        title="Featured Projects"
        subtitle="Production-ready backend systems, enterprise applications, and AI-powered software I've built."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        {projects
          .filter((project) => project.featured)
          .map((project) => (
            <FadeIn key={project.title}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
      </div>
    </Section>
  );
}
