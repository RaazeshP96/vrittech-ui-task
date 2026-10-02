import { BROWSE_DATA } from "@/data/browse";
import type { BrowseData } from "@/types/asset";

export const getBrowseData = async (): Promise<BrowseData> => {
  return BROWSE_DATA;
};
