import React, { PropsWithChildren } from "react";
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
import { Badge, TechBadge } from "../ui/badge";
import { motion } from "framer-motion";
import { Element as ScrollElement } from "react-scroll";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { IoIosLink } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

export const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Element = ScrollElement as unknown as React.FC<
  PropsWithChildren<{ name: string }>
>;

const ProjectCards = ({ project }: { project: ProjectType }) => {
  return (
    <Card className="max-w-[1000px] w-full">
      <Element name={project.id}>
        <motion.div variants={cardVariants}>
          <CardHeader>
            <Badge variant={"outline"}>{project.subject}</Badge>
            <CardTitle className="flex gap-2">
              <Typos typo="h3">{project.title}</Typos>
              {project.link && (
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IoIosLink size={20} className="cursor-pointer" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>라이브 서비스 바로가기</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
              {project.github && (
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub size={20} className="cursor-pointer" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>오픈 소스 코드 보기</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </CardTitle>
            <CardDescription>
              {project.subTitle} | {project.period}
            </CardDescription>
          </CardHeader>
          {/* <CardContent>
        <Typos typo="h5">목표</Typos>
        <Typos typo="list">
          <li>{project.goal}</li>
        </Typos>
      </CardContent> */}
          <CardContent>
            <div className="overflow-auto mb-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>주요 업무</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {project.mainRole.map((role, index) => (
                    <TableRow key={`role-${index}`}>
                      <TableCell className="align-top">{role}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="overflow-auto mb-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>성과</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {project.performance.map((item, index) => (
                    <TableRow key={`role-performance-${index}`}>
                      <TableCell className="align-top">{item}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
          <CardContent>
            <Typos typo="h5">사용 기술 스택</Typos>
            <div className="flex gap-1 mt-3 flex-wrap">
              {project.usedSkills.map((item, index) => (
                <TechBadge key={`mainRole-${index}`} techName={item} />
              ))}
            </div>
          </CardContent>
        </motion.div>
      </Element>
    </Card>
  );
};

export default ProjectCards;
