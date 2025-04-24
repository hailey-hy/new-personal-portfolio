import React from "react";
import Typos from "../common/Typography";
import { EXPERIENCES } from "@/constants/experience";
import ExperienceCards from "./ExperienceCards";

const Experience = () => {
  const experience = EXPERIENCES;
  return (
    <div className="flex gap-2 flex-col w-full mb-5">
      <Typos typo="h4">경력</Typos>
      {experience.map((item) => (
        <ExperienceCards experience={item} key={`experience-${item.title}`} />
      ))}
    </div>
  );
};

export default Experience;
