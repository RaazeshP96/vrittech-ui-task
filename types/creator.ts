export type CreatorTrackVariant = "asset" | "waveform";

export type CreatorTrack = {
  id: string;
  name: string;
  variant: CreatorTrackVariant;
  image?: string;
};

export type PackSound = {
  id: string;
  code: string;
  time: string;
  bpm: string;
  br: string;
  playing?: boolean;
};

export type Composition = {
  name: string;
  pieceCount: number;
  cover?: string;
  coverVideo?: string;
};
