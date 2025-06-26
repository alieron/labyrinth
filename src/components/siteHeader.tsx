import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useThemeContext } from "@/contexts/themeContext";
import SvgIcons from "./svgIcons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function SiteHeader() {
  const { theme, setTheme } = useThemeContext();

  const handleThemeChange = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <header className="bg-background sticky w-full border-b border-border px-4 py-2 z-50 top-0 flex items-center justify-between">
      <div>
        <Link to="/" className="flex gap-2 items-center">
          <SvgIcons.logo className="size-8" />
          <h1 className="text-3xl font-bold">labyrinth</h1>
        </Link>
      </div>
      <div className="flex h-5 gap-2 items-center">
        <Input placeholder="Search..." className="w-64 h-7" />
        <Button
          size="icon"
          variant="ghost"
          onClick={handleThemeChange}
        >
          {theme === "dark" ? <Sun /> : <Moon />}
        </Button>
        <Separator orientation="vertical" className="border-1" />
        <Button asChild size="icon" variant="ghost" className="shadow-none">
          <Link to="https://github.com/alieron/labyrinth" target="_blank" rel="noreferrer">
            <SvgIcons.gitHub />
          </Link>
        </Button>
      </div>
    </header>
  );
}