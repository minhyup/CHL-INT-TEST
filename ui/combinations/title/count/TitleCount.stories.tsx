import React, { HTMLAttributes } from "react";
import { ComponentStory } from "@storybook/react";
import { TitleCount } from "./TitleCount";
import {
  CardTitleWrapper,
  CardTitle,
  CardTotal,
  CardTitleLink,
} from "./TitleCount.styled";
import { ITitleCount } from "./TitleCount.types";

export default {
  title: "Combinations/타이틀/카운트",
  component: TitleCount,
  parameters: {
    nextRouter: {
      pathname: "/mycontract",
    },
  },
};

const Template: ComponentStory<typeof TitleCount> = (
  props: ITitleCount
): React.ReactElement => {
  return <TitleCount {...props} />;
};

export const StoryJsx = Template.bind({});
StoryJsx.storyName = "타이틀카운트";
StoryJsx.args = {
  mainTotalTitle: "보험",
  mainTotal: "3",
  exLinkTitle: "타사보험조회",
  exAnchorProps: {
    onClick: (e) => {
      e.preventDefault();
      console.log("타사보험조회::", e.currentTarget.innerText);
    },
  },
};

/**
 * 메인타이틀+카운트(외부링크O)
 * @param props
 * @returns
 */
export const VTitleCount1 = (props: HTMLAttributes<HTMLElement>) => {
  return (
    // 메인타이틀+카운트(외부링크O)
    <CardTitleWrapper {...props}>
      <CardTitle>
        메인타이틀
        <CardTotal>3</CardTotal>
      </CardTitle>
      <CardTitleLink href="#">외부링크</CardTitleLink>
    </CardTitleWrapper>
  );
};

/**
 * 메인타이틀+카운트
 * @param props
 * @returns
 */
export const VTitleCount2 = (props: HTMLAttributes<HTMLElement>) => {
  return (
    // 메인타이틀+카운트
    <CardTitleWrapper {...props}>
      <CardTitle>
        메인타이틀
        <CardTotal>3</CardTotal>
      </CardTitle>
    </CardTitleWrapper>
  );
};
