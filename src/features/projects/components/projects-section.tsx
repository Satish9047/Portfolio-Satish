import { Section } from "@/components/layout/section";
import { getProjects } from "../services/get-projects";
import { ProjectCard } from "./project-card";

export function ProjectsSection() {
  const projects = getProjects();

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Project cards that highlight impact, not clutter."
      description="The data and presentation are now separated, so adding or editing portfolio work only touches the project feature module instead of the page file."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Section>
  );
}
