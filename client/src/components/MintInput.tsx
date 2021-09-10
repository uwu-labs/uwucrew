import type { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import { SALE_CONTRACT } from 'core/constants';
import { BigNumber, Contract, ethers } from 'ethers';
import type { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reload, selectOwnedTickets } from 'state/reducers/uwu';
import styled from 'styled-components';
import abi from '../contracts/uwucrewWaveLockSale.json';

const StyledMintInput = styled.div`
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

const Error = styled.div`
	font-weight: 500;
	color: red;
	max-width: 64rem;
	line-height: 2.3rem;
	font-family: 'Roboto', sans-serif;
	margin-top: 0.3rem;

	font-size: 1.4rem;
	@media (max-width: 768px) {
		font-size: 1.2rem;
		max-width: 80vw;
	}
`;

const MintInput: NextPage = () => {
	const dispatch = useDispatch();
	const { library } = useWeb3React<Web3Provider>();
	const balance = useSelector(selectOwnedTickets);
	const [loading, setLoading] = useState(false);
	const [amount, setAmount] = useState('');
	const [error, setError] = useState('');
	const { t } = useTranslation('common');

	const validate = (input: string): boolean => {
		if (balance === 0) {
			setError(t('components.mint.errors.no_tickets'));
			return false;
		}
		let value = 0;
		try {
			value = Number(input);
		} catch {
			setError(t('components.mint.errors.invalid_number'));
			return false;
		}
		if (value <= 0) {
			setError(t('components.mint.errors.one_or_more'));
			return false;
		}
		if (value % 1 !== 0) {
			setError(t('components.mint.errors.integer'));
			return false;
		}
		if (value > balance) {
			setError(t('components.mint.errors.balance', { balance }));
			return false;
		}
		setError('');
		return true;
	};

	const mint = async () => {
		if (loading || balance === 0 || !validate(amount) || !library) return;

		const contract = new Contract(SALE_CONTRACT, abi, library?.getSigner());
		const scale = BigNumber.from(10).pow(18);

		// Getting gas price
		const gasPriceCurrent = await library.getGasPrice();
		const gasPrice = gasPriceCurrent.mul(ethers.utils.parseEther('1.2')).div(scale);

		// Getting gas estimate
		// const gasEstimate: BigNumber = await contract.estimateGas.mint(balance);
		// const gasLimit = gasEstimate.mul(BigNumber.from(120)).div(BigNumber.from(100));

		contract
			.mint(Number(amount), { gasPrice })
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
						dispatch(reload());
					});
			})
			.catch((err: any) => {
				setError(t('components.mint.errors.gas'));
				console.log('Error');
				console.log(err);
			});
	};

	return (
		<StyledMintInput>
			<InputContainer>
				<Input
					placeholder={t('components.mint.input_placeholder', { balance })}
					type="number"
					value={amount}
					onChange={(e) => {
						validate(e.target.value);
						setAmount(e.target.value);
					}}
				/>
				<Button onClick={() => mint()} disabled={balance === 0}>
					{/* TODO: Possibly translate this */}
					{loading ? 'Loading' : 'Mint uwus'}
				</Button>
			</InputContainer>
			{error && <Error>{error}</Error>}
		</StyledMintInput>
	);
};

export default MintInput;
