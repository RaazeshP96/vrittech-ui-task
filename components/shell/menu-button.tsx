import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export const MenuButton = () => {
  return (
    <Button
      type="button"
      size="icon"
      aria-label="Open menu"
      className="bg-surface text-ink hover:bg-surface-hover" // FILL: confirm tokens
    >
      <Menu />
    </Button>
  );
};
