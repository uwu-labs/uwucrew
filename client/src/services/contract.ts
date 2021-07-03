import { Contract } from "web3-eth-contract";
import Web3 from "web3";
import waifuAbi from "../contracts/WaifusionV2.json";
import { getGlobals } from "./globals";
import BN from "bn.js";

export type AccoomulateWaifu = {
  wetAccumulate: string;
  tokenId: number;
  name: string;
  accumulatedWETNumber: number;
};

export const getAddress = async (): Promise<string> => {
  if ((window as any).ethereum) {
    (window as any).web3 = new Web3((window as any).ethereum);
    (window as any).ethereum.enable();
    const addressList = await (window as any).web3.eth.getAccounts();
    return addressList[0];
  }
  return "";
};

export const getWaifuContract = async (): Promise<Contract> => {
  const globals = await getGlobals();
  const address = await getAddress();
  return new (window as any).web3.eth.Contract(waifuAbi, globals.waifuAddress, {
    from: address,
  });
};

export const mint = async (number: number): Promise<void> => {
  const waifuContract = await getWaifuContract();
  const globals = await getGlobals();
  await waifuContract.methods.mint(number).send({
    value: new BN(Web3.utils.toWei(globals.price)).mul(new BN(number)),
  });
};
