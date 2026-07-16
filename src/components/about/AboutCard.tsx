import { motion } from "framer-motion";

import { aboutContent } from "../../data/about";

export function AboutCard() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
      className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 backdrop-blur-sm"
    >
      <h3 className="text-2xl font-semibold tracking-tight text-white">
        {aboutContent.title}
      </h3>

      <div className="mt-6 space-y-6">
        {aboutContent.paragraphs.map((paragraph) => (
          <p
            key={paragraph}
            className="text-lg leading-8 text-zinc-400"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </motion.article>
  );
}
