import { Container } from "../ui/Container";
import { FadeIn } from "../ui/FadeIn";
import { skills } from "../../data/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <Container>
        <FadeIn>
          <div>
            <h2 className="text-4xl font-bold text-white">
              Skills & Technologies
            </h2>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-400">
              My primary expertise is in backend engineering, AI-powered
              applications, and modern enterprise software development.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/20 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
