import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Typos from "../common/Typography";
import { ProjectType } from "@/constants/project";
import { Badge } from "../ui/badge";

const ProjectCards = ({ project }: { project: ProjectType }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Typos typo="h3">{project.title}</Typos>
        </CardTitle>
        <CardDescription>
          {project.subTitle} | {project.period}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Typos typo="h5">목표</Typos>
        <Typos typo="small">{project.goal}</Typos>
      </CardContent>
      <CardContent>
        <Typos typo="h5">주요 역할</Typos>
        <Typos typo="list">
          {project.mainRole.map((item, index) => (
            <li key={`mainRole-${index}`}>{item}</li>
          ))}
        </Typos>
      </CardContent>
      <CardContent>
        <Typos typo="h5">성과</Typos>
        <Typos typo="list">
          {project.performance.map((item, index) => (
            <li key={`performance-${index}`}>{item}</li>
          ))}
        </Typos>
      </CardContent>
      <CardContent>
        <Typos typo="h5">인사이트</Typos>
        <Typos typo="list">
          {project.insight.map((item, index) => (
            <li key={`insight-${index}`}>{item}</li>
          ))}
        </Typos>
      </CardContent>
      <CardContent>
        <Typos typo="h5">사용 기술 스택</Typos>
        <div className="flex gap-1 mt-6">
          {project.usedSkills.map((item, index) => (
            <Badge key={`mainRole-${index}`} techName={item} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCards;
