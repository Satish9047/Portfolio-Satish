import { Section } from "@/components/layout/section";
import { getSkills } from "../services/get-skills";
import { SkillPill } from "./skill-pill";

export function SkillsSection() {
  const skills = getSkills();

  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="A focused stack instead of an overloaded icon wall."
      description="Skills are grouped into concise, reusable cards so the section stays readable and easy to extend without turning into an unstructured badge dump."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {skills.map((skill) => (
          <SkillPill key={skill.name} skill={skill} />
        ))}
      </div>
    </Section>
  );
}
