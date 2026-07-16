import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

import { CertificationGrid } from "../certifications/CertificationGrid";

export default function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeading
        title="Certifications"
        subtitle="Continuous learning through industry-recognized programs in software engineering, artificial intelligence, cloud technologies, and enterprise development."
      />

      <CertificationGrid />
    </Section>
  );
}
