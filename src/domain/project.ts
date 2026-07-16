export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  image?: string;
  year: string;
  category: string;
  status: "Completed" | "In Progress";
  featured: boolean;
}
