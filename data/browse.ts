import type { Asset, BrowseData, FilterCategory } from "@/types/asset";

export const SOUND_CATEGORIES: FilterCategory[] = [
  { label: "ALL", count: 2436 },
  { label: "AMBIENT", count: 135 },
  { label: "BRASS", count: 97 },
  { label: "CLASSICAL", count: 164 },
  { label: "DANCE HALL", count: 203 },
  { label: "DRONE", count: 112 },
  { label: "DRUM/BASS", count: 89 },
  { label: "ELECTRONIC", count: 176 },
  { label: "FOUND", count: 143 },
  { label: "FRAGMENTS", count: 247 },
  { label: "HIP-HOP", count: 155 },
  { label: "HOUSE", count: 107 },
  { label: "INDUSTRIAL", count: 122 },
  { label: "MELODIC", count: 169 },
  { label: "NOISE", count: 98 },
  { label: "PSYCH", count: 188 },
  { label: "RIFFS", count: 136 },
  { label: "SAMPLES", count: 95 },
  { label: "SYNTH", count: 247 },
];

export const FILTER_GROUPS = ["Visuals", "Words", "Packs", "Scapes"];

const build = (
  kind: Asset["kind"],
  count: number,
  extra: (i: number) => Partial<Asset> = () => ({}),
): Asset[] =>
  Array.from({ length: count }, (_, i) => ({
    id: `${kind}-${i + 1}`,
    kind,
    name: "Asset Name",
    author: "Author",
    duration: "00:00",
    ...extra(i),
  }));

const soundTags = SOUND_CATEGORIES.slice(1).map((c) => c.label);

export const BROWSE_DATA: BrowseData = {
  scapes: build("scape", 4, (i) =>
    i === 0 ? { video: "/browse/videos/video.mp4" } : {},
  ),
  visuals: [
    {
      id: "visual-1",
      kind: "visual",
      name: "Asset Name",
      author: "Author",
      duration: "00:00",
      image: "/browse/images/Image-3.png",
    },
    {
      id: "visual-2",
      kind: "visual",
      name: "Asset Name",
      author: "Author",
      duration: "00:00",
      image: "/browse/images/Image-2.png",
    },
    {
      id: "visual-3",
      kind: "visual",
      name: "Asset Name",
      author: "Author",
      duration: "00:00",
      image: "/browse/images/Image-1.png",
    },
    {
      id: "visual-4",
      kind: "visual",
      name: "Asset Name",
      author: "Author",
      duration: "00:00",
      image: "/browse/images/Image.png",
    },
  ],
  sounds: build("sound", 18, (i) => ({ tag: soundTags[i % soundTags.length] })),
  words: build("word", 2, (i) => ({
    text: "Enim rerum et esse. Nihil quis qui et esse non ea quae ea.",
    color: i === 0 ? "yellow" : "lavender",
  })),
  packs: [
    {
      id: "pack-1",
      kind: "pack",
      name: "Asset Name",
      author: "Author",
      duration: "00:00",
      image: "/browse/images/Image-3.png",
    },
    {
      id: "pack-2",
      kind: "pack",
      name: "Asset Name",
      author: "Author",
      duration: "00:00",
      image: "/browse/images/Image-1.png",
    },
    {
      id: "pack-3",
      kind: "pack",
      name: "Asset Name",
      author: "Author",
      duration: "00:00",
      image: "/browse/images/Image-2.png",
    },
    {
      id: "pack-4",
      kind: "pack",
      name: "Asset Name",
      author: "Author",
      duration: "00:00",
      image: "/browse/images/Image.png",
    },
  ],
};
