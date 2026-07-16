import { motion } from "framer-motion";

import { Badge } from "../ui/Badge";
import type { SkillCategory as SkillCategoryModel } from "../../domain/skill";

interface SkillCardProps {
  category: SkillCategoryModel;
}

export function SkillCard({
                            category,
                          }: SkillCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
      className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10"
    >
      <h3 className="text-xl font-semibold text-white">
        {category.title}
      </h3>

      <div className="mt-6 flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <Badge key={skill}>
            {skill}
          </Badge>
        ))}
      </div>
    </motion.article>
  );
}
