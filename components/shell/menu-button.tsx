"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { NAV } from "@/lib/constant";

export const MenuButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            type="button"
            size="icon"
            aria-label="Open menu"
            className="bg-surface-tertiary text-icon hover:bg-surface-tertiary-hover"
          />
        }
      >
        <Menu />
      </SheetTrigger>

      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>EPOCH</SheetTitle>
        </SheetHeader>
        <nav aria-label="Main" className="flex flex-col gap-2 p-4">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "justify-start",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
