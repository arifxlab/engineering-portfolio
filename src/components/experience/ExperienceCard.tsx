import { motion } from "framer-motion";

import { Badge } from "../ui/Badge";
import type { Experience } from "../../domain/experience";

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({
                                 experience,
                               }: ExperienceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
      className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10"
    >
      <div>
        <h3 className="text-2xl font-semibold text-white">
          {experience.company}
        </h3>

        <p className="mt-2 text-lg font-medium text-cyan-400">
          {experience.role}
        </p>
      </div>

      <p className="mt-6 leading-8 text-zinc-400">
        {experience.description}
      </p>

      <ul className="mt-6 space-y-3 text-zinc-400">
        {experience.responsibilities.map((item) => (
          <li
            key={item}
            className="flex gap-3"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />

            <span>
              {item}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap gap-2">
        {experience.technologies.map((technology) => (
          <Badge key={technology}>
            {technology}
          </Badge>
        ))}
      </div>
    </motion.article>
  );
}
