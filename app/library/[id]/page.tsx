import { PdpView } from "@/components/pdp/pdp-view";
import { getPdpAsset, getPdpIds } from "@/lib/api/pdp";

export const generateStaticParams = async () => {
  const ids = await getPdpIds();
  return ids.map((id) => ({ id }));
};

const PdpPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const asset = await getPdpAsset(id);
  return <PdpView asset={asset} />;
};

export default PdpPage;
