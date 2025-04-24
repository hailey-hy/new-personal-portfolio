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
import { Badge } from "../ui/badge";

const ExperienceCards = ({ experience }: { experience: ExperienceType }) => {
  return (
    <Card className="max-w-[1000px] w-full">
      <motion.div variants={cardVariants}>
        <CardHeader>
          <CardTitle>
            <Typos typo="h3">{experience.title}</Typos>
          </CardTitle>
          <div className="flex gap-3">
            <CardDescription>{experience.period}</CardDescription>
            <Badge variant="secondary">{experience.role}</Badge>
          </div>
        </CardHeader>
        <CardContent>
          {experience.description.map((item, index) => (
            <Typos typo="list" key={`experience-items-${index}`}>
              {item}
            </Typos>
          ))}
        </CardContent>
      </motion.div>
    </Card>
  );
};

export default ExperienceCards;
