"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { MenuButton } from "@/components/shell/menu-button";
import { Button } from "@/components/ui/button";
import type { PdpAsset } from "@/types/pdp";

const DownloadsChart = ({ asset }: { asset: PdpAsset }) => {
  const max = Math.max(...asset.downloads.map((d) => d.value));
  return (
    <div>
      <div className="flex items-end gap-1" aria-hidden="true">
        {asset.downloads.map((d) => (
          <div key={d.month} className="flex flex-1 flex-col items-center gap-1">
            <span className="type-label-strong-caps text-[10px] text-surface-tertiary/70">
              {d.value}
            </span>
            <div
              style={{ height: `${Math.max(8, Math.round((d.value / max) * 72))}px` }}
              className="w-full rounded-sm bg-surface-tertiary/90"
            />
            <span className="type-label-strong-caps text-[9px] text-surface-tertiary/70">
              {d.month}
            </span>
          </div>
        ))}
      </div>
      <ul className="sr-only">
        {asset.downloads.map((d) => (
          <li key={d.month}>
            {d.month}: {d.value} downloads
          </li>
        ))}
      </ul>
    </div>
  );
};

const UsagePie = ({ asset }: { asset: PdpAsset }) => {
  const { scapes, packs, samples } = asset.usage;
  const total = scapes + packs + samples;
  const scapesPct = Math.round((scapes / total) * 100);
  const packsPct = Math.round((packs / total) * 100);
  return (
    <div className="flex items-center justify-center py-2">
      <div
        role="img"
        aria-label={`Usage: ${scapesPct}% scapes, ${packsPct}% packs, ${100 - scapesPct - packsPct}% samples`}
        style={{
          background: `conic-gradient(#e8e7de 0% ${scapesPct}%, #9d9c93 ${scapesPct}% ${scapesPct + packsPct}%, #4a4443 ${scapesPct + packsPct}% 100%)`,
        }}
        className="relative aspect-square w-44 rounded-full"
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-0.5">
          <span className="type-label-strong-caps text-[9px] text-[#1e1e1e]">
            {100 - scapesPct - packsPct}% SAMPLES
          </span>
          <span className="type-label-strong-caps text-[9px] text-[#1e1e1e]">
            {packsPct}% PACKS
          </span>
          <span className="type-label-strong-caps text-[9px] text-[#1e1e1e]">
            {scapesPct}% SCAPES
          </span>
        </div>
      </div>
    </div>
  );
};

export const PdpView = ({ asset }: { asset: PdpAsset }) => {
  const router = useRouter();
  return (
    <div className="flex min-h-dvh flex-col bg-surface-neutral">
      <div className="flex items-center gap-2 p-3 md:p-4">
        <MenuButton />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-3 pt-0 md:flex-row md:gap-4 md:p-4 md:pt-0">
        {/* Hero — black stage, cactus or placeholder */}
        <section
          aria-label={`${asset.name} preview`}
          className="relative min-h-[320px] flex-1 overflow-hidden rounded-card bg-[#141112] md:min-h-[560px]"
        >
          {asset.image && (
            <Image
              src={asset.image}
              alt={asset.name}
              fill
              priority
              sizes="(min-width:768px) 60vw, 100vw"
              className="object-contain"
            />
          )}
          <Button
            type="button"
            size="icon"
            variant="ghost"
            aria-label="Back"
            onClick={() => router.back()}
            className="absolute right-3 top-3 text-white hover:text-white"
          >
            <X />
          </Button>
        </section>

        {/* Stats panel — mauve, matches frame */}
        <aside className="flex flex-col gap-5 rounded-card bg-surface p-4 md:w-[380px] md:shrink-0 md:overflow-y-auto">
          <div>
            <h1 className="type-serif-regular text-2xl text-surface-tertiary">
              {asset.name}
            </h1>
            <p className="type-label-strong-caps pt-1 text-surface-tertiary/70">
              {asset.duration} • {asset.sizeMb.toFixed(3)} MB • {asset.format}
            </p>
            <p className="type-label-strong-caps mt-3 rounded-md bg-surface-tertiary py-2 text-center text-[#1e1e1e]">
              {asset.status} ✓
            </p>
          </div>

          <section aria-label="Downloads" className="border-t border-white/10 pt-4">
            <div className="flex items-center justify-between pb-3">
              <h2 className="type-label-strong-caps text-surface-tertiary">DOWNLOADS</h2>
              <span className="type-label-strong-caps text-surface-tertiary/70">2023 ∨</span>
            </div>
            <DownloadsChart asset={asset} />
          </section>

          <section aria-label="Usage" className="border-t border-white/10 pt-4">
            <div className="flex items-center justify-between pb-1">
              <h2 className="type-label-strong-caps text-surface-tertiary">USAGE</h2>
              <span className="type-label-strong-caps text-surface-tertiary/70">2023 ∨</span>
            </div>
            <UsagePie asset={asset} />
          </section>

          <section aria-label="Reviews" className="border-t border-white/10 pt-4">
            <div className="flex items-center justify-between pb-3">
              <h2 className="type-label-strong-caps text-surface-tertiary">REVIEWS</h2>
              <span className="type-label-strong-caps text-surface-tertiary/70">NEW ∨</span>
            </div>
            <ul className="flex flex-col gap-4">
              {asset.reviews.map((review) => (
                <li key={review.id} className="border-b border-white/10 pb-4 last:border-0">
                  <p aria-label={`Rated ${review.rating} out of 4`} className="type-label-strong-caps tracking-widest text-surface-tertiary">
                    {"◆".repeat(review.rating)}
                    <span className="text-surface-tertiary/40">
                      {"◇".repeat(Math.max(0, 4 - review.rating))}
                    </span>
                  </p>
                  <p className="type-label-strong-caps pt-2 normal-case text-surface-tertiary/80">
                    {review.text}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </div>
    </div>
  );
};
