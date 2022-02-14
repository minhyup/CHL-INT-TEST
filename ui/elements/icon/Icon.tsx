import React from "react";
import { IImage } from "./Icon.types";
import { IconImg } from "./Icon.styled";

/**
 * 아이콘
 * @param param0
 * @returns
 */
export const Icon = (props: IImage) => {
  return <IconImg alt={props.className} {...props} />;
};
