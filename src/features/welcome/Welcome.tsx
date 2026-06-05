import { Button } from "@/components/ui/button/Button";

export const Welcome = () => {
  return (
    <>
      <h1>Welcome to my bulletproof app!</h1>
      <Button onClick={() => alert("Clicked")}>Click me</Button>
    </>
  );
};
