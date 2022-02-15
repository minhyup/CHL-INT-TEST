import React from "react";
import { ComponentStory } from "@storybook/react";
import { NoticeStatus } from "./NoticeStatus";
import { INoticeStatus } from "./NoticeStatus.types";

export default {
  title: "Combinations/Notice-상태",
  component: NoticeStatus,
  parameters: {
    nextRouter: {
      pathname: "/mycontract",
    },
  },
};

const Template: ComponentStory<typeof NoticeStatus> = (
  props: INoticeStatus
): React.ReactElement => {
  return <NoticeStatus {...props} />;
};

export const StoryJsx = Template.bind({});
StoryJsx.storyName = "기본";
StoryJsx.args = {
  title: "사고보험금",
  anchorProps: {
    onClick: (e) => {
      e.preventDefault();
      console.log("사고보험금 클릭!!");
    },
  },
  step: [
    { stepName: "신청", stepPoint: false },
    { stepName: "접수", stepPoint: false },
    { stepName: "심사중", stepPoint: true },
    { stepName: "완료", stepPoint: false },
  ],
};
