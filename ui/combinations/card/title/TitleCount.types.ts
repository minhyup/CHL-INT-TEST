import { HTMLAttributes, MouseEvent } from "react";

export interface ITitleCount extends HTMLAttributes<HTMLDivElement> {
  /** 카드 대분류 제목 */
  mainTotalTitle?: string;

  /** 카드 카운트 */
  mainTotal?: string;

  /** 링크 */
  onMainExLinkClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}
