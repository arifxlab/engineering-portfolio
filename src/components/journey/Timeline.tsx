import { engineeringJourney } from "../../data/journey";
import { TimelineItem } from "./TimelineItem";

export function Timeline() {
  return (
    <div className="relative">
      <div className="space-y-10">
        {engineeringJourney.map((step, index) => (
          <TimelineItem
            key={step.id}
            step={step}
            isLast={index === engineeringJourney.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
