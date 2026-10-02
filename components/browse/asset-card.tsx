import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Asset } from "@/types/asset";

const WORD_BG = {
  yellow: "bg-surface-secondary-hover",
  lavender: "bg-surface-tertiary-hover",
};

type AssetCardProps = {
  asset: Asset;
  className?: string;
};

export const AssetCard = ({ asset, className }: AssetCardProps) => {
  const isWord = asset.kind === "word";

  return (
    <article className={cn("flex w-44 flex-col gap-1", className)}>
      <div
        className={cn(
          "relative overflow-hidden rounded-card bg-surface-neutral",
          isWord
            ? cn("p-3 type-label-strong-caps", WORD_BG[asset.color ?? "yellow"])
            : "aspect-square",
        )}
      >
        {isWord && <p className="pr-8">{asset.text}</p>}
        {!isWord && asset.video ? (
          <video
            src={asset.video}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          !isWord &&
          asset.image && (
            <Image
              src={asset.image}
              alt={asset.name}
              fill
              sizes="176px"
              className="object-cover"
            />
          )
        )}
        <Button
          type="button"
          size="icon"
          aria-label={`Add ${asset.name}`}
          className="absolute right-2 top-2 h-7 w-7 bg-surface-tertiary text-icon hover:bg-surface-tertiary-hover"
        >
          <Plus />
        </Button>
      </div>

      <div className="flex items-end justify-between gap-6 rounded-card bg-surface-tertiary p-2">
        <div className="min-w-0">
          {isWord ? (
            <p className="type-serif-regular truncate text-ink">{asset.name}</p>
          ) : (
            <Link
              href={`/library/${asset.id}`}
              className="type-serif-regular block truncate text-ink hover:underline"
            >
              {asset.name}
            </Link>
          )}
          <p className="type-serif-regular truncate italic text-ink-secondary">
            by {asset.author}
          </p>
        </div>
        <span className="type-label-strong-caps text-ink-secondary">
          {asset.duration}
        </span>
      </div>
    </article>
  );
};
