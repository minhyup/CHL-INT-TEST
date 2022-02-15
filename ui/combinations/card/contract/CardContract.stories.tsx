import React from "react";
import { ComponentStory } from "@storybook/react";
import { CardContract } from "./CardContract";
import { ICardContract } from "./CardContract.types";

export default {
  title: "Combinations/카드-계약",
  component: CardContract,
  parameters: {
    nextRouter: {
      pathname: "/mycontract",
    },
  },
};

const Template: ComponentStory<typeof CardContract> = (
  props: ICardContract
): React.ReactElement => {
  return <CardContract {...props} />;
};

export const StoryJsx = Template.bind({});
StoryJsx.storyName = "계약기본";
StoryJsx.args = {
  mainTitle: "월 보험료",
  mainLinkName: "308,888원",
  mainAnchorProps: { onClick: () => console.log("메인링크 클릭!") },
  cardList: [
    {
      itemName: "상품명",
      itemTag: "완납",
      itemDesc: "일시납 21,600원",
      itemAnchorProps: {
        onClick: (e) => {
          e.preventDefault();
          console.log("아이템 클릭");
        },
      },
    },
    {
      itemName: "상품명",
      itemTag: "완납",
      itemDesc: "일시납 21,600원",
      itemAnchorProps: {
        onClick: (e) => {
          e.preventDefault();
          console.log("아이템 클릭");
        },
      },
    },
  ],
  btnGrp: [
    {
      btnName: "보험료 납입",
      btnPrmy: false,
      btnProps: {
        onClick: (e) => {
          e.preventDefault();
          console.log("보험료 납입!");
        },
      },
    },
    {
      btnName: "사고보험금 청구",
      btnPrmy: true,
      btnProps: {
        onClick: (e) => {
          e.preventDefault();
          console.log("사고보험금 청구!");
        },
      },
    },
  ],
};
