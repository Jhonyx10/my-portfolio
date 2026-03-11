import { type ReactNode } from "react";
import { Layout as LayoutIcon, Activity } from "lucide-react";

export interface ProjectType {
  title: string;
  description: string;
  tech: string[];
  icon: ReactNode;
  github: string;
  image: string | null;
}

export const projectsData: ProjectType[] = [
  {
    title: "MedSync Platform",
    description: "A comprehensive healthcare management system featuring appointment scheduling and role-based access control.",
    tech: ["Laravel", "Vue 3", "MongoDB", "Inertia"],
    icon: <Activity className="text-yellow-500" size={20} />,
    github: "https://github.com/Jhonyx10",
    image: null,
  },
  {
    title: "VILT Dashboard",
    description: "Real-time administrative interface with integrated Pusher.js notifications and flexible schemas.",
    tech: ["Inertia.js", "Tailwind", "Reverb"],
    icon: <LayoutIcon className="text-yellow-500" size={20} />,
    github: "https://github.com/Jhonyx10",
    image: null,
  }
];