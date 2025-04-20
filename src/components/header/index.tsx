"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const handleClickThemeButton = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <Button onClick={handleClickThemeButton}>
        {theme === "light" ? <Sun /> : <Moon />}
      </Button>
    </div>
  );
};

export default Header;
