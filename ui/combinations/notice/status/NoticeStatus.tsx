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
  title,
  noticeMsg,
  step,
  onLinkClick,
}: INoticeStatus) => {
  return (
    <NoticeStatusWrapper className="mb-40">
      <NoticeLink href="#" onClick={onLinkClick}>
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
