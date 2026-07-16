import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { social } from "../../data/social";

export function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <Container>
        <h2 className="text-4xl font-bold text-white">
          Let's Connect
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Interested in backend engineering, AI systems, enterprise software,
          or collaboration? I'm always happy to connect with developers,
          recruiters, and engineering teams.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button
            onClick={() => (window.location.href = social.email)}
          >
            Email Me
          </Button>

          <Button
            variant="outline"
            onClick={() => window.open(social.linkedin, "_blank")}
          >
            LinkedIn
          </Button>

          <Button
            variant="outline"
            onClick={() => window.open(social.github, "_blank")}
          >
            GitHub
          </Button>
        </div>
      </Container>
    </section>
  );
}
