import { MouseEvent, HTMLAttributes, ClassAttributes } from "react";

export interface IHeaderMain {
  /** wrapper */
  wrapperProps?:
    | HTMLAttributes<HTMLHeadingElement>
    | ClassAttributes<HTMLHeadingElement>;

  headerIcons?: Array<{
    iconProps?:
      | HTMLAttributes<HTMLImageElement>
      | ClassAttributes<HTMLImageElement>;
  }>;
}
