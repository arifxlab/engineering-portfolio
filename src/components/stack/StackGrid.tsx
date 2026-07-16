import { stackCategories } from "../../data/stack";
import { StackCard } from "./StackCard";

export function StackGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {stackCategories.map((category) => (
        <StackCard
          key={category.id}
          category={category}
        />
      ))}
    </div>
  );
}
