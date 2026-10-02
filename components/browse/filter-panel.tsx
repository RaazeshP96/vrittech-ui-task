"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { FILTER_GROUPS, SOUND_CATEGORIES } from "@/data/browse";
import { cn } from "@/lib/utils";

type FilterPanelProps = {
  category: string;
  onCategoryChange: (category: string) => void;
  className?: string;
};

export const FilterPanel = ({
  category,
  onCategoryChange,
  className,
}: FilterPanelProps) => {
  return (
    <aside
      aria-label="Filter"
      className={cn("w-60 rounded-card bg-surface-tertiary p-3", className)}
    >
      <h2 className="type-serif-regular mb-3 text-ink">Filter</h2>

      <Accordion defaultValue={["sounds"]}>
        <AccordionItem value="sounds">
          <AccordionTrigger className="type-label-strong-caps">
            Sounds
          </AccordionTrigger>
          <AccordionContent>
            <ul className="flex flex-col gap-0.5">
              {SOUND_CATEGORIES.map((item) => (
                <li key={item.label}>
                  <Button
                    type="button"
                    variant="ghost"
                    aria-pressed={category === item.label}
                    onClick={() => onCategoryChange(item.label)}
                    className="h-7 w-full justify-start gap-2 type-label-strong-caps aria-pressed:bg-surface aria-pressed:text-white"
                  >
                    {item.label}
                    <span className="text-ink-secondary">{item.count}</span>
                  </Button>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>

        {FILTER_GROUPS.map((group) => (
          <AccordionItem key={group} value={group.toLowerCase()}>
            <AccordionTrigger className="type-label-strong-caps">
              {group}
            </AccordionTrigger>
            <AccordionContent />
          </AccordionItem>
        ))}
      </Accordion>
    </aside>
  );
};
