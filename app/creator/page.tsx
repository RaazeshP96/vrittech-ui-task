import { CreatorView } from "@/components/creator/creator-view";
import {
  getComposition,
  getCreatorTracks,
  getPackSounds,
} from "@/lib/api/creator";

const CreatorPage = async () => {
  const [composition, tracks, sounds] = await Promise.all([
    getComposition(),
    getCreatorTracks(),
    getPackSounds(),
  ]);
  return (
    <CreatorView composition={composition} tracks={tracks} sounds={sounds} />
  );
};

export default CreatorPage;
