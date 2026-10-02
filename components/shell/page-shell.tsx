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
      <header className="relative overflow-hidden">
        <div className="relative z-20 flex items-center gap-2 p-3 md:p-4">
          {topBar}
        </div>
        <div className="absolute inset-x-0 top-8 md:top-10">
          <Wordmark className="text-surface-secondary" />
        </div>
        <div aria-hidden="true" className="h-[22vw] md:h-[14vw]" />
      </header>
      <main
        className={cn(
          "relative z-10 flex-1 rounded-t-panel p-4",
          "-mt-[6vw] md:-mt-[4vw]",
          "bg-surface-tertiary/60",
          panelClassName,
        )}
      >
        {children}
      </main>
    </div>
  );
};
