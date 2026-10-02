"use client";

import { useState, type ReactNode } from "react";
import { Play, SlidersHorizontal } from "lucide-react";
import { AssetCard } from "@/components/browse/asset-card";
import { FilterPanel } from "@/components/browse/filter-panel";
import { PackCard } from "@/components/browse/pack-card";
import { MenuButton } from "@/components/shell/menu-button";
import { PageShell } from "@/components/shell/page-shell";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import type { Asset, BrowseData } from "@/types/asset";

type SectionProps = { title: string; children: ReactNode };

const Section = ({ title, children }: SectionProps) => {
  return (
    <section className="space-y-3 py-4">
      <h2 className="type-serif-regular text-ink">{title}</h2>
      {children}
    </section>
  );
};

const CardRow = ({ items }: { items: Asset[] }) => {
  return (
    <Carousel opts={{ align: "start", dragFree: true }}>
      <CarouselContent className="-ml-3">
        {items.map((item) => (
          <CarouselItem key={item.id} className="basis-auto pl-3">
            <AssetCard asset={item} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

const SoundRow = ({ sound }: { sound: Asset }) => {
  return (
    <li className="flex items-center gap-3 border-b py-2">
      <Button
        type="button"
        size="icon"
        variant="ghost"
        aria-label={`Play ${sound.name}`}
      >
        <Play />
      </Button>
      <span className="type-label-strong-caps flex-1 truncate text-ink">
        {sound.name}
      </span>
      <span className="type-label-strong-caps text-ink-secondary">
        {sound.tag}
      </span>
    </li>
  );
};

export const BrowseView = ({ data }: { data: BrowseData }) => {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [category, setCategory] = useState("ALL");

  const sounds =
    category === "ALL"
      ? data.sounds.slice(0, 9)
      : data.sounds.filter((sound) => sound.tag === category);

  return (
    <PageShell
      topBar={
        <>
          <MenuButton />
          <Button
            type="button"
            size="icon"
            aria-label="Filter"
            aria-expanded={filtersOpen}
            onClick={() => setFiltersOpen((open) => !open)}
            className="bg-surface-tertiary text-icon hover:bg-surface-tertiary-hover"
          >
            <SlidersHorizontal />
          </Button>
          <Input
            type="search"
            placeholder="SEARCH"
            aria-label="Search"
            className="hidden h-10 w-56 border-transparent bg-surface-tertiary type-label-strong-caps md:block"
          />
        </>
      }
    >
      {filtersOpen && (
        <FilterPanel
          category={category}
          onCategoryChange={setCategory}
          className="absolute left-3 top-3 z-20"
        />
      )}

      <Section title="Featured Scapes">
        <CardRow items={data.scapes} />
      </Section>

      <Section title="New Visuals">
        <CardRow items={data.visuals} />
      </Section>

      <Section title="Trending Sounds">
        {sounds.length === 0 ? (
          <p className="type-label-strong-caps text-ink-secondary">
            No sounds in this category yet.
          </p>
        ) : (
          <ul className="grid gap-x-6 md:grid-cols-2 lg:grid-cols-3">
            {sounds.map((sound) => (
              <SoundRow key={sound.id} sound={sound} />
            ))}
          </ul>
        )}
      </Section>

      <Section title="Featured Words">
        <div className="grid gap-3 md:grid-cols-2">
          {data.words.map((word) => (
            <AssetCard key={word.id} asset={word} className="w-full" />
          ))}
        </div>
      </Section>

      <Section title="Featured Packs">
        <div className="grid gap-3 sm:grid-cols-2">
          {data.packs.map((pack, i) => (
            <PackCard key={pack.id} pack={pack} flip={i % 2 === 1} />
          ))}
        </div>
      </Section>
    </PageShell>
  );
};
