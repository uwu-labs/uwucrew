import { CONTRACT, PRICE } from 'core/constants';
import { Contract, ethers } from 'ethers';
import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Popup from './Popup';
import abi from '../contracts/SaleContract.json';
import { useWeb3React } from '@web3-react/core';

const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

interface Props {
	show: boolean;
	close: () => void;
}

const MintPopup = ({ show, close }: Props) => {
	const [amount, setAmmount] = useState(0);
	const { library } = useWeb3React();

	const mint = async () => {
		const contract = new Contract(CONTRACT, abi, library.getSigner());
		await contract.mint(Number(amount), {
			value: ethers.utils.parseEther((PRICE * Number(amount)).toString())
		});
	};

	return (
		<Popup
			color="pink"
			show={show}
			close={close}
			header="Mint UwU"
			content={
				<Content>
					<input type="number" value={amount} onChange={(e: any) => setAmmount(Number(e.target.value))}></input>
					<Button color="pink" onClick={() => mint()}>
						Mint
					</Button>
				</Content>
			}
		/>
	);
};

export default MintPopup;
