import type { NextPage } from 'next';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { reload, selectOwnedTickets } from 'state/reducers/uwu';
import { BigNumber, Contract, ethers } from 'ethers';
import { SALE_CONTRACT } from 'core/constants';

import abi from '../contracts/uwucrewWaveLockSale.json';
import { useWeb3React } from '@web3-react/core';

interface ButtonProps {
	disabled: boolean;
}

const Button = styled.button`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--bg-03);
	transition: all 1s;
	color: white;
	font-size: 2.2rem;
	font-weight: 500;
	text-transform: uppercase;
	cursor: pointer;
	padding: 0 5rem;
	height: 5rem;
	margin-top: 1.5rem;
	pointer-events: ${(props: ButtonProps) => (props.disabled ? 'none' : 'auto')};

	@media (max-width: 768px) {
		width: 100%;
	}
`;

const MintButton: NextPage = () => {
	const dispatch = useDispatch();
	const { library } = useWeb3React();
	const balance = useSelector(selectOwnedTickets);
	const [loading, setLoading] = useState(false);

	const mint = async () => {
		if (loading || balance === 0) return;

		const contract = new Contract(SALE_CONTRACT, abi, library?.getSigner());
		const gasEstimate: BigNumber = await contract.estimateGas.mint(balance);
		const scale = BigNumber.from(10).pow(18);
		const gasLimit = gasEstimate.mul(ethers.utils.parseEther('1.2')).div(scale);

		contract.mint(balance, { gasLimit }).then((receipt: any) => {
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
					dispatch(reload());
				});
		});
	};

	return (
		<Button onClick={() => mint()} disabled={balance === 0}>
			{balance === 0 ? 'No uwu-tickets' : loading ? 'Loading' : `Mint ${balance} uwuws`}
		</Button>
	);
};

export default MintButton;
