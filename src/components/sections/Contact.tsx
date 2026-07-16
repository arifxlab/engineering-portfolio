import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { profile } from "../../data/profile";
import { Button } from "../ui/Button";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

export default function Contact() {
  return (
    <Section id="contact">
      <SectionHeading
        title="Let's Build Something Great"
        subtitle="I'm always interested in backend engineering, AI infrastructure, enterprise software, and exciting opportunities to build impactful products."
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-10 backdrop-blur-sm"
      >
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <Mail
              size={22}
              className="text-cyan-400"
            />

            <span className="text-zinc-300">
              {profile.email}
            </span>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button
              onClick={() => window.open(profile.github, "_blank")}
            >
              <FaGithub size={18} />
              <span>GitHub</span>
            </Button>

            <Button
              variant="outline"
              onClick={() => window.open(profile.linkedin, "_blank")}
            >
              <FaLinkedin size={18} />
              <span>LinkedIn</span>
            </Button>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
