import React, { HTMLAttributes } from "react";
import { ComponentStory } from "@storybook/react";
import { NoticeStatus } from "./NoticeStatus";
import { INoticeStatus } from "./NoticeStatus.types";
import { Icon } from "@/ui/elements/icon";
import {
  NoticeStatusWrapper,
  NoticeLink,
  NoticeTitle,
  NoticeStep,
} from "./NoticeStatus.styled";

export default {
  title: "Combinations/Notice/상태",
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

/**
 * 사고 보험금 신청 상태
 * @param props
 * @returns
 */
export const VNoticeStatus1 = (props: HTMLAttributes<HTMLElement>) => {
  return (
    // 사고 보험금 신청 상태 (진행중)
    <NoticeStatusWrapper {...props}>
      <NoticeLink href="#">
        <Icon className="notice" />
        <NoticeTitle>사고보험금</NoticeTitle>
        <NoticeStep>
          <span>
            신청 - 접수 - <em>심사중</em> - 완료
          </span>
        </NoticeStep>
      </NoticeLink>
    </NoticeStatusWrapper>
  );
};

/**
 * 사고 보험금 신청 상태 (메시지)
 * @param wrapperProps
 * @returns
 */
export const VNoticeStatus2 = (props: HTMLAttributes<HTMLElement>) => {
  return (
    // 사고 보험금 신청 상태 (메시지)
    <NoticeStatusWrapper {...props}>
      <NoticeLink href="#">
        <Icon className="notice" />
        <NoticeTitle>사고보험금</NoticeTitle>
        <NoticeStep>
          <span>사고보험금 신청이 완료되었습니다.</span>
        </NoticeStep>
      </NoticeLink>
    </NoticeStatusWrapper>
  );
};
