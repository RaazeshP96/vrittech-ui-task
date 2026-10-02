import Image from "next/image";
import {
  MoreVertical,
  Pause,
  Play,
  Plus,
  SkipBack,
  SkipForward,
} from "lucide-react";
import { MenuButton } from "@/components/shell/menu-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Composition, CreatorTrack } from "@/types/creator";

type CompositionViewProps = {
  composition: Composition;
  tracks: CreatorTrack[];
  playingId: string | null;
  onTogglePlay: (id: string) => void;
  onAdd: () => void;
  onOpenPack: () => void;
  className?: string;
};

export const CompositionView = ({
  composition,
  tracks,
  playingId,
  onTogglePlay,
  onAdd,
  onOpenPack,
  className,
}: CompositionViewProps) => {
  return (
    <section className={cn("flex min-h-dvh flex-col", className)}>
      <div className="relative h-64 shrink-0 overflow-hidden bg-[#7a3a2e] md:h-80">
        {composition.coverVideo ? (
          <video
            src={composition.coverVideo}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : composition.cover ? (
          <Image
            src={composition.cover}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        ) : null}
        <div className="absolute left-3 top-3 md:left-4 md:top-4">
          <MenuButton />
        </div>
        <div className="absolute bottom-3 left-4 md:bottom-4">
          <p className="type-label-strong-caps text-white">
            {composition.name}
          </p>
          <p className="type-label-strong-caps text-white/70">
            {String(composition.pieceCount).padStart(2, "0")} PIECES
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 bg-surface-neutral p-3 md:p-4">
        <ul className="flex flex-col gap-2">
          {tracks.map((track) => {
            const playing = playingId === track.id;
            return (
              <li
                key={track.id}
                className="flex items-center gap-2 rounded-card bg-white/60 p-2"
              >
                {track.variant === "asset" ? (
                  <>
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md bg-surface-neutral">
                      {track.image && (
                        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md bg-white/40">
                          <Image
                            src={track.image}
                            alt=""
                            fill
                            sizes="48px"
                            className="object-cover"
                          />
                        </div>
                      )}
                    </div>
                    <span className="type-label-strong-caps flex-1 truncate">
                      {track.name}
                    </span>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => onTogglePlay(track.id)}
                      aria-label={
                        playing ? `Pause ${track.name}` : `Play ${track.name}`
                      }
                      className="flex h-12 flex-1 items-center gap-2 overflow-hidden rounded-md bg-white/70 px-3"
                    >
                      <span
                        aria-hidden="true"
                        className="h-6 flex-1 rounded bg-black/10"
                      />
                      <span className="type-label-strong-caps truncate">
                        {track.name}
                      </span>
                    </button>
                  </>
                )}
                <Button
                  type="button"
                  size="icon"
                  variant="ghost"
                  aria-label={
                    playing ? `Pause ${track.name}` : `Play ${track.name}`
                  }
                  onClick={() => onTogglePlay(track.id)}
                >
                  {playing ? <Pause /> : <Play />}
                </Button>
                <Button
                  type="button"
                  size="icon"
                  variant="ghost"
                  aria-label={`More options for ${track.name}`}
                >
                  <MoreVertical />
                </Button>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={onOpenPack}
          aria-label="Add asset from pack"
          className="flex h-16 items-center justify-center rounded-card border border-dashed border-black/20 bg-black/5"
        >
          <Plus />
        </button>
        <button
          type="button"
          onClick={onAdd}
          className="type-label-strong-caps rounded-card bg-black/10 py-2"
        >
          Add blank piece
        </button>

        <div className="mt-auto flex justify-center gap-2 pt-4">
          <Button type="button" size="icon" aria-label="Previous">
            <SkipBack />
          </Button>
          <Button
            type="button"
            size="icon"
            aria-label={playingId ? "Pause" : "Play"}
            onClick={() => onTogglePlay(tracks[0]?.id ?? "track-1")}
          >
            {playingId ? <Pause /> : <Play />}
          </Button>
          <Button type="button" size="icon" aria-label="Next">
            <SkipForward />
          </Button>
        </div>
      </div>
    </section>
  );
};
