// https://github.com/Uniswap/merkle-distributor/blob/master/src/balance-tree.ts

import MerkleTree from "./MerkleTree";
import { BigNumber, utils } from "ethers";

export interface FreeObject {
  account: string;
  amount: number;
}

export default class FreeTree {
  private readonly tree: MerkleTree;

  public constructor(claims: FreeObject[]) {
    this.tree = new MerkleTree(
      claims.map(({ account, amount }) => {
        return FreeTree.toNode(account, amount);
      })
    );
  }

  public getHexRoot(): string {
    return this.tree.getHexRoot();
  }

  public getProof(account: string, amount: number): string[] {
    return this.tree.getHexProof(FreeTree.toNode(account, amount));
  }

  public static verifyProof(
    account: string,
    amount: number,
    proof: Buffer[],
    root: Buffer
  ): boolean {
    let pair = FreeTree.toNode(account, amount);
    for (const item of proof) {
      pair = MerkleTree.combinedHash(pair, item);
    }

    return pair.equals(root);
  }

  // keccak256(abi.encode(index, account, amount))
  public static toNode(account: string, amount: number): Buffer {
    return Buffer.from(
      utils
        .solidityKeccak256(["address", "uint256"], [account, amount])
        .substr(2),
      "hex"
    );
  }
}
