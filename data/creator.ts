import type { Composition, CreatorTrack, PackSound } from "@/types/creator";

export const COMPOSITION: Composition = {
  name: "COMPOSITION NAME",
  pieceCount: 3,
};

export const CREATOR_TRACKS: CreatorTrack[] = [
  { id: "track-1", name: "ASSET_NAME", variant: "asset" },
  { id: "track-2", name: "ASSET_NAME", variant: "waveform" },
];

export const PACK_SOUNDS: PackSound[] = Array.from({ length: 10 }, (_, i) => ({
  id: `pack-${i + 1}`,
  code: "PR_1234",
  time: "00:00",
  bpm: "000",
  br: "240",
  playing: i === 1,
}));
