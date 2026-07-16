import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { Timeline } from "../journey/Timeline";

export default function EngineeringJourney() {
  return (
    <Section id="journey">
      <SectionHeading
        title="Engineering Journey"
        subtitle="A progression through increasingly complex backend systems, enterprise applications, and AI-powered software engineering."
      />

      <Timeline />
    </Section>
  );
}
