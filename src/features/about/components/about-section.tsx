"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Section } from "@/components/layout/section";
import { educationItems, experienceItems } from "../content";

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Fade and slide in rows on scroll
      gsap.fromTo(
        ".about-block",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".about-blocks-container",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="about-blocks-container">
      <Section
        id="about"
        eyebrow="Profile"
        title="Experience & Education Index"
        description="A strict chronological ledger of professional engagements and academic milestones, formatted as an asymmetric grid layout."
      >
        <div className="space-y-16">
          {/* Experience Ledger */}
          <div className="space-y-4">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 bg-swiss-red" />
              Professional Experience
            </h3>
            
            <div className="space-y-0">
              {experienceItems.map((item, index) => {
                const serial = String(index + 1).padStart(2, "0");
                return (
                  <div
                    key={`${item.company}-${item.role}`}
                    className="about-block border-t border-[var(--border)] py-6 grid grid-cols-1 md:grid-cols-12 gap-4"
                  >
                    {/* Columns 1-4: Serial, Company & Duration */}
                    <div className="md:col-span-4 space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-slate-400">{serial} /</span>
                        <h4 className="text-sm font-black uppercase tracking-tight text-[var(--foreground)]">
                          {item.company}
                        </h4>
                      </div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                        {item.duration}
                      </p>
                    </div>

                    {/* Columns 5-11: Role & Details */}
                    <div className="md:col-span-7 space-y-2">
                      <h5 className="text-sm font-bold uppercase tracking-wide text-swiss-red">
                        {item.role}
                      </h5>
                      <p className="text-sm leading-relaxed text-muted">
                        {item.details}
                      </p>
                    </div>

                    {/* Column 12: Intentional Asymmetric Empty Space */}
                    <div className="hidden md:block md:col-span-1" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Education Ledger */}
          <div className="space-y-4">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 bg-swiss-red" />
              Education History
            </h3>

            <div className="space-y-0">
              {educationItems.map((item, index) => {
                const serial = String(index + 1).padStart(2, "0");
                return (
                  <div
                    key={item.label}
                    className="about-block border-t border-[var(--border)] py-6 grid grid-cols-1 md:grid-cols-12 gap-4"
                  >
                    {/* Columns 1-4: Serial & Label */}
                    <div className="md:col-span-4 flex items-center gap-2">
                      <span className="text-[10px] font-mono text-slate-400">{serial} /</span>
                      <h4 className="text-sm font-black uppercase tracking-tight text-slate-500">
                        {item.label}
                      </h4>
                    </div>

                    {/* Columns 5-11: Degree / Course Details */}
                    <div className="md:col-span-7">
                      <p className="text-sm font-bold uppercase tracking-wide text-[var(--foreground)]">
                        {item.value}
                      </p>
                    </div>

                    {/* Column 12: Intentional Asymmetric Empty Space */}
                    <div className="hidden md:block md:col-span-1" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
