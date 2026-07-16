import { MapPin, Briefcase, Mail, CheckCircle } from "lucide-react";

import { profile } from "../../data/profile";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { FadeIn } from "../ui/FadeIn";

const techStack = [
  "Python",
  "Java",
  "Spring Boot",
  "FastAPI",
  "Laravel",
  "Docker",
  "PostgreSQL",
  "Redis",
  "Qdrant",
  "AI / RAG",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-4rem)] items-center py-24"
    >
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
          <FadeIn>
            <div>
              <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
                Backend AI Engineer
              </span>

              <h1 className="mt-8 text-5xl font-black tracking-tight text-white md:text-7xl">
                {profile.name}
              </h1>

              <p className="mt-8 max-w-2xl text-xl leading-9 text-zinc-300">
                {profile.tagline}
              </p>

              <p className="mt-6 max-w-2xl leading-8 text-zinc-500">
                Building enterprise backend systems, AI-powered applications,
                scalable APIs, and production-ready software with modern
                engineering practices.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button onClick={() => (window.location.href = "#projects")}>
                  View Engineering Projects
                </Button>

                <Button
                  variant="outline"
                  onClick={() => window.open(profile.resume, "_blank")}
                >
                  Download Resume
                </Button>
              </div>

              <div className="mt-12 flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 shadow-2xl backdrop-blur">
              <h2 className="text-lg font-semibold uppercase tracking-wide text-cyan-400">
                Profile
              </h2>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <Briefcase className="mt-1 text-cyan-400" size={20} />
                  <div>
                    <p className="text-sm text-zinc-500">Current Role</p>
                    <p className="text-white">
                      Backend AI Engineering Intern
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 text-cyan-400" size={20} />
                  <div>
                    <p className="text-sm text-zinc-500">Location</p>
                    <p className="text-white">Karachi, Pakistan</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="mt-1 text-cyan-400" size={20} />
                  <div>
                    <p className="text-sm text-zinc-500">Email</p>
                    <p className="text-white">{profile.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="mt-1 text-emerald-400" size={20} />
                  <div>
                    <p className="text-sm text-zinc-500">Status</p>
                    <p className="text-emerald-400">
                      Open to Backend & AI Opportunities
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 border-t border-zinc-800 pt-8">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
                  Specializations
                </h3>

                <ul className="mt-5 space-y-3 text-zinc-300">
                  <li>• Backend Engineering</li>
                  <li>• Artificial Intelligence</li>
                  <li>• Enterprise Software</li>
                  <li>• Distributed Systems</li>
                  <li>• Retrieval-Augmented Generation</li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
