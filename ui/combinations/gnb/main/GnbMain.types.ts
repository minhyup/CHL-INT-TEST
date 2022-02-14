import { MouseEvent } from "react";

export interface IGnbMain {
  gnbIcons?: Array<{
    iconTitle: string;
    iconName: string;
    iconEvent: (e?: MouseEvent<HTMLAnchorElement>) => void;
  }>;
}
