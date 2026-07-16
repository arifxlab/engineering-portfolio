import { motion } from "framer-motion";

import { Badge } from "../ui/Badge";
import type { Certification } from "../../domain/certification";

interface CertificationCardProps {
  certification: Certification;
}

export function CertificationCard({
                                    certification,
                                  }: CertificationCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
      className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10"
    >
      <h3 className="text-xl font-semibold text-white">
        {certification.title}
      </h3>

      <p className="mt-2 text-cyan-400">
        {certification.issuer}
      </p>

      <p className="mt-5 leading-7 text-zinc-400">
        {certification.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {certification.skills.map((skill) => (
          <Badge key={skill}>
            {skill}
          </Badge>
        ))}
      </div>
    </motion.article>
  );
}
