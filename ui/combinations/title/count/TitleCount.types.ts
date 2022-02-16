import { HTMLAttributes, ClassAttributes, MouseEvent } from "react";

export interface ITitleCount {
  /** wrapper */
  wrapperProps?:
    | HTMLAttributes<HTMLDivElement>
    | ClassAttributes<HTMLDivElement>;

  /** 타사보험 링크 props */
  exAnchorProps?:
    | HTMLAttributes<HTMLAnchorElement>
    | ClassAttributes<HTMLAnchorElement>;

  /** 카드 대분류 제목 */
  mainTotalTitle?: string;

  /** 카드 카운트 */
  mainTotal?: string;

  // /** 링크 */
  exLinkTitle?: string;
}
