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
  SiDrizzle,
  SiPrisma,
  SiTailwindcss,
  SiRedux,
  SiAngular,
  SiGithub,
  SiSvelte,
  SiAstro,
  SiFormik,
  SiZod,
  SiClaude,
  SiGsap,
  SiShadcnui,
  SiCisco
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
    { name: "Drizzle", icon: SiDrizzle },
    { name: "Prisma", icon: SiPrisma },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Redux Toolkit", icon: SiRedux },
    { name: "Angular", icon: SiAngular },
    { name: "GitHub", icon: SiGithub },
    { name: "Svelte", icon: SiSvelte },
    { name: "Astro", icon: SiAstro },
    { name: "Formik", icon: SiFormik },
    { name: "Zod", icon: SiZod },
    { name: "Claude", icon: SiClaude },
    { name: "GSAP", icon: SiGsap },
    { name: "Shadcn UI", icon: SiShadcnui },
    { name: "Cisco", icon: SiCisco },
  ];
}