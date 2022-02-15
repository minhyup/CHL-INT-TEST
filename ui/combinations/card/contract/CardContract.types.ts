import { ClassAttributes, HTMLAttributes, MouseEvent } from "react";

export interface ICardContract {
  /** wrapper */
  wrapperProps?:
    | HTMLAttributes<HTMLDivElement>
    | ClassAttributes<HTMLDivElement>;

  /** 메인앵커 props */
  mainAnchorProps?:
    | HTMLAttributes<HTMLAnchorElement>
    | ClassAttributes<HTMLAnchorElement>;
  /** 카드 메인 타이틀 */
  mainTitle?: string;

  /** 카드 링크 이름 */
  mainLinkName?: string;

  /** 카드 리스트 */
  cardList?: Array<{
    /** 카드 아이템 이름 */
    itemName?: string;

    /** 카드 태그명 */
    itemTag?: string;

    /** 아이템 추가 설명 */
    itemDesc?: string;

    itemAnchorProps?:
      | HTMLAttributes<HTMLAnchorElement>
      | ClassAttributes<HTMLAnchorElement>;
  }>;
  /** 버튼 그룹 */
  btnGrp?: Array<{
    /** 버튼이름 */
    btnName?: string;

    /** primary */
    btnPrmy?: boolean;

    /** 버튼 props */
    btnProps?:
      | HTMLAttributes<HTMLAnchorElement>
      | ClassAttributes<HTMLAnchorElement>;
  }>;
}
