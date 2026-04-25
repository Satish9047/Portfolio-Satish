import type { Skill } from "../types";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiTailwindcss,
  SiRedux,
  SiAngular,
  SiApachecordova,
} from "react-icons/si";

export function getSkills(): Skill[] {
  return [
    { name: "React", icon: FaReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Node.js", icon: FaNodeJs },
    { name: "Express", icon: SiExpress },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Prisma", icon: SiPrisma },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Redux Toolkit", icon: SiRedux },
    { name: "Angular", icon: SiAngular },
    { name: "Cordova", icon: SiApachecordova },
  ];
}