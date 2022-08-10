// https://github.com/Uniswap/merkle-distributor/blob/master/src/balance-tree.ts

import MerkleTree from "./MerkleTree";
import { BigNumber, utils } from "ethers";

export interface MintObject {
  account: string;
}

export default class MintTree {
  private readonly tree: MerkleTree;

  public constructor(claims: MintObject[]) {
    this.tree = new MerkleTree(
      claims.map(({ account }) => {
        return MintTree.toNode(account);
      })
    );
  }

  public getHexRoot(): string {
    return this.tree.getHexRoot();
  }

  public getProof(account: string): string[] {
    return this.tree.getHexProof(MintTree.toNode(account));
  }

  public static verifyProof(
    account: string,
    proof: Buffer[],
    root: Buffer
  ): boolean {
    let pair = MintTree.toNode(account);
    for (const item of proof) {
      pair = MerkleTree.combinedHash(pair, item);
    }

    return pair.equals(root);
  }

  // keccak256(abi.encode(index, account, amount))
  public static toNode(account: string): Buffer {
    return Buffer.from(
      utils.solidityKeccak256(["address"], [account]).substr(2),
      "hex"
    );
  }
}
