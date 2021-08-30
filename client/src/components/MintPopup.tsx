import { SALE_CONTRACT } from 'core/constants';
import { BigNumber, Contract, ethers } from 'ethers';
import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Popup from './Popup';
import abi from '../contracts/uwucrewWaveLockSale.json';
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
		const contract = new Contract(SALE_CONTRACT, abi, library.getSigner());
		const response: BigNumber = await contract.buyPrice();
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
