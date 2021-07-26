import { useWeb3React } from '@web3-react/core';
import { LIVE } from 'core/constants';
import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import ConnectWallet from './ConnectWallet';
import MintPopup from './MintPopup';

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

const Hero = () => {
	const { active } = useWeb3React();
	const [minting, setMinting] = useState(false);
	const [connecting, setConnecting] = useState(false);

	return (
		<StyledHero>
			<Image src={'https://i.imgur.com/oCR1Pxf.jpg'} />

			<ContentContainer>
				<Content>
					<Header>Uwu Crew</Header>
					<SubHeader>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
						enim ad minim veniam
					</SubHeader>
					{LIVE && (
						<Button
							onClick={() => {
								if (active) setMinting(true);
								else setConnecting(true);
							}}
						>
							{active ? 'Mint UwU' : 'Connect'}
						</Button>
					)}
					{!LIVE && <Countdown>13 Days, 7 Hours, 12 Minutes</Countdown>}
				</Content>
			</ContentContainer>
			<MintPopup show={minting} close={() => setMinting(false)} />
			<ConnectWallet show={connecting} close={() => setConnecting(false)} />
		</StyledHero>
	);
};

export default Hero;
