import { BROWSE_DATA } from "@/data/browse";
import { LIBRARY_ASSETS } from "@/data/library";
import { SCAPES } from "@/data/scapes";
import type { BrowseData } from "@/types/asset";
import type { LibraryAsset, Scape } from "@/types/library";

export const getBrowseData = async (): Promise<BrowseData> => {
  return BROWSE_DATA;
};

export const getLibraryAssets = async (): Promise<LibraryAsset[]> => {
  return LIBRARY_ASSETS;
};

export const getScapes = async (): Promise<Scape[]> => {
  return SCAPES;
};
