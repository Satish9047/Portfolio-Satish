import React from "react";
import { skills } from "@/data/skills";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Skill = () => {
  useGSAP(() => {
    const skillTl = gsap.timeline();
    skillTl.from(".animateToLeft", {
      x: 20,
      opacity: 0,
      duration: 0.07,
      stagger: 0.05,
    });
  });
  return (
    <>
      {skills.map((skill) => {
        return (
          <div
            key={skill.skillName}
            className="inline-flex flex-row items-center animateToLeft gap-2 p-2 px-4 bg-gray-200 rounded-md shadow-md"
          >
            <figure className="w-10 h-10">{skill.icon}</figure>
            <h2 className="text-lg">{skill.skillName}</h2>
          </div>
        );
      })}
    </>
  );
};

export default Skill;
