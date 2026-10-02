import { LibraryView } from "@/components/library/library-view";
import { getLibraryAssets } from "@/lib/api/libraries";

const LibraryPage = async () => {
  const assets = await getLibraryAssets();
  return <LibraryView assets={assets} />;
};

export default LibraryPage;
