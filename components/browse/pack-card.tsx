import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Asset } from "@/types/asset";

type PackCardProps = {
  pack: Asset;
  flip?: boolean;
  className?: string;
};

const BASE_BARS = [
  10, 18, 8, 22, 14, 26, 12, 20, 9, 24, 16, 11, 28, 15, 21, 10, 18, 13, 25, 17,
  12, 23, 9, 19,
];

const barsFor = (id: string) => {
  const seed = [...id].reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return BASE_BARS.map((h, i) => BASE_BARS[(i + seed) % BASE_BARS.length] ?? h);
};

export const PackCard = ({ pack, flip = false, className }: PackCardProps) => {
  return (
    <article
      className={cn(
        "flex h-36 overflow-hidden rounded-card bg-surface-secondary",
        className,
      )}
    >
      <div
        className={cn(
          "relative w-2/5 shrink-0 bg-surface-neutral",
          flip && "order-2",
        )}
      >
        {pack.image && (
          <Image
            src={pack.image}
            alt=""
            fill
            sizes="(min-width:640px) 20vw, 40vw"
            className="object-cover"
          />
        )}
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-between p-3">
        <div className="flex items-center gap-2">
          <Button
            type="button"
            size="icon"
            variant="ghost"
            aria-label={`Play ${pack.name}`}
            className="h-9 w-9 shrink-0 rounded-full border border-white/20 text-surface-tertiary"
          >
            <Play />
          </Button>
          <div
            aria-hidden="true"
            className="flex h-8 flex-1 items-center gap-[2px]"
          >
            {barsFor(pack.id).map((h, i) => (
              <span
                key={i}
                style={{ height: `${h}px` }}
                className="w-[2px] shrink-0 rounded-full bg-surface-tertiary/40"
              />
            ))}
          </div>
        </div>
        <div className="flex items-end justify-between gap-2">
          <div className="min-w-0">
            <Link
              href={`/library/${pack.id}`}
              className="type-serif-regular block truncate text-surface-tertiary hover:underline"
            >
              {pack.name}
            </Link>
            <p className="type-serif-regular truncate italic text-surface-tertiary/60">
              by {pack.author}
            </p>
          </div>
          <span className="type-label-strong-caps shrink-0 text-surface-tertiary/60">
            {pack.duration}
          </span>
        </div>
      </div>
    </article>
  );
};
