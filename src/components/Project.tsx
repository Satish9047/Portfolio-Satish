import React from "react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/project";

const Project = () => {
  return (
    <div className="flex flex-col gap-4">
      {projects.map((project) => (
        <div
          key={project.projectName}
          className="p-4 space-y-4 text-xl text-justify bg-gray-200 rounded-lg shadow-md"
        >
          <h1 className="font-bold ">{project.projectName}</h1>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row ">
            <p className="text-gray-500">{project.description}</p>
            <button className="text-blue-500 bg-gray-300 rounded-md hover:bg-gray-200">
              <figure>
                <a
                  href={project.link}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-3 font-semibold"
                >
                  <FaGithub className="w-8 h-8 hover:text-gray-500" />
                  Github
                </a>
              </figure>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
