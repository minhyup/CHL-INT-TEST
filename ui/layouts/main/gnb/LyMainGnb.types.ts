import React from "react";
import { IHeaderMain } from "@/ui/combinations/header";

export interface IMainGnb extends IHeaderMain {
  /** 리액트 자식 */
  children: React.ReactElement;

  /** 패딩 */
  padding?: string;
  /** 배경색 */
  bgColor?: string;
}
