import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { StackGrid } from "../stack/StackGrid";

export default function TechStack() {
  return (
    <Section id="tech-stack">
      <SectionHeading
        title="Technology Stack"
        subtitle="The technologies, frameworks, and tools I use to design, build, deploy, and maintain production-ready software systems."
      />

      <StackGrid />
    </Section>
  );
}
