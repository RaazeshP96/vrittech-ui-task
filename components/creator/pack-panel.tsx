import Image from "next/image";
import { ArrowLeft, MoreVertical, Pause, Play, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { PackSound } from "@/types/creator";

type PackPanelProps = {
  packName?: string;
  packAuthor?: string;
  packImage?: string;
  sounds: PackSound[];
  playingId: string | null;
  onTogglePlay: (id: string) => void;
  onAdd: (id: string) => void;
  onBack: () => void;
  onClose: () => void;
  className?: string;
};

export const PackPanel = ({
  packName = "Pack Name",
  packAuthor = "by Author Name",
  packImage,
  sounds,
  playingId,
  onTogglePlay,
  onAdd,
  onBack,
  onClose,
  className,
}: PackPanelProps) => {
  return (
    <aside className={cn("flex-col bg-surface-secondary", className)}>
      <div className="flex items-center justify-between p-3">
        <Button
          type="button"
          size="icon"
          variant="ghost"
          aria-label="Back to composition"
          onClick={onBack}
          className="text-surface-tertiary"
        >
          <ArrowLeft />
        </Button>
        <Button
          type="button"
          size="icon"
          variant="ghost"
          aria-label="Close pack"
          onClick={onClose}
          className="text-surface-tertiary"
        >
          <X />
        </Button>
      </div>

      <div className="px-4">
        <div className="relative mx-auto aspect-[4/3] w-40 overflow-hidden rounded-card bg-black/30">
          {packImage && (
            <Image
              src={packImage}
              alt=""
              fill
              sizes="160px"
              className="object-cover"
            />
          )}
        </div>
        <p className="type-serif-regular pt-3 text-center text-surface-tertiary">
          {packName}
        </p>
        <p className="type-serif-regular text-center italic text-surface-tertiary/70">
          {packAuthor}
        </p>
      </div>

      <div className="type-label-strong-caps grid grid-cols-[1fr_auto_auto_auto_64px] gap-2 px-4 pb-2 pt-4 text-surface-tertiary/50">
        <span>SOUND</span>
        <span>TIME</span>
        <span>BPM</span>
        <span>BR</span>
        <span />
      </div>

      <ul className="flex-1 overflow-y-auto px-2 pb-4">
        {sounds.map((sound) => {
          const playing = playingId === sound.id;
          return (
            <li
              key={sound.id}
              className={cn(
                "type-label-strong-caps grid grid-cols-[1fr_auto_auto_auto_64px] items-center gap-2 rounded-md px-2 py-2 text-surface-tertiary",
                playing && "bg-white/10",
              )}
            >
              <button
                type="button"
                onClick={() => onTogglePlay(sound.id)}
                aria-label={
                  playing ? `Pause ${sound.code}` : `Play ${sound.code}`
                }
                className="flex items-center gap-2 truncate"
              >
                {playing ? (
                  <Pause className="h-4 w-4 shrink-0" />
                ) : (
                  <Play className="h-4 w-4 shrink-0" />
                )}
                <span className="truncate">{sound.code}</span>
              </button>
              <span className="text-surface-tertiary/60">{sound.time}</span>
              <span className="text-surface-tertiary/60">{sound.bpm}</span>
              <span className="text-surface-tertiary/60">{sound.br}</span>
              <span className="flex justify-end">
                <Button
                  type="button"
                  size="icon"
                  variant="ghost"
                  aria-label={`Add ${sound.code} to composition`}
                  onClick={() => onAdd(sound.id)}
                  className="h-8 w-8 text-surface-tertiary"
                >
                  <Plus />
                </Button>
                <Button
                  type="button"
                  size="icon"
                  variant="ghost"
                  aria-label={`More options for ${sound.code}`}
                  className="h-8 w-8 text-surface-tertiary"
                >
                  <MoreVertical />
                </Button>
              </span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
