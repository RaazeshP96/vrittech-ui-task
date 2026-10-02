export type LibraryAssetFormat = "OBJ" | "JPG" | "WAV" | "MP4" | "PNG";
export type LibraryAssetKind = "3D OBJECT" | "IMAGE" | "SOUND" | "FOOTAGE";

export type LibraryAsset = {
  id: string;
  name: string;
  kind: LibraryAssetKind;
  format: LibraryAssetFormat;
  duration: string;
  image?: string;
};

export type ScapeFrame = "pink" | "orange" | "green" | "yellow" | "lavender";

export type Scape = {
  id: string;
  name: string;
  assetCount: number;
  duration: string;
  image?: string;
  frame: ScapeFrame;
};
