import React from "react";
import ProjectCards from "./ProjectCards";
import { PROJECTS } from "@/constants/project";

const Projects = () => {
  const projects = PROJECTS;
  return (
    <div className="flex gap-2 flex-col">
      {projects.map((project) => (
        <ProjectCards project={project} key={project.title} />
      ))}
    </div>
  );
};

export default Projects;
