import React from "react";
import { ToastWrapper, ToastMessage } from "./ToastPopup.styled";
import { IToastPopup } from "./ToastPopup.types";

export const ToastPopup = ({ wrapperProps, toastMsg }: IToastPopup) => {
  return (
    <ToastWrapper {...wrapperProps}>
      <ToastMessage>{toastMsg}</ToastMessage>
    </ToastWrapper>
  );
};
