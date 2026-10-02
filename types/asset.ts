export type AssetKind = "scape" | "visual" | "sound" | "word" | "pack";

export type Asset = {
  id: string;
  kind: AssetKind;
  name: string;
  author: string;
  duration: string;
  tag?: string;
  image?: string;
  text?: string;
  color?: "yellow" | "lavender";
};

export type BrowseData = {
  scapes: Asset[];
  visuals: Asset[];
  sounds: Asset[];
  words: Asset[];
  packs: Asset[];
};

export type FilterCategory = { label: string; count: number };
