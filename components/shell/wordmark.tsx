import { cn } from "@/lib/utils";

type WordmarkProps = {
  className?: string;
};

export const Wordmark = ({ className }: WordmarkProps) => {
  return (
    <div className="w-full [container-type:inline-size]">
      <span
        aria-label="EPOCH"
        role="img"
        className={cn(
          "block text-center font-display uppercase leading-none",
          "text-[28cqw] tracking-[-0.04em]",
          className,
        )}
      >
        EPOCH
      </span>
    </div>
  );
};
