import { Wordmark } from "@/components/shell/wordmark";
import { cn } from "@/lib/utils";
import { PageShellProps } from "@/types/shell";

export const PageShell = ({
  topBar,
  panelClassName,
  children,
}: PageShellProps) => {
  return (
    <div className="flex min-h-dvh flex-col bg-surface-neutral">
      <div className="flex items-center gap-2 p-3 md:p-4">{topBar}</div>
      <div className="overflow-hidden">
        <Wordmark className="text-surface-secondary" />
      </div>
      <main
        className={cn(
          "relative z-10 flex-1 rounded-t-panel p-4 md:-mt-[8vw]",
          "bg-surface-tertiary/60",
          panelClassName,
        )}
      >
        {children}
      </main>
    </div>
  );
};
