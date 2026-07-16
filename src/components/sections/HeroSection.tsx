import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { FadeIn } from "../ui/FadeIn";
import { profile } from "../../data/profile";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="flex min-h-[calc(100vh-4rem)] items-center py-20"
    >
      <Container>
        <FadeIn>
          <div className="max-w-4xl">
            <p className="mb-4 text-lg font-medium text-cyan-400">
              {profile.headline}
            </p>

            <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl">
              <span className="block text-white">
                Hi, I'm
              </span>

              <span className="mt-2 block text-cyan-400">
                {profile.name}
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-300">
              {profile.tagline}
            </p>

            <p className="mt-6 max-w-3xl leading-8 text-zinc-500">
              {profile.bio}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button onClick={() => (window.location.href = "#projects")}>
                View Projects
              </Button>

              <Button
                variant="outline"
                onClick={() => window.open(profile.resume, "_blank")}
              >
                Download Resume
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              {[
                "Python",
                "Java",
                "Spring Boot",
                "FastAPI",
                "Laravel",
                "Docker",
                "PostgreSQL",
                "Redis",
                "Qdrant",
                "AI",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
