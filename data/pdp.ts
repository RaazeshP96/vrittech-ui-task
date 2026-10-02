import type { PdpAsset } from "@/types/pdp";

const REVIEW_TEXT =
  "Numquam iure nemo facere hic. Beatae earum velit neque reprehenderit possimus tempore ratione. Nihil dolor dignissimos sunt. Consequatur hic nostrum iusto et numquam. Quaerat alias ut quia. Sit asperiores qui eaque eaque.";

export const CACTACEAE: PdpAsset = {
  id: "cactaceae",
  name: "Cactaceae",
  duration: "00:00",
  sizeMb: 3.564,
  format: "OBJ",
  status: "PUBLISHED",
  downloads: [
    { month: "JAN", value: 24 },
    { month: "FEB", value: 44 },
    { month: "MAR", value: 71 },
    { month: "APR", value: 40 },
    { month: "MAY", value: 26 },
    { month: "JUN", value: 32 },
    { month: "JUL", value: 24 },
    { month: "AUG", value: 52 },
    { month: "SEP", value: 66 },
    { month: "OCT", value: 24 },
    { month: "NOV", value: 32 },
    { month: "DEC", value: 26 },
  ],
  usage: { scapes: 60, packs: 20, samples: 20 },
  reviews: [
    { id: "rev-1", rating: 3, text: REVIEW_TEXT },
    { id: "rev-2", rating: 3, text: REVIEW_TEXT },
    { id: "rev-3", rating: 3, text: REVIEW_TEXT },
  ],
};
