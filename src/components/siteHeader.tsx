import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useThemeContext } from "@/contexts/themeContext";
import SvgIcons from "./svgIcons";
import { Button } from "@/components/ui/button";

export default function SiteHeader() {
  const { theme, setTheme } = useThemeContext();

  const handleThemeChange = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <header className="bg-gradient-to-b from-background from-30% to-transparent sticky top-0 z-50 px-6 pt-10 pb-20 flex items-center justify-between">
      {/* Logo: backlink to homepage */}
      <Link to="/" className="flex items-center gap-2 h-8">
        <SvgIcons.logo className="size-8 text-muted-foreground" />
      </Link>
      {/* Theme Switcher */}
      <div className="flex gap-2">
        <Button size="icon" variant="ghost" onClick={handleThemeChange}>
          {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
        </Button>
      </div>
    </header>
  );
}
