import { getNetwork } from "./web3";

export enum Network {
  ETH,
  TEST,
  BSC,
}

export type GlobalsData = {
  network: Network;
  waifuAddress: string;
  price: string;
};

export const TEST_GLOBALS: GlobalsData = {
  network: Network.TEST,
  waifuAddress: "0xdb5b6d8058a8B3514c603B997Ee1810cD788ddeE",
  price: "0.008",
};

export const ETH_GLOBALS: GlobalsData = {
  network: Network.ETH,
  waifuAddress: "0x2216d47494E516d8206B70FCa8585820eD3C4946",
  price: "0.008",
};

export const BSC_GLOBALS: GlobalsData = {
  network: Network.BSC,
  waifuAddress: "0x2216d47494E516d8206B70FCa8585820eD3C4946",
  price: "0.008",
};

export const getGlobals = async (): Promise<GlobalsData> => {
  const networkId = await getNetwork();
  if (networkId === 1) return ETH_GLOBALS;
  if (networkId === 4 || networkId === 5) return TEST_GLOBALS;
  return BSC_GLOBALS;
};
