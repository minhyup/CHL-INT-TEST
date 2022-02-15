import React from "react";
import { Icon } from "@/ui/elements/icon";
import { INoticeStatus } from "./NoticeStatus.types";
import {
  NoticeStatusWrapper,
  NoticeLink,
  NoticeTitle,
  NoticeStep,
} from "./NoticeStatus.styled";

export const NoticeStatus = ({
  wrapperProps,
  anchorProps,
  title,
  noticeMsg,
  step,
}: INoticeStatus) => {
  return (
    <NoticeStatusWrapper className="mb-40" {...wrapperProps}>
      <NoticeLink href="#" {...anchorProps}>
        <Icon className="notice" />
        <NoticeTitle>{title}</NoticeTitle>
        <NoticeStep>
          <span>
            {step?.reduce((previousValue: any, currentValue) => {
              return currentValue.stepPoint ? (
                <>
                  {previousValue}-<em>{currentValue.stepName}</em>
                </>
              ) : (
                <>
                  {previousValue}
                  {`${previousValue ? "-" : ""}`}
                  {currentValue.stepName}
                </>
              );
            }, "")}
          </span>
        </NoticeStep>
      </NoticeLink>
    </NoticeStatusWrapper>
  );
};
