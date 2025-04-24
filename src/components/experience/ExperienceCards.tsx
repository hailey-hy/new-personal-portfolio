import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Typos from "../common/Typography";
import { ExperienceType } from "@/constants/experience";
import { motion } from "framer-motion";
import { cardVariants } from "../projects/ProjectCards";

const ExperienceCards = ({ experience }: { experience: ExperienceType }) => {
  return (
    <Card className="max-w-[1000px] w-full">
      <motion.div variants={cardVariants}>
        <CardHeader>
          <CardTitle>
            <Typos typo="h3">{experience.title}</Typos>
          </CardTitle>
          <CardDescription>{experience.period}</CardDescription>
        </CardHeader>
        <CardContent>
          <Typos typo="list">
            {experience.description.map((item, index) => (
              <li key={`experience-item-${index}`}>{item}</li>
            ))}
          </Typos>
        </CardContent>
      </motion.div>
    </Card>
  );
};

export default ExperienceCards;
