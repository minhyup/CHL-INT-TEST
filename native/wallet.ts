import { useBridge, IMoveWebArgs } from "./bridge";

export const useBridgeWallet = () => {
  const bridge = useBridge();

  const wallet = {
    /**
     * 로그인 정보를 얻어온다.
     */
    getLoginInfo(args: any = {}) {
      return bridge?.callNative("getLoginInfo", {
        pluginId: "wallet",
        command: "getLoginInfo",
        args,
      });
    },

    /**
     * 페이지 이동
     */
    moveWebPage(args: IMoveWebArgs) {
      return bridge?.callNative("moveWebPage", {
        pluginId: "wallet",
        command: "moveWebPage",
        args,
      });
    },

    /**
     * 회원가입 페이지 이동
     */
    joinPage(args: any = {}) {
      return bridge?.callNative("joinPage", {
        pluginId: "wallet",
        command: "joinPage",
        args,
      });
    },

    /**
     * 디바이스 정보 가져오기
     * @param args
     */
    getDeviceInfo(args: any = {}) {
      return bridge?.callNative("getDeviceInfo", {
        pluginId: "wallet",
        command: "getDeviceInfo",
        args,
      });
    },

    /**
     * ga data 전송
     * @param args
     * @returns
     */
    sendDataToGA(args: {
      reqType: "init" | "event" | "screen";
      gaData: string[];
    }) {
      return bridge?.callNative("sendDataToGA", {
        pluginId: "wallet",
        command: "sendDataToGA",
        args,
      });
    },

    /**
     * 로그인 페이지로 이동
     */
    loginPage(args: any = {}) {
      return bridge?.callNative("loginPage", {
        pluginId: "wallet",
        command: "loginPage",
        args,
      });
    },

    /**
     * 히스토리 백
     * @param args
     * @returns
     */
    webBack(args: { reload: "Y" | "N" } = { reload: "N" }) {
      return bridge?.callNative("webBack", {
        pluginId: "wallet",
        command: "webBack",
        args,
      });
    },

    /**
     * 웹뷰 닫기
     * @param args
     */
    webClose(args: { reload: "Y" | "N" } = { reload: "N" }) {
      return bridge?.callNative("webClose", {
        pluginId: "wallet",
        command: "webClose",
        args,
      });
    },

    webHistoryDel(args: any = {}) {
      return bridge?.callNative("webHistoryDel", {
        pluginId: "wallet",
        command: "webHistoryDel",
        args,
      });
    },

    /**
     * 인증화면 호출
     * @param args
     * @returns
     */
    callCertified(args: { bizapp: "com" | string; filename: string }) {
      return bridge?.callNative("callCertified", {
        pluginId: "wallet",
        command: "callCertified",
        args,
      });
    },

    moveFullPopup(args: { path: string }) {
      return bridge?.callNative("moveFullPopup", {
        pluginId: "wallet",
        command: "moveFullPopup",
        args,
      });
    },
  };
  return wallet;
};
