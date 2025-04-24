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

const ExperienceCards = ({ experience }: { experience: ExperienceType }) => {
  return (
    <Card className="max-w-[1000px] w-full">
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
    </Card>
  );
};

export default ExperienceCards;
