import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { SkillsGrid } from "../skills/SkillsGrid";

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        title="Skills"
        subtitle="Production-ready technologies and tools I use to design, build, deploy, and scale backend systems, enterprise applications, and AI-powered software."
      />

      <SkillsGrid />
    </Section>
  );
}
