import { FadeIn } from "../ui/FadeIn";
import { ProjectCard } from "../ui/ProjectCard";
import { SectionHeading } from "../ui/SectionHeading";
import { Container } from "../ui/Container";

import { projects } from "../../data/projects";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-28"
    >
      <Container>
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
      </Container>
    </section>
  );
}
