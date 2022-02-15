import React from "react";
import { IIcon } from "./Icon.types";
import { IconImg } from "./Icon.styled";

/**
 * 아이콘
 * @param param0
 * @returns
 */
export const Icon = (props: IIcon) => {
  return <IconImg alt={props.className} {...props} />;
};
