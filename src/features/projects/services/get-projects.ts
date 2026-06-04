import type { Project } from "../types";

export function getProjects(): Project[] {
  return [
    {
      name: "Micro Frontend Projects",
      summary:
        "Micro frontend projects using React.js to build a modular and scalable web application.",
      href: "https://github.com/Satish9047/tailwind-projects",
      stack: ["React", "Tailwind CSS", "Typescript"],
      image: "/images/projects/meet_home.png",
    },
    {
      name: "website For itsNextTech private limited",
      summary:
        "It's nexttech is a IT Company based in Nepal.",
      href: "https://itsnexttech.com  ",
      stack: ["Next.js", "Node", "MongoDB", "BetterAuth", "Typescript"],
      image: "/images/projects/eshop.png",
    },
    {
      name: "Book Sharing web app",
      summary:
        "A pdf book sharing web app where user can share pdf books and download them",
      href: "https://github.com/Satish9047/book-sharing-app",
      stack: ["Node", "Next.js", "Neon", "Drizzle", "Zod", "Typescript", "Tailwind css"],
      image: "/images/projects/frontend_projects.png",
    },

  ];
}
