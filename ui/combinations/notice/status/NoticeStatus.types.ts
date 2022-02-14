import { MouseEvent } from "react";

export interface INoticeStatus {
  /** 타이틀 */
  title?: string;

  /** 상태 메시지 */
  noticeMsg?: string;

  /** 사고접수 단계 */
  step?: Array<{ stepName: string; stepPoint: boolean }>;

  /** 사고접수 클릭 */
  onLinkClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}
