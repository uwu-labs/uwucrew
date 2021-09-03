import { useWeb3React } from '@web3-react/core';
import { SALE_CONTRACT } from 'core/constants';
import { Contract, ethers } from 'ethers';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reload, selectBuyPrice } from 'state/reducers/uwu';
import styled from 'styled-components';

import abi from '../contracts/uwucrewWaveLockSale.json';

const StyledBuyInput = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 3rem;
`;

const InputContainer = styled.div`
	display: flex;
	height: 4.5rem;
`;

const Input = styled.input`
	height: 100%;
	border: solid 2px var(--bg-04);
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

const Button = styled.button`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 2rem;
	background-color: var(--bg-04);
	transition: all 1s;
	color: white;
	font-size: 1.8rem;
	text-transform: uppercase;
	cursor: pointer;

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

interface Props {
	max: number;
}

const BuyInput = ({ max }: Props) => {
	const dispatch = useDispatch();
	const { library } = useWeb3React();
	const buyPrice = useSelector(selectBuyPrice);
	const [amount, setAmount] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	const validate = (input: string): boolean => {
		if (max === 0) {
			setError('You have already purchased for this wave');
			return false;
		}
		let value: number = 0;
		try {
			value = Number(input);
		} catch {
			setError('Invalid number');
			return false;
		}
		if (value <= 0) {
			setError('Must be 1 or more');
			return false;
		}
		if (value % 1 !== 0) {
			setError('Must be an integer');
			return false;
		}
		if (value > max) {
			setError(`Max of ${max} for this wave`);
			return false;
		}
		setError('');
		return true;
	};

	const buy = async () => {
		if (loading || !validate(amount)) return;
		const contract = new Contract(SALE_CONTRACT, abi, library?.getSigner());
		const ethCost = ethers.utils.parseEther((buyPrice * Number(amount)).toString());
		contract.buy(Number(amount), { value: ethCost }).then((receipt: any) => {
			setLoading(true);
			receipt
				.wait()
				.then(() => {})
				.catch((err: any) => {
					alert(err);
				})
				.finally(() => {
					setLoading(false);
					setError('');
					dispatch(reload());
				});
		});
	};

	return (
		<StyledBuyInput>
			<InputContainer>
				<Input
					placeholder={`Enter amount (e.g. ${max})`}
					type="number"
					value={amount}
					onChange={(e) => {
						validate(e.target.value);
						setAmount(e.target.value);
					}}
				/>
				<Button onClick={() => buy()}>{loading ? 'Loading' : 'Buy Tickets'}</Button>
			</InputContainer>
			{error && <Error>{error}</Error>}
		</StyledBuyInput>
	);
};

export default BuyInput;
