"use client";
import Hero from "@/components/Hero";
import Skill from "@/components/Skill";
import Project from "@/components/Project";
import ThemeToggleBtn from "@/components/ThemeToggle";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Home() {
  useGSAP(() => {
    const sectionTl = gsap.timeline();
    sectionTl.from(".animateTopicToTop", {
      y: 50,
      opacity: 0,
      duration: 0.2,
      delay: 0,
    });

    const heroTl = gsap.timeline();

    heroTl.from(".animateToTop", {
      y: 50,
      opacity: 0,
      duration: 0.2,
      delay: 0.2,
      stagger: 0.2,
    });
  });
  return (
    <main className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full md:w-7/12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 ">
          <section className="grid order-2 w-full gap-8 md:col-span-8 md:order-1">
            <div className="space-y-4">
              <h1 className="text-2xl font-extrabold animateTopicToTop">
                Skills
              </h1>
              <div className="flex flex-wrap gap-4 ">
                <Skill />
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-2xl font-extrabold animateTopicToTop">
                Projects
              </h1>
              <div className="flex flex-col flex-wrap gap-4 ">
                <Project />
              </div>
            </div>
          </section>
          <section className="grid order-1 w-full md:col-span-4 md:order-2 ">
            <div className="flex flex-col w-full gap-4">
              <div className="animateToTop">
                <ThemeToggleBtn />
              </div>
              <div className="bg-gray-200 rounded-md shadow-md animateToTop">
                <Hero />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
