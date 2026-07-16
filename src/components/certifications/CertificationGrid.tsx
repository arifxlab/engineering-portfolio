import { certifications } from "../../data/certifications";
import { CertificationCard } from "./CertificationCard";

export function CertificationGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {certifications.map((certification) => (
        <CertificationCard
          key={certification.id}
          certification={certification}
        />
      ))}
    </div>
  );
}
