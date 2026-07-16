import type { JourneyStep } from "../domain/journey";

export const engineeringJourney: JourneyStep[] = [
  {
    id: "foundations",
    title: "Software Engineering Foundations",
    description:
      "Built a strong foundation in software engineering by learning object-oriented programming, data structures, algorithms, REST APIs, relational databases, version control, and clean architecture principles.",
    technologies: [
      "Java",
      "Git",
      "REST API",
      "SQL",
      "PostgreSQL",
    ],
  },
  {
    id: "aquagrid",
    title: "AquaGrid",
    project: "Water Zone Management API",
    description:
      "Designed and implemented a Spring Boot backend for managing water zones, consumers, billing, and administrative workflows using a layered architecture and PostgreSQL.",
    technologies: [
      "Spring Boot",
      "Java",
      "PostgreSQL",
      "JPA",
      "JWT",
    ],
  },
  {
    id: "smartgate",
    title: "SmartGate Parking",
    project: "Parking Management Backend",
    description:
      "Built a backend service for parking operations with authentication, vehicle management, parking sessions, and RESTful APIs using Python and Flask.",
    technologies: [
      "Python",
      "Flask",
      "SQLAlchemy",
      "REST API",
    ],
  },
  {
    id: "carpeflow",
    title: "CarpeFlow CRM",
    project: "Enterprise CRM Platform",
    description:
      "Developed a Laravel-based CRM focused on business automation, authentication, scalable architecture, Docker-based development, and PostgreSQL integration.",
    technologies: [
      "Laravel",
      "PHP",
      "Docker",
      "PostgreSQL",
      "Redis",
    ],
  },
  {
    id: "devassistant",
    title: "Dev Assistant AI",
    project: "AI Code Review Backend",
    description:
      "Engineered an AI-assisted backend capable of AST analysis, code quality evaluation, and automated developer feedback using FastAPI and modern Python tooling.",
    technologies: [
      "FastAPI",
      "Python",
      "AST",
      "OpenAI",
      "Pydantic",
    ],
  },
  {
    id: "ragforge",
    title: "RAGForge",
    project: "Enterprise AI Knowledge Engine",
    description:
      "Architected an enterprise Retrieval-Augmented Generation platform with document ingestion, vector search, asynchronous processing, Redis, PostgreSQL, and Qdrant.",
    technologies: [
      "FastAPI",
      "Qdrant",
      "Redis",
      "PostgreSQL",
      "Docker",
      "RAG",
    ],
  },
  {
    id: "flyrank",
    title: "FlyRank Internship",
    project: "Backend AI Engineering",
    description:
      "Completed production-focused backend engineering projects covering authentication, AI service wrappers, Docker, prompt engineering, scalable APIs, and enterprise software development.",
    technologies: [
      "FastAPI",
      "Docker",
      "AI APIs",
      "JWT",
      "Backend Engineering",
    ],
  },
  {
    id: "today",
    title: "Today",
    description:
      "Continuously building production-ready backend systems, AI infrastructure, and distributed applications while expanding expertise in enterprise software architecture.",
    technologies: [
      "AI Engineering",
      "Distributed Systems",
      "Backend Architecture",
      "Cloud",
    ],
  },
];
