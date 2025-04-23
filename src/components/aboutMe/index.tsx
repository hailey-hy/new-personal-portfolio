import { ABOUT_ME } from "@/constants/aboutMe";
import React from "react";
import Typos from "../common/Typography";

const AboutMe = () => {
  const aboutMe = ABOUT_ME;
  return (
    <div className="mb-5">
      <Typos typo="h3">{aboutMe.introduction}</Typos>
      <Typos typo="p">{aboutMe.detail}</Typos>
    </div>
  );
};

export default AboutMe;
