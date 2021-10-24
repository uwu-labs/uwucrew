import React, { useState } from 'react';
import styled from 'styled-components';
import { Contract } from 'ethers';
import { UWU_LOOT } from 'core/constants';
import type { Web3Provider } from '@ethersproject/providers';

import abi from '../contracts/uwuloot.json';
import { useWeb3React } from '@web3-react/core';
import proofs from '../assets/data/loot_proofs.json';

const StyledLootInput = styled.div`
	display: flex;
	flex-direction: column;

	margin-top: 3rem;
	@media (max-width: 768px) {
		margin-top: 1rem;
	}
`;

const InputContainer = styled.div`
	display: flex;
	height: 4.5rem;
`;

const Input = styled.input`
	height: 100%;
	border: solid 2px var(--bg-03);
	transition: all 1s;
	background: rgba(255, 255, 255, 0.5);
	width: 21rem;
	font-size: 1.6rem;
	padding: 0 1rem;
	color: var(--text-primary);
	-moz-appearance: textfield;

	::-webkit-outer-spin-button {
		display: none;
	}
	::-webkit-inner-spin-button {
		display: none;
	}

	@media (max-width: 768px) {
		width: 100%;
		flex: 1;
	}
`;

interface ButtonProps {
	disabled: boolean;
}

const Button = styled.button`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 2rem;
	background-color: var(--bg-03);
	transition: all 1s;
	color: white;
	font-size: 1.8rem;
	text-transform: uppercase;
	cursor: pointer;
	pointer-events: ${(props: ButtonProps) => (props.disabled ? 'none' : 'auto')};

	@media (max-width: 768px) {
		padding: 0 1rem;
	}
`;

const LootInput = () => {
	const { library } = useWeb3React<Web3Provider>();
	const [loading, setLoading] = useState(false);
	const [ids, setIds] = useState('');

	const register = async () => {
		if (loading || !ids || !library) return;

		const idList = ids.replace(' ', '').split(',');

		const contract = new Contract(UWU_LOOT, abi, library?.getSigner());

		console.log({
			id: idList.map((id: string) => (proofs as any)[id].Id),
			data: idList.map((id: string) => (proofs as any)[id].Metadata),
			proof: idList.map((id: string) => (proofs as any)[id].Proof)
		});

		contract
			.registerNFTs(
				idList.map((id: string) => (proofs as any)[id].Id),
				idList.map((id: string) => (proofs as any)[id].Metadata),
				idList.map((id: string) => (proofs as any)[id].Proof)
			)
			.then((receipt: any) => {
				setLoading(true);
				receipt
					.wait()
					.then(() => {
						console.log('Mint submitted');
					})
					.catch((err: any) => {
						console.log('Error');
						console.log(err);
					})
					.finally(() => {
						setLoading(false);
						setIds('');
					});
			});
	};

	return (
		<StyledLootInput>
			<InputContainer>
				<Input placeholder={`Uwu ids (e.g. 154, 1676)`} type="text" value={ids} onChange={(e) => setIds(e.target.value)} />
				<Button onClick={() => register()} disabled={!ids}>
					{loading ? 'Loading' : 'Register uwuws'}
				</Button>
			</InputContainer>
		</StyledLootInput>
	);
};

export default LootInput;
