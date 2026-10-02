import { BROWSE_DATA } from "@/data/browse";
import { LIBRARY_ASSETS } from "@/data/library";
import { CACTACEAE } from "@/data/pdp";
import { SCAPES } from "@/data/scapes";
import type { PdpAsset } from "@/types/pdp";

export const getPdpAsset = async (id: string): Promise<PdpAsset> => {
  const lib = LIBRARY_ASSETS.find((a) => a.id === id);
  if (lib)
    return { ...CACTACEAE, id: lib.id, name: "Asset Name", image: lib.image };

  const scape = SCAPES.find((s) => s.id === id);
  if (scape)
    return {
      ...CACTACEAE,
      id: scape.id,
      name: "Scape Name",
      image: scape.image,
    };

  const visual = BROWSE_DATA.visuals.find((v) => v.id === id);
  if (visual)
    return {
      ...CACTACEAE,
      id: visual.id,
      name: "Asset Name",
      image: visual.image,
    };

  const pack = BROWSE_DATA.packs.find((p) => p.id === id);
  if (pack)
    return { ...CACTACEAE, id: pack.id, name: "Asset Name", image: pack.image };

  return CACTACEAE;
};

export const getPdpIds = async (): Promise<string[]> => {
  return [
    ...LIBRARY_ASSETS.map((a) => a.id),
    ...SCAPES.map((s) => s.id),
    ...BROWSE_DATA.visuals.map((v) => v.id),
    ...BROWSE_DATA.packs.map((p) => p.id),
    CACTACEAE.id,
  ];
};
