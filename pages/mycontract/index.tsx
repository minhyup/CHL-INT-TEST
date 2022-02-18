import React, { useEffect, useRef } from "react";
import Head from "next/head";
import { useBridge } from "@/native/bridge";
import { useBridgeCommon } from "@/native/common";
import { useBridgeWallet } from "@/native/wallet";
import { LinkBanner } from "@/ui/elements/banner";
import { ToastPopup } from "@/ui/elements/toast";
import { LyMainGnb } from "@/ui/layouts/main";
import { NoticeStatus } from "@/ui/combinations/notice";
import { CardContract } from "@/ui/combinations/card";
import { TitleCount } from "@/ui/combinations/title";
import useNative from "@/native";

export default function MyContractPage(): React.ReactElement {
  const noticeStatusRef = useRef<HTMLAnchorElement>(null);
  const brr = useBridge();
  const test = useBridgeCommon();
  const nat = useNative();
  const wallet = useBridgeWallet();

  // console.log(
  //   brr?.callNative("aaa", { pluginId: "common", command: "callCertified" })
  // );

  console.log(wallet.webBack({ reload: "N" }));

  //test.saveData({ key: "aaa", value: { test: "adfadsf" } });
  const testf = async () => {
    console.log("1");
    const res = await test.loadData({ key: "test" });
    // await brr?.callNative("ddd", {
    //   pluginId: "common",
    //   command: "callCertified",
    // });
    console.log("2");
  };
  testf();

  //  console.log("brrr", brr);

  // brr?.callNative("sss", { pluginId: "common", command: "callCertified" });
  // console.log("common:", test.loadData());
  // console.log("NATIVE::", nat.common.loadData());

  // console.log(
  //   "brrr",
  //   brr?.callNative("id", { pluginId: "common", command: "callCertified" })
  // );

  // console.log(
  //   "br::",
  //   br?.
  // );
  useEffect(() => {
    //console.log("page!");
    // console.log(
    //   "mount::",
    //   brr?.callNative("id", { pluginId: "common", command: "callCertified" })
    // );
  }, []);
  // console.log("call!", br);
  // if (br) {
  // }

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

          <section className="mb-40">
            <TitleCount
              mainTotalTitle="보험"
              mainTotal={"3"}
              exLinkTitle="타사보험조회"
              exAnchorProps={{
                onClick: (e) =>
                  console.log("타사보험조회::", e.currentTarget.innerText),
              }}
            />
            <CardContract
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
          </section>
          <section>
            <TitleCount mainTotalTitle="대출" mainTotal="6" />
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
          </section>
        </>
      </LyMainGnb>
      <ToastPopup toastMsg="김한화님, 반갑습니다." />
    </>
  );
}
