import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

import { Badge } from "../ui/Badge";
import type { JourneyStep } from "../../domain/journey";

interface TimelineItemProps {
  step: JourneyStep;
  isLast: boolean;
}

export function TimelineItem({
                               step,
                               isLast,
                             }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
      className="relative flex gap-6"
    >
      <div className="relative flex flex-col items-center">
        <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-500/30 bg-zinc-900 shadow-lg shadow-cyan-500/10">
          <Cpu className="h-5 w-5 text-cyan-400" />
        </div>

        {!isLast && (
          <div className="mt-2 h-full w-px bg-gradient-to-b from-cyan-500/40 to-zinc-800" />
        )}
      </div>

      <div className="flex-1 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-zinc-900 hover:shadow-xl hover:shadow-cyan-500/10">
        <h3 className="text-2xl font-semibold text-white">
          {step.title}
        </h3>

        {step.project && (
          <p className="mt-2 text-base font-medium text-cyan-400">
            {step.project}
          </p>
        )}

        <p className="mt-4 leading-7 text-zinc-400">
          {step.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {step.technologies.map((technology) => (
            <Badge key={technology}>
              {technology}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
