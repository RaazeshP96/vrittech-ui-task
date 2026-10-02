import { getPdpAsset, getPdpIds } from "@/lib/api/pdp";

export const generateStaticParams = async () => {
  const ids = await getPdpIds();
  return ids.map((id) => ({ id }));
};

const PdpPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const asset = await getPdpAsset(id);
  return (
    <main className="p-6">
      <h1 className="type-serif-regular">{asset.name}</h1>
    </main>
  );
};

export default PdpPage;
