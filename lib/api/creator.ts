import { COMPOSITION, CREATOR_TRACKS, PACK_SOUNDS } from "@/data/creator";
import type { Composition, CreatorTrack, PackSound } from "@/types/creator";

export const getComposition = async (): Promise<Composition> => {
  return COMPOSITION;
};

export const getCreatorTracks = async (): Promise<CreatorTrack[]> => {
  return CREATOR_TRACKS;
};

export const getPackSounds = async (): Promise<PackSound[]> => {
  return PACK_SOUNDS;
};
