import React, { useRef } from "react";
import { ComponentStory } from "@storybook/react";
import { LinkBanner } from "@/ui/elements/banner";
import { ToastPopup } from "@/ui/elements/toast";
import { LyMainGnb } from "@/ui/layouts/main";
import { NoticeStatus } from "@/ui/combinations/notice";
import { CardContract } from "@/ui/combinations/card";
import {
  TitleCount,
  CardTitleWrapper,
  CardTitle,
  CardTotal,
  CardTitleLink,
} from "@/ui/combinations/title";
import { Section } from "@/ui/styles/css/commons/Sample.styled";
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
} from "@/ui/combinations/card/contract/CardContract.styled";
import { PaddingContainer } from "@/ui/layouts/main";
import { VHeaderMain1 } from "@/ui/combinations/header";
import { VGnbMain1 } from "@/ui/combinations/gnb";
import { VNoticeStatus1 } from "@/ui/combinations/notice";
import { VTitleCount1, VTitleCount2 } from "@/ui/combinations/title";
import { VCardContract1, VCardContract2 } from "@/ui/combinations/card";
import { VLinkBanner1, VLinkBanner2 } from "@/ui/elements/banner";

import { HeaderWrapper } from "@/ui/combinations/header";
import {
  NoticeStatusWrapper,
  NoticeLink,
  NoticeTitle,
  NoticeStep,
} from "@/ui/combinations/notice";

import {
  LinkBannerWrapper,
  LinkBannerDescWrapper,
  LinkBannerArrow,
  LinkBannerTitle,
  LinkBannerEmp,
  LinkBannerImg,
} from "@/ui/elements/banner";

export default {
  title: "Pages/메인/나의계약",
  parameters: {
    nextRouter: {
      pathname: "/mycontract",
    },
  },
};

const Template: ComponentStory<() => JSX.Element> = (): React.ReactElement => {
  const noticeStatusRef = useRef<HTMLAnchorElement>(null);
  return (
    <>
      <LyMainGnb>
        <>
          <NoticeStatus
            wrapperProps={{ className: "mb-40" }}
            title="사고보험금"
            anchorProps={{
              ref: noticeStatusRef,
              onClick: (e) =>
                console.log(
                  "사고보험금 클릭::",
                  noticeStatusRef.current?.innerText
                ),
            }}
            step={[
              { stepName: "신청", stepPoint: false },
              { stepName: "접수", stepPoint: false },
              { stepName: "심사중", stepPoint: true },
              { stepName: "완료", stepPoint: false },
            ]}
          />

          <Section className="mb-40">
            <TitleCount
              wrapperProps={{ className: "mb-12" }}
              mainTotalTitle="보험"
              mainTotal={"3"}
              exLinkTitle="타사보험조회"
              exAnchorProps={{
                onClick: (e) =>
                  console.log("타사보험조회::", e.currentTarget.innerText),
              }}
            />
            <CardContract
              wrapperProps={{ className: "mb-20" }}
              mainTitle="월 보험료"
              mainLinkName="308,888원"
              mainAnchorProps={{ onClick: () => console.log("메인링크 클릭!") }}
              cardList={[
                {
                  itemName: "상품명",
                  itemTag: "완납",
                  itemDesc: "일시납 21,600원",
                  itemAnchorProps: {
                    onClick: () => {
                      console.log("아이템 클릭");
                    },
                  },
                },
                {
                  itemName: "상품명",
                  itemTag: "완납",
                  itemDesc: "일시납 21,600원",
                  itemAnchorProps: {
                    onClick: () => {
                      console.log("아이템 클릭");
                    },
                  },
                },
              ]}
              btnGrp={[
                {
                  btnName: "보험료 납입",
                  btnPrmy: false,
                  btnProps: {
                    onClick: () => console.log("보험료 납입!"),
                  },
                },
                {
                  btnName: "사고보험금 청구",
                  btnPrmy: true,
                  btnProps: {
                    onClick: () => console.log("사고보험금 청구!"),
                  },
                },
              ]}
            />
            <LinkBanner
              bannerTitle="보장분석 리포트"
              bannerSubtitle="나에게 부족한 보험은?"
              bannerHeight="10rem"
              bannerImgWidth="6.8rem"
              bannerImgHeight="5.2rem"
              bannerImgUrl="/images/img_banner_illust1.png"
              anchorProps={{
                onClick: () => {
                  console.log("배너 클릭!");
                },
              }}
            />
          </Section>
          <Section>
            <TitleCount
              wrapperProps={{ className: "mb-12" }}
              mainTotalTitle="대출"
              mainTotal="6"
            />
            <LinkBanner
              anchorProps={{
                className: "mb-20",
                onClick: () => console.log("대출배너 클릭!"),
              }}
              bannerHeight="16.2rem"
              bannerSubtitle={
                <>
                  김한화님 보험으로
                  <br />
                  <em>1,720 만원</em> 대출가능
                </>
              }
              arrowMsg="3분안에 대출 바로 받기"
              bannerImgWidth="5.8rem"
              bannerImgHeight="7.6rem"
              bannerImgUrl="/images/img_banner_illust2.png"
            />

            <CardContract
              wrapperProps={{ className: "mb-20" }}
              mainTitle="보험계약대출 잔액"
              mainLinkName="308,888원"
              mainAnchorProps={{
                onClick: (e) => console.log("메인링크 클릭!"),
              }}
              cardList={[
                {
                  itemName: "LIFEPLUS 오마이픽 암보험",
                  itemDesc: "일시납 21,600원",
                  itemAnchorProps: {
                    onClick: () => console.log("아이템클릭!"),
                  },
                },
                {
                  itemName: "상품명",
                  itemDesc: "일시납 21,600원",
                  itemAnchorProps: {
                    onClick: () => console.log("아이템클릭!"),
                  },
                },
              ]}
            />
            <CardContract
              wrapperProps={{ className: "mb-20" }}
              mainAnchorProps={{ onClick: () => console.log("메인링크 클릭!") }}
              mainTitle="담보대출 잔액"
              mainLinkName="308,888원"
              cardList={[
                {
                  itemName: "홈드림 모지기론",
                  itemDesc: "일시납 21,600원",
                  itemAnchorProps: {
                    onClick: () => console.log("아이템클릭!"),
                  },
                },
                {
                  itemName: "홈드림 모지기론",
                  itemDesc: "일시납 21,600원",
                  itemAnchorProps: {
                    onClick: () => console.log("아이템클릭!"),
                  },
                },
              ]}
            />
          </Section>
        </>
      </LyMainGnb>
      <ToastPopup toastMsg="김한화님, 반갑습니다." />
    </>
  );
};

