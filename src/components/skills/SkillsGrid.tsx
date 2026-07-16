import { skillCategories } from "../../data/skills";
import { SkillCategory } from "./SkillCategory";

export function SkillsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {skillCategories.map((category) => (
        <SkillCategory
          key={category.id}
          category={category}
        />
      ))}
    </div>
  );
}
