import dynamic from "next/dynamic";
import { Container } from "@/components/layout/container";
import { HeroSection } from "@/features/hero/components/hero-section";
import { AboutSection } from "@/features/about/components/about-section";
import { SkillsSection } from "@/features/skills/components/skills-section";
import { ContactSection } from "@/features/contact/components/contact-section";

import { getCvDownloadCount } from "@/lib/pocketbase";

const ProjectsSection = dynamic(
  () =>
    import("@/features/projects/components/projects-section").then(
      (module) => module.ProjectsSection,
    ),
  {
    loading: () => (
      <section className="section-anchor">
        <div className="surface p-6 text-sm text-muted">
          Loading projects...
        </div>
      </section>
    ),
  },
);

export default async function HomePage() {
  const downloadCount = await getCvDownloadCount().catch(() => 0);

  return (
    <Container>
      <div className="space-y-16 pb-20">
        <HeroSection downloadCount={downloadCount} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </Container>
  );
}
