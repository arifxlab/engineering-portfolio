import { experience } from "../../data/experience";
import { ExperienceCard } from "./ExperienceCard";

export function ExperienceGrid() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {experience.map((item) => (
        <ExperienceCard
          key={item.id}
          experience={item}
        />
      ))}
    </div>
  );
}
