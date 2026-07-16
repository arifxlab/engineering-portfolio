import type { Project } from "../domain/project";

export const projects: Project[] = [
  {
    title: "RAGForge",
    description:
      "Enterprise AI Knowledge Engine with Retrieval-Augmented Generation, vector search, document ingestion, authentication, and scalable backend architecture.",
    tech: ["Python", "FastAPI", "PostgreSQL", "Redis", "Qdrant", "Docker"],
    github: "https://github.com/arifxlab",
    demo: "",
    image: "/images/projects/ragforge.png",
    year: "2026",
    category: "Artificial Intelligence",
    status: "In Progress",
    featured: true,
  },
  {
    title: "Dev Assistant AI",
    description:
      "AST-powered backend that performs AI-assisted code review and static analysis for production codebases.",
    tech: ["Python", "FastAPI", "OpenAI", "SQLAlchemy"],
    github: "https://github.com/arifxlab",
    demo: "",
    image: "/images/projects/dev-assistant-ai.png",
    year: "2026",
    category: "Backend AI",
    status: "Completed",
    featured: true,
  },
  {
    title: "AquaGrid",
    description:
      "Spring Boot backend for intelligent water zone management with JWT authentication and PostgreSQL.",
    tech: ["Java", "Spring Boot", "JWT", "PostgreSQL"],
    github: "https://github.com/arifxlab",
    demo: "",
    image: "/images/projects/aquagrid.png",
    year: "2026",
    category: "Backend",
    status: "Completed",
    featured: true,
  },
  {
    title: "CarpeFlow CRM",
    description:
      "Enterprise CRM backend with customer management, workflow automation, and scalable architecture.",
    tech: ["Laravel", "PHP", "Docker", "PostgreSQL"],
    github: "https://github.com/arifxlab",
    demo: "",
    image: "/images/projects/carpeflow.png",
    year: "2026",
    category: "Enterprise Software",
    status: "In Progress",
    featured: true,
  },
];
