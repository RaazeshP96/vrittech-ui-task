"use client";

import { useState } from "react";
import { CompositionView } from "@/components/creator/composition-view";
import { PackPanel } from "@/components/creator/pack-panel";
import { Sheet, SheetContent } from "@/components/ui/sheet";
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

  const closePack = () => setPackOpen(false);

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

      <PackPanel
        sounds={sounds}
        playingId={playingId}
        onTogglePlay={togglePlay}
        onAdd={() => setPackOpen(false)}
        onBack={closePack}
        onClose={closePack}
        className="hidden w-[380px] shrink-0 md:flex"
      />

      <Sheet open={packOpen} onOpenChange={setPackOpen}>
        <SheetContent
          side="right"
          showCloseButton={false}
          className="w-[85%] border-none bg-surface-secondary p-0"
        >
          <PackPanel
            sounds={sounds}
            playingId={playingId}
            onTogglePlay={togglePlay}
            onAdd={() => setPackOpen(false)}
            onBack={closePack}
            onClose={closePack}
            className="flex min-h-full"
          />
        </SheetContent>
      </Sheet>
    </div>
  );
};
