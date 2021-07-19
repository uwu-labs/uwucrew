import { useWeb3React } from '@web3-react/core';
import { LIVE } from 'core/constants';
import { MINUTES } from 'countdown';
import type { BooleanArraySupportOption } from 'prettier';
import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import ConnectWallet from './ConnectWallet';
import Popup from './Popup';

const StyledHero = styled.div`
	position: relative;
	height: 90vh;
	width: 100%;
	overflow: hidden;
`;

const Image = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	opacity: 0.7;
`;

const ContentContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Header = styled.h1`
	font-size: 7rem;
	letter-spacing: 0.3rem;
	color: var(--text-primary);
`;

const SubHeader = styled.h2`
	font-size: 1.4rem;
	font-weight: 500;
	color: var(--text-primary);
	max-width: 60rem;
	text-align: center;
	margin-top: 1rem;
	line-height: 2rem;
	margin-bottom: 3rem;
`;

const Countdown = styled.div`
	font-size: 3.5rem;
	font-weight: 500;
	color: var(--text-primary);
	margin-bottom: 5rem;
`;

interface Props {
	show: boolean;
	close: () => void;
}

const Hero = ({ show, close }: Props) => {
	const [amount, setAmmount] = useState(0);

	const mint = async () => {
		const girls = new Contract(AD, girlsAbi, library.getSigner());
		await girls.mint(Number(amount), {
			value: ethers.utils.parseEther((0.008 * Number(amount)).toString())
		});
	};

	return (
		<Popup
			show={show}
			close={close}
			header="Mint UwU"
			content={
				<Content>
					<input type="number" value={amount} onChange={(e: any) => setAmmount(Number(e.target.value))}></input>
					<Button onClick={() => mint()}>Mint</Button>
				</Content>
			}
		/>
	);
};

export default Hero;
