import { ThemeToggle } from "@/components/ui/themeToggle/ThemeToggle";
import { UserLists } from "@/features/users/components";
import { useThemeStore } from "@/stores/themeStore";

function App() {
  const { theme } = useThemeStore();

  return (
    <div
      style={{
        background: theme === "dark" ? "#1a1a1a" : "#fff",
        color: theme === "dark" ? "white" : "black",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Bulletproof React Demo</h1>
        <ThemeToggle />
      </div>
      <UserLists />
    </div>
  );
}

export default App;
