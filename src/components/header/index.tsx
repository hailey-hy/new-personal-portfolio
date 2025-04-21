"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Loader, Moon, Sun } from "lucide-react";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClickThemeButton = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className="w-full flex justify-end p-3">
      <Button onClick={handleClickThemeButton} variant="secondary">
        {!mounted ? <Loader /> : theme === "light" ? <Sun /> : <Moon />}
      </Button>
    </div>
  );
};

export default Header;
