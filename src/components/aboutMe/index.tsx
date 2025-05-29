import { ABOUT_ME } from "@/constants/aboutMe";
import React from "react";
import Typos from "../common/Typography";
import Image from "next/image";

const AboutMe = () => {
  const aboutMe = ABOUT_ME;
  return (
    <div className="flex flex-col mb-8 max-w-[1000px] w-full">
      <div className="flex items-end gap-5 mb-5">
        <div className="relative w-[80px] h-[80px]">
          <Image
            src="/imgs/hailey_cropped.jpg"
            fill
            alt="hailey"
            priority
            className="rounded-full object-cover"
          />
        </div>
      </div>
      <Typos typo="h3">{aboutMe.introduction}</Typos>
      <Typos typo="p">{aboutMe.detail}</Typos>
    </div>
  );
};

export default AboutMe;
