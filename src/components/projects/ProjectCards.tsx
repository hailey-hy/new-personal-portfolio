import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Typos from "../common/Typography";
import { ProjectType } from "@/constants/project";
import { Badge } from "../ui/badge";

const ProjectCards = ({ project }: { project: ProjectType }) => {
  return (
    <Card className="max-w-4xl">
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
        <Typos typo="list">
          <li>{project.goal}</li>
        </Typos>
      </CardContent>
      <CardContent>
        <div className="overflow-auto mb-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/2">주요 역할</TableHead>
                <TableHead>성과</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {project.mainRole.map((role, index) => (
                <TableRow key={`role-performance-${index}`}>
                  <TableCell className="align-top">{role}</TableCell>
                  <TableCell className="align-top">
                    {project.performance[index] ?? "—"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
      <CardContent>
        <Typos typo="h5">사용 기술 스택</Typos>
        <div className="flex gap-1 mt-3">
          {project.usedSkills.map((item, index) => (
            <Badge key={`mainRole-${index}`} techName={item} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCards;
