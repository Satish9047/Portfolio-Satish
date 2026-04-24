import { Tag } from "@/components/ui/tag";
import type { Skill } from "../types";

export function SkillPill({ skill }: { skill: Skill }) {
  return (
    <div className="surface rounded-2xl p-4 transition-transform duration-200 hover:-translate-y-1">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:color-mix(in_srgb,var(--accent)_15%,transparent)] text-sm font-bold text-[var(--accent)]">
          {skill.icon}
        </div>
        <div className="space-y-1">
          <p className="font-semibold">{skill.name}</p>
          <Tag>Production ready</Tag>
        </div>
      </div>
    </div>
  );
}
