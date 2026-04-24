import type { Project } from "../types";

export function getProjects(): Project[] {
  return [
    {
      name: "Meet Home",
      summary:
        "A full-stack property booking platform where users browse listings and schedule home visits with the estate admin.",
      href: "https://github.com/Satish9047/Meet-Home",
      stack: ["React", "Node.js", "MongoDB"],
    },
    {
      name: "EShop",
      summary:
        "An e-commerce application with product search, cart management, CRUD flows, and checkout-oriented user journeys.",
      href: "https://github.com/Satish9047/ecommerce-shop",
      stack: ["React", "Express", "PostgreSQL"],
    },
    {
      name: "Frontend Projects",
      summary:
        "A collection of focused frontend builds covering HTML, CSS, React, Tailwind CSS, SCSS, and JavaScript practice work.",
      href: "https://github.com/Satish9047/tailwind-projects",
      stack: ["HTML", "Tailwind", "JavaScript"],
    },
    {
      name: "Todo App",
      summary:
        "A cross-platform todo application exploring Angular, IndexedDB, SQLite, Cordova, Capacitor, and PWA-friendly workflows.",
      href: "https://github.com/Satish9047/IT-Himalaya",
      stack: ["Angular", "SQLite", "PWA"],
    },
  ];
}
