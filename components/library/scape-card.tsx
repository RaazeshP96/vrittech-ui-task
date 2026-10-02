import Image from "next/image";
import Link from "next/link";
import { MoreVertical, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Scape } from "@/types/library";

const FRAME_RING = {
  pink: "ring-[#ffc9c1]",
  orange: "ring-[#ff7a45]",
  green: "ring-[#a8c3a0]",
  yellow: "ring-[#e5d377]",
  lavender: "ring-[#c4baff]",
} as const;

type ScapeCardProps = {
  scape: Scape;
};

export const ScapeCard = ({ scape }: ScapeCardProps) => {
  return (
    <article className="flex flex-col gap-2">
      <div
        className={cn(
          "relative aspect-square overflow-hidden rounded-card bg-surface-neutral ring-4",
          FRAME_RING[scape.frame],
        )}
      >
        {scape.image && (
          <Image
            src={scape.image}
            alt={scape.name}
            fill
            sizes="(min-width:1024px) 25vw, 50vw"
            className="object-cover"
          />
        )}
      </div>
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <Link
            href={`/library/${scape.id}`}
            className="type-serif-regular block truncate text-surface-tertiary hover:underline"
          >
            {scape.name}
          </Link>
          <p className="type-label-strong-caps text-surface-tertiary/60">
            {scape.duration} • {String(scape.assetCount).padStart(2, "0")}{" "}
            ASSETS
          </p>
        </div>
        <div className="flex shrink-0">
          <Button
            type="button"
            size="icon"
            variant="ghost"
            aria-label={`Star ${scape.name}`}
            className="h-8 w-8 text-surface-tertiary"
          >
            <Star />
          </Button>
          <Button
            type="button"
            size="icon"
            variant="ghost"
            aria-label={`More options for ${scape.name}`}
            className="h-8 w-8 text-surface-tertiary"
          >
            <MoreVertical />
          </Button>
        </div>
      </div>
    </article>
  );
};
