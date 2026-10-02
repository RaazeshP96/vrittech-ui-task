export type PdpDownloadPoint = { month: string; value: number };

export type PdpReview = { id: string; rating: number; text: string };

export type PdpAsset = {
  id: string;
  name: string;
  duration: string;
  sizeMb: number;
  format: string;
  status: string;
  image?: string;
  downloads: PdpDownloadPoint[];
  usage: { scapes: number; packs: number; samples: number };
  reviews: PdpReview[];
};