export const StoryJsx = Template.bind({});
StoryJsx.storyName = "기본(리액트 컴포넌트-데이터바인딩)";

const Template2: ComponentStory<() => JSX.Element> = (): React.ReactElement => {
  return (
    <PaddingContainer>
      <VHeaderMain1 className="mb-8" />
      <VNoticeStatus1 className="mb-40" />
      <Section className="mb-40">
        <VTitleCount1 className="mb-12" />
        <VCardContract1 className="mb-20" />
        <VLinkBanner1 />
      </Section>
      <Section>
        <VTitleCount2 className="mb-12" />
        <VLinkBanner2 className="mb-20" />
        <VCardContract2 className="mb-20" />
        <VCardContract2 className="mb-20" />
      </Section>
      <VGnbMain1 />
    </PaddingContainer>
  );
};

export const StoryJsx2 = Template2.bind({});
StoryJsx2.storyName = "기본(데이터바인딩X)";

const Page3 = () => {
  return (
    <>
      <CardTitleWrapper className="mb-12">
        <CardTitle>
          메인타이틀
          <CardTotal>3</CardTotal>
        </CardTitle>

        <CardTitleLink href="#">외부링크</CardTitleLink>
      </CardTitleWrapper>
      <CardMainWrapper className="mb-20">
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
        <ButtonGroup className="mt-16">
          <Button href="#" type={"secondary"}>
            버튼명
          </Button>
          <Button href="#" type={"primary"}>
            버튼명
          </Button>
        </ButtonGroup>
      </CardMainWrapper>
    </>
  );
};
const Template3: ComponentStory<() => JSX.Element> = (): React.ReactElement => {
  return (
    <PaddingContainer>
      <HeaderWrapper className="mb-8">
        <Icon className="bell" />
        <Icon className="help" />
      </HeaderWrapper>
      <NoticeStatusWrapper className="mb-40">
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
      <Section className="mb-40">
        <CardTitleWrapper className="mb-12">
          <CardTitle>
            메인타이틀
            <CardTotal>3</CardTotal>
          </CardTitle>
          <CardTitleLink href="#">외부링크</CardTitleLink>
        </CardTitleWrapper>
        <CardMainWrapper className="mb-20">
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
        <LinkBannerWrapper href="#" height="10rem">
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
      </Section>
      <Section></Section>
    </PaddingContainer>
  );
};

export const StoryJsx3 = Template3.bind({});
StoryJsx3.storyName = "기본(styled 조합, 데이터바인딩X)";
