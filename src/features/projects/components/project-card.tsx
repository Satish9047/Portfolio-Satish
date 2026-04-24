import { ButtonLink } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";
import type { Project } from "../types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="surface rounded-[1.75rem] p-6 transition-transform duration-200 hover:-translate-y-1">
      <div className="flex h-full flex-col gap-5">
        <div className="space-y-3">
          <h3 className="text-xl font-bold">{project.name}</h3>
          <p className="leading-7 text-muted">{project.summary}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>

        <div className="mt-auto">
          <ButtonLink href={project.href} target="_blank" rel="noreferrer" variant="secondary">
            View repository
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
