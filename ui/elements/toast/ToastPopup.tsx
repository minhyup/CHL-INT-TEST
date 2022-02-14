import React from "react";
import { ToastWrapper, ToastMessage } from "./ToastPopup.styled";
import { IToastPopup } from "./ToastPopup.types";

export const ToastPopup = ({ toastMsg }: IToastPopup) => {
  return (
    <ToastWrapper>
      <ToastMessage>{toastMsg}</ToastMessage>
    </ToastWrapper>
  );
};
