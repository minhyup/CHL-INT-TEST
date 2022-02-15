import React from "react";
import { ComponentStory } from "@storybook/react";
import { LinkBanner } from "./LinkBanner";
import { ILinkBanner } from "./LinkBanner.types";

export default {
  title: "Elements/링크배너",
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
