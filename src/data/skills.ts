import type { SkillCategory } from "../domain/skill";

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    title: "Backend",
    skills: [
      "Spring Boot",
      "FastAPI",
      "Laravel",
      "Flask",
      "REST APIs",
      "JWT Authentication",
      "SQLAlchemy",
      "JPA / Hibernate",
    ],
  },
  {
    id: "languages",
    title: "Languages",
    skills: [
      "Java",
      "Python",
      "PHP",
      "TypeScript",
      "JavaScript",
      "SQL",
    ],
  },
  {
    id: "databases",
    title: "Databases",
    skills: [
      "PostgreSQL",
      "Redis",
      "Qdrant",
      "MongoDB",
    ],
  },
  {
    id: "DevOps",
    title: "DevOps & Tools",
    skills: [
      "Docker",
      "Docker Compose",
      "Git",
      "GitHub",
      "Alembic",
      "Linux",
    ],
  },
  {
    id: "ai",
    title: "AI Engineering",
    skills: [
      "RAG",
      "OpenAI API",
      "Claude API",
      "Prompt Engineering",
      "Vector Search",
      "AI Agents",
      "LLM Applications",
    ],
  },
];
