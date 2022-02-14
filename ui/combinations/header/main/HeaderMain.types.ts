import { MouseEvent, HTMLAttributes } from "react";

export interface IHeaderMain extends HTMLAttributes<HTMLHeadingElement> {
  headerIcons?: Array<{
    iconName: string;
    iconEvent: (e?: MouseEvent<HTMLImageElement>) => void;
  }>;
}
