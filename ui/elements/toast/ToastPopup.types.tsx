import { HTMLAttributes, ClassAttributes } from "react";
export interface IToastPopup {
  wrapperProps?:
    | HTMLAttributes<HTMLDivElement>
    | ClassAttributes<HTMLDivElement>;
  /** 토스트 팝업 메시지 */
  toastMsg: string;
}
