export = global;
declare global {
  interface Window {
    AndroidBridge: any;
    webkit: any;
    HLI_NATIVE_INTERFACE: NativeBridgeCallback;
  }
}
