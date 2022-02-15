import React from "react";
import { Icon } from "@/ui/elements/icon";
import {
  LinkBannerWrapper,
  LinkBannerDescWrapper,
  LinkBannerArrow,
  LinkBannerTitle,
  LinkBannerEmp,
  LinkBannerImg,
} from "./LinkBanner.styled";
import { ILinkBanner } from "./LinkBanner.types";

export const LinkBanner = ({
  anchorProps,
  bannerTitle,
  bannerSubtitle,
  arrowMsg,
  bannerHeight,
  bannerImgWidth,
  bannerImgHeight,
  bannerImgUrl,
}: ILinkBanner) => {
  return (
    <LinkBannerWrapper href="#" height={bannerHeight} {...anchorProps}>
      <LinkBannerDescWrapper>
        {bannerTitle && <LinkBannerTitle>{bannerTitle}</LinkBannerTitle>}
        {bannerSubtitle && <LinkBannerEmp>{bannerSubtitle}</LinkBannerEmp>}
        {arrowMsg && (
          <LinkBannerArrow>
            {arrowMsg}
            <Icon className="arrow" />
          </LinkBannerArrow>
        )}
      </LinkBannerDescWrapper>
      <LinkBannerImg
        src={bannerImgUrl}
        alt={`${bannerTitle} 배너`}
        width={bannerImgWidth}
        height={bannerImgHeight}
      />
    </LinkBannerWrapper>
  );
};
