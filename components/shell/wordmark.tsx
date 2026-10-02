import { cn } from "@/lib/utils";
import { WordmarkProps } from "@/types/shell";

export const Wordmark = ({ className }: WordmarkProps) => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none w-full select-none [container-type:inline-size]"
    >
      <span
        role="presentation"
        className={cn(
          "block text-center font-display uppercase leading-[0.8]",
          "text-[28cqw] tracking-[-0.04em]",
          className,
        )}
      >
        EPOCH
      </span>
    </div>
  );
};
