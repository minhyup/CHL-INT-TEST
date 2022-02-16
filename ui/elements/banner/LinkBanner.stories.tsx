import React, { HTMLAttributes } from "react";
import { ComponentStory } from "@storybook/react";
import { LinkBanner } from "./LinkBanner";
import { ILinkBanner } from "./LinkBanner.types";
import {
  LinkBannerWrapper,
  LinkBannerDescWrapper,
  LinkBannerArrow,
  LinkBannerTitle,
  LinkBannerEmp,
  LinkBannerImg,
} from "./LinkBanner.styled";
import { Icon } from "@/ui/elements/icon";

export default {
  title: "Elements/배너/링크배너",
  component: LinkBanner,
  parameters: {
    nextRouter: {
      pathname: "/mycontract",
    },
  },
};

const Template: ComponentStory<typeof LinkBanner> = (
  props: ILinkBanner
): React.ReactElement => {
  return <LinkBanner {...props} />;
};

export const StoryJsx = Template.bind({});
StoryJsx.storyName = "기본";
StoryJsx.args = {
  bannerTitle: "보장분석 리포트",
  bannerSubtitle: "나에게 부족한 보험은?",
  bannerHeight: "10rem",
  bannerImgWidth: "6.8rem",
  bannerImgHeight: "5.2rem",
  bannerImgUrl: "/images/img_banner_illust1.png",
  anchorProps: {
    onClick: (e) => {
      e.preventDefault();
      console.log("배너 클릭!");
    },
  },
};

/**
 * 배너타입1(화살표 없는 타입)
 * @param props
 * @returns
 */
export const VLinkBanner1 = (props: HTMLAttributes<HTMLElement>) => {
  return (
    // 배너타입1(화살표 없는 타입)
    <LinkBannerWrapper href="#" height="10rem" {...props}>
      <LinkBannerDescWrapper>
        <LinkBannerTitle>보장분석 리포트</LinkBannerTitle>
        <LinkBannerEmp>나에게 부족한 보험은?</LinkBannerEmp>
      </LinkBannerDescWrapper>
      <LinkBannerImg
        src="/images/img_banner_illust1.png"
        alt={`배너명`}
        width={"6.8rem"}
        height={"5.2rem"}
      />
    </LinkBannerWrapper>
  );
};

/**
 * 배너타입2(화살표 있는 타입)
 * @param props
 * @returns
 */
export const VLinkBanner2 = (props: HTMLAttributes<HTMLElement>) => {
  return (
    // 배너타입2(화살표 있는 타입)
    <LinkBannerWrapper href="#" height="16.2rem" {...props}>
      <LinkBannerDescWrapper>
        <LinkBannerEmp>
          김한화님 보험으로
          <br />
          <em>1,720 만원</em> 대출가능
        </LinkBannerEmp>
        <LinkBannerArrow>
          3분안에 대출 바로 받기
          <Icon className="arrow" />
        </LinkBannerArrow>
      </LinkBannerDescWrapper>
      <LinkBannerImg
        src="/images/img_banner_illust2.png"
        alt={`배너명`}
        width={"5.8rem"}
        height={"7.6rem"}
      />
    </LinkBannerWrapper>
  );
};
