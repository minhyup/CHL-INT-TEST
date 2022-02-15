import { HTMLAttributes, ClassAttributes } from "react";

export interface INoticeStatus {
  /** wrapper */
  wrapperProps?:
    | HTMLAttributes<HTMLDivElement>
    | ClassAttributes<HTMLDivElement>;

  /** 앵커 props(앵커, ref) */
  anchorProps?:
    | HTMLAttributes<HTMLAnchorElement>
    | ClassAttributes<HTMLAnchorElement>;

  /** 타이틀 */
  title?: string;

  /** 상태 메시지 */
  noticeMsg?: string;

  /** 사고접수 단계 */
  step?: Array<{ stepName: string; stepPoint: boolean }>;
}
