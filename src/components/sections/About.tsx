import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { AboutCard } from "../about/AboutCard";

export default function About() {
  return (
    <Section id="about">
      <SectionHeading
        title="About"
        subtitle="A backend-focused engineer passionate about scalable systems, AI applications, and building software that solves real-world problems."
      />

      <AboutCard />
    </Section>
  );
}
