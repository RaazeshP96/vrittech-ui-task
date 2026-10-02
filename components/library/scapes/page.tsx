import { ScapesView } from "@/components/library/scapes-view";
import { getScapes } from "@/lib/api/libraries";

const ScapesPage = async () => {
  const scapes = await getScapes();
  return <ScapesView scapes={scapes} />;
};

export default ScapesPage;
