"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Section } from "@/components/layout/section";
import { getSkills } from "../services/get-skills";

export function SkillsSection() {
  const skills = getSkills();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Staggered entry for individual cells
      gsap.fromTo(
        ".skill-item",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.05,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".skills-grid-container",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="skills-grid-container">
      <Section
        id="skills"
        eyebrow="Capabilities"
        title="Technical Stack Index"
        description="A curated catalog of architectural and engineering proficiencies, organized as a strict typographic grid matrix."
      >
        {/* Asymmetric layout: skills grid spans columns 1-11 of a 12-column grid, leaving column 12 empty */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 border-t border-l border-[var(--foreground)] bg-[var(--background)]">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const serial = String(index + 1).padStart(2, "0");
            return (
              <div
                key={skill.name}
                className="skill-item border-r border-b border-[var(--foreground)] p-5 space-y-4 hover:bg-[color-mix(in_srgb,var(--foreground)_3%,transparent)] transition-colors duration-150 flex flex-col justify-between aspect-square"
              >
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-mono font-bold text-slate-500">{serial} /</span>
                  <Icon className="text-base text-[var(--foreground)] opacity-60" />
                </div>
                <h4 className="text-sm font-black uppercase tracking-tighter text-[var(--foreground)] select-none">
                  {skill.name}
                </h4>
              </div>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
