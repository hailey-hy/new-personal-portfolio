"use client";

import React, { useEffect } from "react";
import ProjectCards from "./ProjectCards";
import { PROJECTS } from "@/constants/project";
import Typos from "../common/Typography";
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

const Projects = () => {
  const projects = PROJECTS;

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
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={listVariants}
    >
      <div className="flex gap-2 flex-col w-full items-center">
        <Typos typo="h4">Projects</Typos>
        {projects.map((project) => (
          <ProjectCards project={project} key={project.title} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
