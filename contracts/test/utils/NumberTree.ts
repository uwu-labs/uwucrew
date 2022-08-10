// https://github.com/Uniswap/merkle-distributor/blob/master/src/balance-tree.ts

import MerkleTree from "./MerkleTree";
import { utils } from "ethers";

export interface NumberObject {
  tokenId: number;
}

export default class NumberTree {
  private readonly tree: MerkleTree;

  public constructor(claims: NumberObject[]) {
    this.tree = new MerkleTree(
      claims.map(({ tokenId }) => {
        return NumberTree.toNode(tokenId);
      })
    );
  }

  public getHexRoot(): string {
    return this.tree.getHexRoot();
  }

  public getProof(tokenId: number): string[] {
    return this.tree.getHexProof(NumberTree.toNode(tokenId));
  }

  public static verifyProof(
    tokenId: number,
    proof: Buffer[],
    root: Buffer
  ): boolean {
    let pair = NumberTree.toNode(tokenId);
    for (const item of proof) {
      pair = MerkleTree.combinedHash(pair, item);
    }

    return pair.equals(root);
  }

  // keccak256(abi.encode(index, account, amount))
  public static toNode(tokenId: number): Buffer {
    return Buffer.from(
      utils.solidityKeccak256(["uint256"], [tokenId]).substr(2),
      "hex"
    );
  }
}
