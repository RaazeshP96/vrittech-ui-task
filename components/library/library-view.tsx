"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  LayoutGrid,
  List,
  SlidersHorizontal,
} from "lucide-react";
import Image from "next/image";
import { MenuButton } from "@/components/shell/menu-button";
import { PageShell } from "@/components/shell/page-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { LibraryViewProps } from "@/types/library";
import { AssetRow } from "./asset-row";

export const LibraryView = ({ assets }: LibraryViewProps) => {
  const [query, setQuery] = useState("");
  const [view, setView] = useState<"list" | "grid">("list");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return assets;
    return assets.filter((a) =>
      `${a.name} ${a.kind} ${a.format}`.toLowerCase().includes(q),
    );
  }, [assets, query]);

  return (
    <PageShell topBar={<MenuButton />} panelClassName="bg-surface-secondary">
      <div className="grid gap-6 md:grid-cols-[240px_1fr]">
        <div className="space-y-4">
          <h1 className="type-serif-regular text-surface-tertiary">Library</h1>
          <div className="flex gap-2">
            <Input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="SEARCH YOUR LIBRARY"
              aria-label="Search your library"
              className="border-transparent bg-white/10 text-surface-tertiary type-label-strong-caps placeholder:text-surface-tertiary/50"
            />
            <Button
              type="button"
              size="icon"
              aria-label="Filter"
              className="shrink-0 bg-white/10 text-surface-tertiary hover:bg-white/20"
            >
              <SlidersHorizontal />
            </Button>
          </div>

          <nav aria-label="Library sections" className="flex flex-col">
            <Link
              href="/library/scapes"
              className="flex items-center justify-between border-b border-white/10 py-3 type-label-strong-caps text-surface-tertiary"
            >
              SCAPES <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              href="/library"
              className="flex items-center justify-between border-b border-white/10 py-3 type-label-strong-caps text-surface-tertiary"
            >
              PACKS <ChevronRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <h2 className="type-serif-regular text-surface-tertiary">
              All Assets
            </h2>
            <div className="flex gap-1">
              <Button
                type="button"
                size="icon"
                variant="ghost"
                aria-label="Grid view"
                aria-pressed={view === "grid"}
                onClick={() => setView("grid")}
                className="text-surface-tertiary aria-pressed:bg-white/10"
              >
                <LayoutGrid />
              </Button>
              <Button
                type="button"
                size="icon"
                variant="ghost"
                aria-label="List view"
                aria-pressed={view === "list"}
                onClick={() => setView("list")}
                className="text-surface-tertiary aria-pressed:bg-white/10"
              >
                <List />
              </Button>
            </div>
          </div>

          {filtered.length === 0 ? (
            <p className="type-label-strong-caps py-8 text-surface-tertiary/60">
              No assets match your search.
            </p>
          ) : view === "list" ? (
            <ul>
              {filtered.map((asset) => (
                <AssetRow key={asset.id} asset={asset} />
              ))}
            </ul>
          ) : (
            <ul className="grid grid-cols-2 gap-4 pt-4 lg:grid-cols-3">
              {filtered.map((asset) => (
                <li key={asset.id} className="flex flex-col gap-2">
                  <div className="relative aspect-square overflow-hidden rounded-card bg-surface-neutral">
                    {asset.image && (
                      <Image
                        src={asset.image}
                        alt={asset.name}
                        fill
                        sizes="(min-width:1024px) 33vw, 50vw"
                        className="object-cover"
                      />
                    )}
                  </div>
                  <p className="type-serif-regular truncate text-surface-tertiary">
                    {asset.name}
                  </p>
                  <p className="type-label-strong-caps text-surface-tertiary/60">
                    {asset.kind}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </PageShell>
  );
};
