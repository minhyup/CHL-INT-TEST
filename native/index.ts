import { useBridgeCommon } from "./common";
import { useBridgeWallet } from "./wallet";

/**
 * window 사용 가능한 시점에 사용합니다.
 *
 *  const native = useNative();
 *
 *  aync / await으로 사용할 수 있습니다.
 *  const test = async () => {
    console.log('1');
    const deviceInfo = await native.wallet.getDeviceInfo();
    console.log('deviceInfo:::', deviceInfo);
    console.log('2');
    const loginInfo = await native.wallet.getLoginInfo();
    console.log('getLoginInfo:::', loginInfo);
    console.log('3');
  };

  useEffect(() => {
    console.log('page mounted::', native);
    test();
  }, []);
 * @returns useHliNative Hook
 */
export const useHliNative = () => {
  const common = useBridgeCommon();
  const wallet = useBridgeWallet();
  const native = {
    common,
    wallet,
  };

  return native;
};
