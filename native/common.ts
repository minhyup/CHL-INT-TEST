import { useBridge } from "./bridge";
/**
 * WebView내 공통으로 적용된 API(화면이동, 데이터송수신, 외부링크)
 */
export const useBridgeCommon = () => {
  const bridge = useBridge();

  const common = {
    /**
     * 로드 데이터
     * @param args
     */
    loadData(args: { key: string }) {
      return bridge?.callNative("loadData", {
        pluginId: "common",
        command: "loadData",
        args,
      });
    },

    /**
     * Save 데이터
     * @param args
     */
    saveData(args: { key: string; value: Record<string, unknown> }) {
      return bridge?.callNative("saveData", {
        pluginId: "common",
        command: "loadData",
        args,
      });
    },

    /**
     * 단말기 공용으로 복사 처리할 문자열
     * @param args
     */
    clipboard(args: { copyStr: string }) {
      return bridge?.callNative("clipboard", {
        pluginId: "common",
        command: "clipboard",
        args,
      });
    },

    initCallgate(args: any = {}) {
      return bridge?.callNative("initCallgate", {
        pluginId: "common",
        command: "initCallgate",
        args,
      });
    },
  };
  return common;
};
