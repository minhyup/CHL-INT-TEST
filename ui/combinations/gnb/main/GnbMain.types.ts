import { HTMLAttributes, ClassAttributes } from "react";

export interface IGnbMain {
  /** 래퍼 */
  wrapperProps?: HTMLAttributes<HTMLElement> | ClassAttributes<HTMLElement>;

  /** Gnb 높이 */
  height?: string;

  /** GNB 아이콘 리스트 */
  gnbIcons?: Array<{
    /** 아이콘 타이틀 */
    iconTitle: string;

    /** 아이콘 이름 */
    iconName: string;

    /** 아이콘 앵커 */
    iconAnchorProps?:
      | HTMLAttributes<HTMLAnchorElement>
      | ClassAttributes<HTMLAnchorElement>;
  }>;
}
