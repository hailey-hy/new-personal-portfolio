import React from "react";
import ProjectCards from "./ProjectCards";
import { PROJECTS } from "@/constants/project";
import Typos from "../common/Typography";

const Projects = () => {
  const projects = PROJECTS;
  return (
    <div className="flex gap-2 flex-col w-full">
      <Typos typo="h4">프로젝트</Typos>
      {projects.map((project) => (
        <ProjectCards project={project} key={project.title} />
      ))}
    </div>
  );
};

export default Projects;
