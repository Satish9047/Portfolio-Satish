"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { getProjects } from "../services/get-projects";
import type { Project } from "../types";
import { Section } from "@/components/layout/section";

export function ProjectsSection() {
  const projects = getProjects();
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // ScrollTrigger to stagger fade-in ledger lines
      gsap.fromTo(
        ".ledger-row",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".ledger-table",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Track mouse coordinates over the ledger table container
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!previewRef.current || !containerRef.current) return;

    // Get coordinates relative to the table container
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Animate preview box to follow cursor smoothly with deceleration glide
    gsap.to(previewRef.current, {
      x: x + 24, // Offset right slightly
      y: y - 128, // Offset up to center
      duration: 0.4,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  const handleMouseEnterRow = (project: Project) => {
    setActiveProject(project);
    if (!previewRef.current) return;

    gsap.to(previewRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const handleMouseLeaveRow = () => {
    if (!previewRef.current) return;

    gsap.to(previewRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Interactive Projects Ledger"
      description="An interactive database matrix representing full-stack products and practice work, optimized with high-performance mouse-tracking previsualizations."
    >
      <div 
        ref={containerRef}
        className="ledger-table relative w-full border-t border-[var(--foreground)]"
        onMouseMove={handleMouseMove}
      >
        {/* Floating Grayscale Thumbnail Preview */}
        <div 
          ref={previewRef}
          className="pointer-events-none absolute left-0 top-0 z-50 hidden md:block w-52 h-64 border border-[var(--foreground)] bg-[var(--background)] p-2 opacity-0 scale-75 overflow-hidden origin-center"
          style={{ willChange: "transform, opacity" }}
        >
          {activeProject && (
            <div className="w-full h-full relative">
              <Image
                src={activeProject.image}
                alt={activeProject.name}
                fill
                sizes="(max-width: 768px) 100vw, 208px"
                className="object-cover grayscale"
              />
            </div>
          )}
        </div>

        {/* Ledger Rows */}
        {projects.map((project, index) => {
          const serial = String(index + 1).padStart(2, "0");
          return (
            <div
              key={project.name}
              className="ledger-row border-b border-[var(--border)] py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:bg-[color-mix(in_srgb,var(--foreground)_3%,transparent)] transition-colors duration-150"
              onMouseEnter={() => handleMouseEnterRow(project)}
              onMouseLeave={handleMouseLeaveRow}
              onClick={() => window.open(project.href, "_blank", "noopener,noreferrer")}
            >
              {/* Left Details */}
              <div className="flex items-center gap-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-mono">
                  {serial} /
                </span>
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-[var(--foreground)]">
                  {project.name}
                </h3>
              </div>

              {/* Center Tech Stack */}
              <div className="flex flex-wrap gap-2 md:justify-center">
                {project.stack.map((tech) => (
                  <span 
                    key={tech}
                    className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 border border-[var(--border)] text-slate-600 dark:text-slate-400 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Right Link */}
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-swiss-red">
                <span>Launch Link</span>
                <span className="text-sm font-light">↗</span>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
