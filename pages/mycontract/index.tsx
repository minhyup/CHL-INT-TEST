import React from "react";
import Head from "next/head";
import { LinkBanner } from "@/ui/elements/banner";
import { ToastPopup } from "@/ui/elements/toast";
import { LyMainGnb } from "@/ui/layouts/main";
import { NoticeStatus } from "@/ui/combinations/notice";
import { CardContract } from "@/ui/combinations/card";
import { TitleCount } from "@/ui/combinations/card";

export default function MyContractPage(): React.ReactElement {
  return (
    <>
      <Head>
        <title>나의 계약</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LyMainGnb>
        <>
          <NoticeStatus
            title="사고보험금"
            onLinkClick={() => console.log("사고보험금 클릭")}
            step={[
              { stepName: "신청", stepPoint: false },
              { stepName: "접수", stepPoint: false },
              { stepName: "심사중", stepPoint: true },
              { stepName: "완료", stepPoint: false },
            ]}
          />

          <section className="mb-40">
            <TitleCount
              mainTotalTitle="보험"
              mainTotal={"3"}
              onMainExLinkClick={() => console.log("타사보험조회")}
            />
            <CardContract
              mainTitle="월 보험료"
              mainLinkName="308,888원"
              onMainLinkClick={() => console.log("카드 메인 링크")}
              cardList={[
                {
                  itemName: "상품명",
                  itemTag: "완납",
                  itemDesc: "일시납 21,600원",
                  onItemClick: () => console.log("아이템 클릭"),
                },
                {
                  itemName: "상품명",
                  itemTag: "완납",
                  itemDesc: "일시납 21,600원",
                  onItemClick: () => console.log("아이템 클릭"),
                },
              ]}
              btnGrp={[
                {
                  btnName: "보험료 납입",
                  btnPrmy: false,
                  onBtnClick: () => console.log("보헙료 납입"),
                },
                {
                  btnName: "사고보험금 청구",
                  btnPrmy: true,
                  onBtnClick: () => console.log("사고보험금 청구"),
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
              onBannerClick={() => console.log("배너클릭!")}
            />
          </section>
          <section>
            <TitleCount mainTotalTitle="대출" mainTotal="6" />
            <LinkBanner
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
              onBannerClick={() => console.log("배너 클릭!")}
            />

            <CardContract
              className="mb-20"
              mainTitle="보험계약대출 잔액"
              mainLinkName="308,888원"
              onMainLinkClick={() => console.log("카드 메인 링크")}
              cardList={[
                {
                  itemName: "LIFEPLUS 오마이픽 암보험",
                  itemDesc: "일시납 21,600원",
                  onItemClick: () => console.log("아이템 클릭"),
                },
                {
                  itemName: "상품명",
                  itemDesc: "일시납 21,600원",
                  onItemClick: () => console.log("아이템 클릭"),
                },
              ]}
            />
            <CardContract
              className="mb-20"
              mainTitle="담보대출 잔액"
              mainLinkName="308,888원"
              onMainLinkClick={() => console.log("카드 메인 링크")}
              cardList={[
                {
                  itemName: "홈드림 모지기론",
                  itemDesc: "일시납 21,600원",
                  onItemClick: () => console.log("아이템 클릭"),
                },
                {
                  itemName: "홈드림 모지기론",
                  itemDesc: "일시납 21,600원",
                  onItemClick: () => console.log("아이템 클릭"),
                },
              ]}
            />
          </section>
        </>
      </LyMainGnb>
      <ToastPopup toastMsg="김한화님, 반갑습니다." />
    </>
  );
}
