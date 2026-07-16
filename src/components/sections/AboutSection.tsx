import { Container } from "../ui/Container";
import { FadeIn } from "../ui/FadeIn";

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <Container>
        <FadeIn>
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold text-white">
              About Me
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              I'm a Software Engineering student passionate about Backend
              Engineering, Artificial Intelligence, Distributed Systems, and
              Enterprise Software Development.
            </p>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              I enjoy designing scalable, production-ready backend systems
              using Java, Spring Boot, Python, FastAPI, Laravel, PostgreSQL,
              Docker, Redis, Qdrant, REST APIs, JWT Authentication, and modern
              AI technologies including Retrieval-Augmented Generation (RAG)
              and AI Agents.
            </p>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              My goal is to become a Backend AI Engineer specializing in
              enterprise architecture, distributed systems, and AI-powered
              applications while building software that solves real-world
              problems.
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
