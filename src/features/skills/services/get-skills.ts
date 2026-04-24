import type { Skill } from "../types";

export function getSkills(): Skill[] {
  return [
    { name: "React", icon: "React" },
    { name: "Next.js", icon: "Next" },
    { name: "TypeScript", icon: "TS" },
    { name: "Node.js", icon: "Node" },
    { name: "Express", icon: "API" },
    { name: "PostgreSQL", icon: "SQL" },
    { name: "MongoDB", icon: "DB" },
    { name: "Prisma", icon: "ORM" },
    { name: "Tailwind CSS", icon: "TW" },
    { name: "Redux Toolkit", icon: "State" },
    { name: "Angular", icon: "NG" },
    { name: "Cordova", icon: "PWA" },
  ];
}
