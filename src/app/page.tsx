import dynamic from "next/dynamic";
import { Container } from "@/components/layout/container";
import { HeroSection } from "@/features/hero/components/hero-section";
import { AboutSection } from "@/features/about/components/about-section";
import { SkillsSection } from "@/features/skills/components/skills-section";
import { ContactSection } from "@/features/contact/components/contact-section";

const ProjectsSection = dynamic(
  () =>
    import("@/features/projects/components/projects-section").then(
      (module) => module.ProjectsSection,
    ),
  {
    loading: () => (
      <section className="section-anchor">
        <div className="surface rounded-[1.75rem] p-6 text-sm text-muted">
          Loading projects...
        </div>
      </section>
    ),
  },
);

export default function HomePage() {
  return (
    <Container>
      <div className="space-y-20 pb-20">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </Container>
  );
}
