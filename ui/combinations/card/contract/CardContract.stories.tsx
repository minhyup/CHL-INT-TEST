import React, { HTMLAttributes } from "react";
import { ComponentStory } from "@storybook/react";
import { Icon } from "@/ui/elements/icon";
import {
  CardMainWrapper,
  CardMainTitle,
  CardMainDesc,
  CardMainLink,
  CardListWrapper,
  CardListItem,
  CardListRow,
  CardListRowTitle,
  CardListRowStatus,
  CardListDesc,
  ButtonGroup,
  Button,
} from "./CardContract.styled";
import { CardContract } from "./CardContract";
import { ICardContract } from "./CardContract.types";

export default {
  title: "Combinations/카드/계약",
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

/**
 * 나의 계약 카드
 */
export const VCardContract1 = (props: HTMLAttributes<HTMLElement>) => {
  return (
    // 나의 계약 카드
    <CardMainWrapper {...props}>
      <CardMainTitle>타이틀</CardMainTitle>
      <CardMainLink href="#">
        <CardMainDesc>링크명</CardMainDesc>
        <Icon className="arrow" />
      </CardMainLink>
      <CardListWrapper>
        <li>
          <CardListItem href="#">
            <CardListRow>
              <CardListRowTitle>타이틀</CardListRowTitle>
              <CardListRowStatus>완납</CardListRowStatus>
              <Icon className="arrow" />
            </CardListRow>
            <CardListDesc>일시납</CardListDesc>
          </CardListItem>
        </li>
        <li>
          <CardListItem href="#">
            <CardListRow>
              <CardListRowTitle>타이틀</CardListRowTitle>
              <CardListRowStatus>완납</CardListRowStatus>
              <Icon className="arrow" />
            </CardListRow>
            <CardListDesc>일시납</CardListDesc>
          </CardListItem>
        </li>
      </CardListWrapper>
      <ButtonGroup className="mt-16">
        <Button href="#" type={"secondary"}>
          버튼명
        </Button>
        <Button href="#" type={"primary"}>
          버튼명
        </Button>
      </ButtonGroup>
    </CardMainWrapper>
  );
};

/**
 *  계약 카드 (버튼 그룹이 없는 경우)
 */
export const VCardContract2 = (props: HTMLAttributes<HTMLElement>) => {
  return (
    // 계약 카드 (버튼 그룹이 없는 경우)
    <CardMainWrapper {...props}>
      <CardMainTitle>타이틀</CardMainTitle>
      <CardMainLink href="#">
        <CardMainDesc>링크명</CardMainDesc>
        <Icon className="arrow" />
      </CardMainLink>
      <CardListWrapper>
        <li>
          <CardListItem href="#">
            <CardListRow>
              <CardListRowTitle>타이틀</CardListRowTitle>
              <CardListRowStatus>완납</CardListRowStatus>
              <Icon className="arrow" />
            </CardListRow>
            <CardListDesc>일시납</CardListDesc>
          </CardListItem>
        </li>
      </CardListWrapper>
    </CardMainWrapper>
  );
};
