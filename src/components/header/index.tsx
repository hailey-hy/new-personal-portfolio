"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Loader, Moon, Sun } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { RiArrowRightUpFill } from "react-icons/ri";
import { ABOUT_ME } from "@/constants/aboutMe";

const Header = () => {
  const aboutMe = ABOUT_ME;
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClickThemeButton = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className="w-full max-w-[1000px] m-auto flex justify-end p-3 gap-8">
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger>
            <a href={aboutMe.github} target="_blank" rel="noopener noreferrer">
              <FaGithub
                size={25}
                className="cursor-pointer hover:text-indigo-400"
              />
            </a>
          </TooltipTrigger>
          <TooltipContent
            side="bottom"
            className="inline-flex items-center bg-indigo-400"
          >
            github 이동 <RiArrowRightUpFill />
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <Button onClick={handleClickThemeButton} variant="secondary">
        {!mounted ? <Loader /> : theme === "light" ? <Sun /> : <Moon />}
      </Button>
    </div>
  );
};

export default Header;
