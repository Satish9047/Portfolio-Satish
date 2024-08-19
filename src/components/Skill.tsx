import React from "react";
import { skills } from "@/data/skills";

const Skill = () => {
  return (
    <>
      {skills.map((skill) => {
        return (
          <div
            key={skill.skillName}
            className="inline-flex flex-row items-center gap-2 p-2 px-4 bg-gray-200 rounded-md shadow-md"
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
