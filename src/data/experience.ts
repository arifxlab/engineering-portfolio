import type { Experience } from "../domain/experience";

export const experience: Experience[] = [
  {
    id: "flyrank",
    company: "FlyRank",
    role: "Backend AI Engineering Intern",
    period: "2026",
    description:
      "Working on backend engineering projects focused on AI-powered applications, scalable APIs, authentication systems, Docker workflows, and production-oriented software development.",
    responsibilities: [
      "Building backend services with modern API architectures",
      "Developing AI service integrations and intelligent workflows",
      "Applying clean architecture and engineering best practices",
      "Working with databases, containers, and deployment workflows",
    ],
    technologies: [
      "FastAPI",
      "Python",
      "Docker",
      "AI APIs",
      "PostgreSQL",
      "REST APIs",
    ],
  },
  {
    id: "carpediem",
    company: "Carpe Diem",
    role: "Automation CRM Engineer",
    period: "2026",
    description:
      "Developing automation-focused CRM solutions to improve business workflows, customer management, and operational efficiency.",
    responsibilities: [
      "Designing CRM backend workflows",
      "Building business automation features",
      "Developing scalable application architecture",
      "Improving data management processes",
    ],
    technologies: [
      "Laravel",
      "PHP",
      "PostgreSQL",
      "Docker",
      "REST APIs",
    ],
  },
];
