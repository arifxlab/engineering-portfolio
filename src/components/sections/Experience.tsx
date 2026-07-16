import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { ExperienceGrid } from "../experience/ExperienceGrid";

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        title="Experience"
        subtitle="Professional engineering experience focused on backend systems, AI applications, automation, and production-quality software development."
      />

      <ExperienceGrid />
    </Section>
  );
}
