import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { platformState } from "@/store/device";

export type PlatformType = "Android" | "iOS" | "Web";
type TypePluginId = "common" | "wallet";
type TypeCommand =
  | "loadData"
  | "saveData"
  | "linkInternalURL"
  | "linkExternalURL"
  | "linkApp"
  | "getLoginInfo"
  | "moveWebPage"
  | "moveFullPopup"
  | "joinPage"
  | "getDeviceInfo"
  | "sendDataToGA"
  | "loginPage"
  | "sendKakao"
  | "sendSms"
  | "webBack"
  | "webClose"
  | "callCertified"
  | "clipboard"
  | "initCallgate"
  | "webHistoryDel";
export type TypeChannel = "hone" | "onsure" | "main" | "appnative" | "hci";

export interface IMoveWebArgs {
  /** 채널타입 */
  channelType?: TypeChannel;
  /** 화면 호출 경로 */
  path?: string;
  /** tab index */
  tabIndex?: string;
  /** WebView 타이틀 명 */
  viewTitle?: string;
  /** hone 채널의 경우 bizapp명	 */
  bizapp?: string;
  /** bizapp내 화면ID */
  filename?: string;
  /** WebView 오른쪽 상단 버튼 명 */
  viewRBtnTitle?: string;
  /** WebView 오른쪽 상단 버튼 이동경로 */
  viewRBtnPath?: string;
  /** 전체화면인지 아닌지  */
  fullscreen?: "Y" | "N" | "";
  /** 증권번호 */
  polyNo?: string;
  /** 포인트몰 인증 토큰(1분간 유효한 인증 토큰) */
  pointMallAuth?: string;
}

export interface IKeyProps {
  key: "certtype" | "savedPageData" | "account";
}

interface INatvieRequestProps {
  pluginId: TypePluginId;
  command: TypeCommand;
  args?: Record<string, unknown> | IMoveWebArgs | IKeyProps;
}

export interface INatvieResponseProps {
  resCode: "0000" | string;
  resMessage: string;
  resData: Record<string, unknown> | string;
}

const getUserAgent = () => {
  const ua = window.navigator.userAgent;
  if (ua.indexOf("HANWHALIFE") > -1 || ua.indexOf("HoneMobile") > -1) {
    if (/android/i.test(ua.toLowerCase())) {
      return "Android";
    }
    if (/iphone|ipad|ipod/i.test(ua.toLowerCase())) {
      return "iOS";
    }
  } else {
    return "Web";
  }
};

// // Deprecated
// btoa(string)
// // Buffer equivalent
// Buffer.from(string).toString('base64')
interface IBridge {
  callNative: (
    callbackId: string,
    params: INatvieRequestProps
  ) => Promise<INatvieResponseProps>;
}
export const useBridge = () => {
  const platform = useRecoilValue(platformState);
  //console.log("useBridge platform::", platform);
  //const [platform, setPlatform] = useState<PlatformType>("Web");
  //const { store } = useContext(AppBridgeContext);
  //const platfrom = getUserAgent();

  const NATIVE_BRIDGE = {
    /**
     * params 객체를 인코딩한다.
     * @param params: INatvieProps
     * @returns: encode data
     */
    encodeData(callbackId: string, params: INatvieRequestProps): string {
      const enData = Buffer.from(
        encodeURIComponent(
          JSON.stringify({
            ...params,
            callbackScriptName: `window.HLI_NATIVE_INTERFACE.${callbackId}`,
          })
        )
      ).toString("base64");
      return enData;
    },

    /**
     * encoding된 문자열을 디코딩한다.
     * @param params
     * @returns
     */
    decodeData(params: string): string {
      return decodeURIComponent(params);
    },
    /**
     * 디코딩된 문자열을 입력으로 받고 안드로이드 네이티브를 호출한다.
     * @param strParams
     */
    callAndroid(strParams: string): void {
      window.AndroidBridge.callNativeMethod("native://callNative?" + strParams);
    },
    /**
     * 디코딩된 문자열을 입력으로 받고 iOS 네이티브를 호출한다.
     * @param strParams
     */
    callIos(strParams: string): void {
      window.webkit.messageHandlers.callNative.postMessage(strParams);
    },
    /**
     * 콜백 함수 지정
     */
    makeCallback(callbackId: string, resolve: any, reject: any) {
      const objCallback = initCallback();

      // 기존 함수를 바꾼다.(네이티브 api 성공시 호출)
      objCallback.success = function (resData) {
        console.log("성공!");
        resolve(resData);
      };
      objCallback.fail = function (resData) {
        console.log("실패!");
        reject(resData);
      };
      window.HLI_NATIVE_INTERFACE = {
        ...window.HLI_NATIVE_INTERFACE,

        // 콜백함수 선언
        [callbackId]: function (resData: string) {
          // 콜백 지정(native 호출후 실행될 함수)
          objCallback.exeCallBack(resData);
        },
      };
    },
    /**
     * 네이티브를 호출한다.
     * @param param0
     */
    callNative(
      callbackId: string,
      params: INatvieRequestProps
    ): Promise<INatvieResponseProps> {
      return new Promise((resolve, reject) => {
        try {
          //const platform = getUserAgent();

          // 콜백 생성
          this.makeCallback(callbackId, resolve, reject);

          const enData = this.encodeData(callbackId, params);

          console.log("enData::", platform, callbackId, enData);
          console.log("callNative platform::", platform || getUserAgent());

          switch (platform || getUserAgent()) {
            case "Android":
              this.callAndroid(enData);
              break;
            case "iOS":
              this.callIos(enData);
              break;
            default:
              console.log("Native calls are not supported.");
              reject("Native calls are not supported.");
          }
        } catch (e) {
          reject(e);
        }
      });
    },
  };
  return NATIVE_BRIDGE;
};

/**
 * 브릿지 콜백콜백 함수를 만든다.
 * @returns
 */
const initCallback = () => {
  const objCallback = {
    // 더미 함수
    success(resData: INatvieResponseProps) {
      console.log("success::", resData);
    },
    fail(resData: INatvieResponseProps | any) {
      console.log("fail::", resData);
    },
    exeCallBack(nativeData: string) {
      console.log("exeCallBack::", nativeData);
      try {
        // parse
        const { resCode, resMessage, resData } = JSON.parse(
          decodeURIComponent(nativeData)
        );

        if (resCode === "0000") {
          this.success({ resCode, resMessage, resData });
        } else {
          this.fail({ resCode, resMessage, resData });
        }
      } catch (e) {
        this.fail(e);
      }
    },
  };

  return objCallback;
};
