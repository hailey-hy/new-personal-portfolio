import { ABOUT_ME } from "@/constants/aboutMe";
import React from "react";
import Typos from "../common/Typography";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const AboutMe = () => {
  const aboutMe = ABOUT_ME;
  return (
    <div className="flex flex-col mb-8 max-w-[1000px] w-full">
      <div className="flex items-end gap-5 mb-5">
        <Avatar>
          <AvatarImage src="/imgs/hailey_cropped.jpg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <Typos typo="h3">{aboutMe.introduction}</Typos>
      <Typos typo="p">{aboutMe.detail}</Typos>
    </div>
  );
};

export default AboutMe;
