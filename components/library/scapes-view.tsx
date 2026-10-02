"use client";

import { useState } from "react";
import { LayoutGrid, List } from "lucide-react";
import { AssetRow } from "@/components/library/asset-row";
import { ScapeCard } from "@/components/library/scape-card";
import { MenuButton } from "@/components/shell/menu-button";
import { PageShell } from "@/components/shell/page-shell";
import { Button } from "@/components/ui/button";
import type { LibraryAsset } from "@/types/library";
import type { Scape } from "@/types/library";

type ScapesViewProps = {
  scapes: Scape[];
};

export const ScapesView = ({ scapes }: ScapesViewProps) => {
  const [view, setView] = useState<"grid" | "list">("grid");

  const asRows: LibraryAsset[] = scapes.map((s) => ({
    id: s.id,
    name: s.name,
    kind: "3D OBJECT",
    format: "OBJ",
    duration: s.duration,
    image: s.image,
  }));

  return (
    <PageShell topBar={<MenuButton />} panelClassName="bg-surface-secondary">
      <div className="flex items-center justify-between">
        <h1 className="type-serif-regular text-surface-tertiary">
          Library / Scapes
        </h1>
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

      {view === "grid" ? (
        <ul className="grid grid-cols-2 gap-x-4 gap-y-6 pt-4 lg:grid-cols-4">
          {scapes.map((scape) => (
            <li key={scape.id}>
              <ScapeCard scape={scape} />
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          {asRows.map((asset) => (
            <AssetRow key={asset.id} asset={asset} />
          ))}
        </ul>
      )}
    </PageShell>
  );
};
