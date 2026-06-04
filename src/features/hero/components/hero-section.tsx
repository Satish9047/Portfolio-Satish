"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ButtonLink } from "@/components/ui/button";
import { DownloadButton } from "@/features/cv/DownloadButton";
import { heroContent, heroLinks } from "../content";

interface HeroSectionProps {
  downloadCount: number;
}

export function HeroSection({ downloadCount }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered text reveal on lines
      gsap.to(".clip-reveal-line", {
        y: "0%",
        duration: 0.8,
        ease: "power4.out",
        stagger: 0.08,
      });

      // Fade reveal on other elements (metadata, links, image)
      gsap.fromTo(
        ".hero-fade-in",
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.08,
          delay: 0.4,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="top"
      className="grid items-start gap-12 pt-16 pb-24 lg:min-h-[calc(100vh-6rem)] lg:grid-cols-[1.3fr_0.7fr]"
    >
      <div className="space-y-12">
        {/* Giant Poster Typography */}
        <div className="space-y-2 select-none">
          <div className="clip-path-container h-fit overflow-hidden py-1">
            <h1 className="clip-reveal-line text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black tracking-tighter uppercase leading-[0.85] text-[var(--foreground)]">
              Satish
            </h1>
          </div>
          <div className="clip-path-container h-fit overflow-hidden py-1">
            <h1 className="clip-reveal-line text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black tracking-tighter uppercase leading-[0.85] text-[var(--foreground)]">
              Prajapati
            </h1>
          </div>
          <div className="clip-path-container h-fit overflow-hidden py-1">
            <h1 className="clip-reveal-line text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-black tracking-tighter uppercase leading-[0.85] text-swiss-red">
              Full Stack Developer
            </h1>
          </div>
        </div>

        {/* Asymmetric Columns for Description and Actions */}
        <div className="grid gap-8 sm:grid-cols-12 hero-fade-in opacity-0">
          <div className="sm:col-span-8 space-y-6">
            <p className="text-base sm:text-lg leading-relaxed text-[var(--foreground)] font-medium max-w-xl">
              {heroContent.title} {heroContent.summary}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <ButtonLink href={heroLinks[0].href} target="_blank" rel="noreferrer">
                {heroLinks[0].label}
              </ButtonLink>
              <ButtonLink href={heroLinks[1].href} variant="secondary">
                {heroLinks[1].label}
              </ButtonLink>
              <DownloadButton initialDownloadCount={downloadCount} />
            </div>
          </div>
        </div>

        {/* Metadata grid in micro labels */}
        <div className="border-t border-[var(--border)] pt-8 grid gap-6 grid-cols-2 sm:grid-cols-3 hero-fade-in opacity-0">
          <div className="space-y-1">
            <dt className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Location</dt>
            <dd className="text-xs font-bold uppercase text-[var(--foreground)]">{heroContent.location}</dd>
          </div>
          <div className="space-y-1">
            <dt className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Email</dt>
            <dd className="text-xs font-bold uppercase text-[var(--foreground)]">{heroContent.email}</dd>
          </div>
          <div className="space-y-1">
            <dt className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Phone</dt>
            <dd className="text-xs font-bold uppercase text-[var(--foreground)]">{heroContent.phone}</dd>
          </div>
        </div>
      </div>

      {/* Profile Image with geometric lines, grayscale filter and sharp corners */}
      <div className="hero-fade-in opacity-0 justify-self-stretch lg:justify-self-end mt-4 lg:mt-0">
        <div className="border border-[var(--foreground)] p-4 bg-[var(--background)] relative">
          {/* Accent square in corners to emphasize drafting blueprint feeling */}
          <div className="absolute top-0 left-0 w-2 h-2 bg-swiss-red -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-swiss-red translate-x-1/2 translate-y-1/2" />

          <div className="relative overflow-hidden aspect-[4/5] w-full lg:w-[320px]">
            <Image
              src="/profile.jpg"
              alt="Portrait of Satish Prajapati"
              priority
              fill
              sizes="(max-width: 768px) 100vw, 320px"
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
