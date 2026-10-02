import Image from "next/image";
import { MoreVertical, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { LibraryAsset } from "@/types/library";

type AssetRowProps = {
  asset: LibraryAsset;
};

export const AssetRow = ({ asset }: AssetRowProps) => {
  return (
    <li className="flex items-center gap-3 border-b border-white/10 py-3">
      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md bg-surface-neutral">
        {asset.image && (
          <Image
            src={asset.image}
            alt=""
            fill
            sizes="48px"
            className="object-cover"
          />
        )}
      </div>
      <div className="min-w-0 flex-1">
        <p className="type-serif-regular truncate text-surface-tertiary">
          {asset.name}
        </p>
        <p className="type-label-strong-caps text-surface-tertiary/60">
          {asset.kind}
        </p>
      </div>
      <span className="type-label-strong-caps hidden text-surface-tertiary/60 sm:block">
        {asset.duration}
      </span>
      <span className="type-label-strong-caps hidden text-surface-tertiary/60 md:block">
        {asset.format}
      </span>
      <Button
        type="button"
        size="icon"
        variant="ghost"
        aria-label={`Star ${asset.name}`}
        className="text-surface-tertiary hover:text-surface-tertiary"
      >
        <Star />
      </Button>
      <Button
        type="button"
        size="icon"
        variant="ghost"
        aria-label={`More options for ${asset.name}`}
        className="text-surface-tertiary hover:text-surface-tertiary"
      >
        <MoreVertical />
      </Button>
    </li>
  );
};
