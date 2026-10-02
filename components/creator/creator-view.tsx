"use client";

import { useState } from "react";
import { CompositionView } from "@/components/creator/composition-view";
import { Button } from "@/components/ui/button";
import type { Composition, CreatorTrack, PackSound } from "@/types/creator";

type CreatorViewProps = {
  composition: Composition;
  tracks: CreatorTrack[];
  sounds: PackSound[];
};

export const CreatorView = ({
  composition,
  tracks,
  sounds,
}: CreatorViewProps) => {
  const [playingId, setPlayingId] = useState<string | null>(
    () => sounds.find((s) => s.playing)?.id ?? null,
  );
  const [packOpen, setPackOpen] = useState(false);

  const togglePlay = (id: string) => {
    setPlayingId((current) => (current === id ? null : id));
  };

  return (
    <div className="flex min-h-dvh bg-surface-neutral">
      <CompositionView
        composition={composition}
        tracks={tracks}
        playingId={playingId}
        onTogglePlay={togglePlay}
        onAdd={() => setPackOpen(true)}
        onOpenPack={() => setPackOpen(true)}
        className="flex-1"
      />
      {packOpen ? (
        <aside className="fixed inset-y-0 right-0 z-50 hidden w-[380px] flex-col gap-2 overflow-y-auto bg-surface-secondary p-4 md:flex">
          <p className="type-serif-regular text-surface-tertiary">
            Pack panel lands in C3
          </p>
          <p className="type-label-strong-caps text-surface-tertiary/60">
            {sounds.length} sounds loaded
          </p>
          <Button
            type="button"
            variant="ghost"
            onClick={() => setPackOpen(false)}
            className="text-surface-tertiary"
          >
            Close placeholder
          </Button>
        </aside>
      ) : null}
    </div>
  );
};
