import { SkillCard } from "./SkillCard";
import type { SkillCategory as SkillCategoryModel } from "../../domain/skill";

interface SkillCategoryProps {
  category: SkillCategoryModel;
}

export function SkillCategory({
                                category,
                              }: SkillCategoryProps) {
  return <SkillCard category={category} />;
}
