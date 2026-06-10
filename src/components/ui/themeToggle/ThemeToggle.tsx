import { useThemeStore } from "@/stores/themeStore";
import { Button } from "../button/Button";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <Button onClick={toggleTheme}>
      Switch to {theme === "light" ? "dark" : "light"} mode
    </Button>
  );
};
