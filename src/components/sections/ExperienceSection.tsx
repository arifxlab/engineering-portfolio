import { Container } from "../ui/Container";
import { Card } from "../ui/Card";
import { experience } from "../../data/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <Container>
        <h2 className="text-4xl font-bold text-white">Experience</h2>

        <div className="mt-10 space-y-6">
          {experience.map((item) => (
            <Card key={item.company}>
              <h3 className="text-2xl font-semibold text-white">
                {item.role}
              </h3>

              <p className="text-cyan-400">
                {item.company} • {item.period}
              </p>

              <p className="mt-4 text-zinc-400">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
