import { HTMLAttributes, MouseEvent } from "react";

export interface ICardContract extends HTMLAttributes<HTMLDivElement> {
  /** 카드 메인 타이틀 */
  mainTitle?: string;

  /** 카드 링크 이름 */
  mainLinkName?: string;

  /** 카드 링크 클릭 이벤트 */
  onMainLinkClick?: (e: MouseEvent<HTMLAnchorElement>) => void;

  /** 카드 리스트 */
  cardList?: Array<{
    /** 카드 아이템 이름 */
    itemName?: string;

    /** 카드 태그명 */
    itemTag?: string;

    /** 아이템 추가 설명 */
    itemDesc?: string;

    /** 아이템 클릭 이벤트 */
    onItemClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  }>;
  /** 버튼 그룹 */
  btnGrp?: Array<{
    /** 버튼이름 */
    btnName?: string;
    /** primary */
    btnPrmy?: boolean;
    /** 버튼 이벤트 */
    onBtnClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  }>;
}
