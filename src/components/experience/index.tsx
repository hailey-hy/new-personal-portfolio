"use client";

import React, { useEffect } from "react";
import Typos from "../common/Typography";
import { EXPERIENCES } from "@/constants/experience";
import ExperienceCards from "./ExperienceCards";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const listVariants = {
  visible: {
    transition: {
      staggerChildren: 0.2, // 0.2초 간격으로 등장
    },
  },
  hidden: {},
};

const Experience = () => {
  const experience = EXPERIENCES;
  const controls = useAnimation();

  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);
  return (
    <motion.div
      ref={ref}
      className="flex flex-col gap-12 w-full"
      initial={"hidden"}
      whileInView="visible"
      animate={controls}
      variants={listVariants}
    >
      <div className="flex gap-2 flex-col w-full items-center mb-5">
        <Typos typo="h4">Experience</Typos>
        {experience.map((item) => (
          <ExperienceCards experience={item} key={`experience-${item.title}`} />
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
