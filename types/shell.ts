import { ReactNode } from "react";

export type WordmarkProps = {
  className?: string;
};

export type PageShellProps = {
  topBar?: ReactNode;
  panelClassName?: string;
  children: ReactNode;
};
