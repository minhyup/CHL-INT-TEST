import React, { HTMLAttributes, ClassAttributes } from "react";

export interface ILinkBanner {
  /** wrapper */
  anchorProps?:
    | HTMLAttributes<HTMLAnchorElement>
    | ClassAttributes<HTMLAnchorElement>;

  /** 배너 메인 타이틀 */
  bannerTitle?: string;

  /** 배너 서브 타이틀 */
  bannerSubtitle?: React.ReactNode;

  /** 화살표 메시지 */
  arrowMsg?: string;

  /** 배너 높이 */
  bannerHeight: string;

  /** 배너 이미지 너비 */
  bannerImgWidth: string;

  /** 배너 이미지 높이 */
  bannerImgHeight: string;

  /** 배너 이미지 경로 */
  bannerImgUrl: string;
}
