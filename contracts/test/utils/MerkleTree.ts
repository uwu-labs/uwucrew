// https://github.com/Uniswap/merkle-distributor/blob/master/src/merkle-tree.ts

import { bufferToHex, keccak256 } from 'ethereumjs-util';

export default class MerkleTree {
	private readonly elements: Buffer[];
	private readonly bufferElementPositionIndex: { [hexElement: string]: number };
	private readonly layers: Buffer[][];

	public constructor(elements: Buffer[]) {
		this.elements = [...elements];
		// Sort elements
		this.elements.sort((a, b) => Buffer.compare(a, b));
		// Deduplicate elements
		this.elements = MerkleTree.bufDedup(this.elements);

		this.bufferElementPositionIndex = this.elements.reduce<{ [hexElement: string]: number }>((memo, el, index) => {
			memo[bufferToHex(el)] = index;
			return memo;
		}, {});

		// Create layers
		this.layers = this.getLayers(this.elements);
	}

	public getLayers(elements: Buffer[]): Buffer[][] {
		if (elements.length === 0) {
			throw new Error('empty tree');
		}

		const layers = [];
		layers.push(elements);

		// Get next layer until we reach the root
		while (layers[layers.length - 1].length > 1) {
			layers.push(this.getNextLayer(layers[layers.length - 1]));
		}

		return layers;
	}

	public getNextLayer(elements: Buffer[]): Buffer[] {
		return elements.reduce<Buffer[]>((layer, el, idx, arr) => {
			if (idx % 2 === 0) {
				// Hash the current element with its pair element
				layer.push(MerkleTree.combinedHash(el, arr[idx + 1]));
			}

			return layer;
		}, []);
	}

	public getRoot(): Buffer {
		return this.layers[this.layers.length - 1][0];
	}

	public getHexRoot(): string {
		return bufferToHex(this.getRoot());
	}

	public getProof(el: Buffer) {
		let idx = this.bufferElementPositionIndex[bufferToHex(el)];

		if (typeof idx !== 'number') {
			throw new Error('Element does not exist in Merkle tree');
		}

		return this.layers.reduce((proof, layer) => {
			const pairElement = MerkleTree.getPairElement(idx, layer);

			if (pairElement) {
				proof.push(pairElement);
			}

			idx = Math.floor(idx / 2);

			return proof;
		}, []);
	}

	public getHexProof(el: Buffer): string[] {
		const proof = this.getProof(el);

		return MerkleTree.bufArrToHexArr(proof);
	}

	public static combinedHash(first: Buffer, second: Buffer): Buffer {
		if (!first) {
			return second;
		}
		if (!second) {
			return first;
		}

		return keccak256(MerkleTree.sortAndConcat(first, second));
	}

	private static getPairElement(idx: number, layer: Buffer[]): Buffer | null {
		const pairIdx = idx % 2 === 0 ? idx + 1 : idx - 1;

		if (pairIdx < layer.length) {
			return layer[pairIdx];
		}

		return null;
	}

	private static bufDedup(elements: Buffer[]): Buffer[] {
		return elements.filter((el, idx) => {
			return idx === 0 || !elements[idx - 1].equals(el);
		});
	}

	private static bufArrToHexArr(arr: Buffer[]): string[] {
		if (arr.some((el) => !Buffer.isBuffer(el))) {
			throw new Error('Array is not an array of buffers');
		}

		return arr.map((el) => `0x${el.toString('hex')}`);
	}

	private static sortAndConcat(...args: Buffer[]): Buffer {
		return Buffer.concat([...args].sort((a, b) => Buffer.compare(a, b)));
	}
}
