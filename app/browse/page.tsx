import { BrowseView } from "@/components/browse/browse-view";
import { getBrowseData } from "@/lib/api/libraries";

const BrowsePage = async () => {
  const data = await getBrowseData();
  return <BrowseView data={data} />;
};

export default BrowsePage;
