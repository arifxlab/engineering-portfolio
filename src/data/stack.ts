import type { StackCategory } from "../domain/stack";

export const stackCategories: StackCategory[] = [
  {
    id: "backend",
    title: "Backend Engineering",
    description:
      "Building scalable APIs, business logic, authentication, and enterprise backend services.",
    technologies: [
      "Java",
      "Spring Boot",
      "Python",
      "FastAPI",
      "PHP",
      "Laravel",
      "Flask",
      "REST APIs",
      "JWT",
    ],
  },
  {
    id: "ai",
    title: "AI Engineering",
    description:
      "Developing AI-powered applications, Retrieval-Augmented Generation systems, and LLM integrations.",
    technologies: [
      "OpenAI API",
      "Claude API",
      "RAG",
      "Prompt Engineering",
      "AI Agents",
      "Vector Search",
      "Qdrant",
    ],
  },
  {
    id: "databases",
    title: "Databases",
    description:
      "Designing reliable persistence layers for enterprise applications.",
    technologies: [
      "PostgreSQL",
      "Redis",
      "MongoDB",
      "SQLAlchemy",
      "JPA / Hibernate",
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    description:
      "Containerized development, version control, and deployment-ready workflows.",
    technologies: [
      "Docker",
      "Docker Compose",
      "Git",
      "GitHub",
      "Alembic",
      "Linux",
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    description:
      "Building modern interfaces to complement backend systems.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Framer Motion",
    ],
  },
];
