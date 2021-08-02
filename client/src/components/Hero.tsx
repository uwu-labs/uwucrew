import { useWeb3React } from '@web3-react/core';
import { LIVE } from 'core/constants';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styled, { keyframes } from 'styled-components';
import Button from './Button';
import ConnectWallet from './ConnectWallet';
import MintPopup from './MintPopup';
import uwu from '../assets/girls/07.png';

const colors: string[] = ['var(--bg-01)', 'var(--bg-02)', 'var(--bg-03)', 'var(--bg-04)', 'var(--bg-05)'];

const raise = keyframes`
  from {
	  opacity: 0;
	transform: translateY(100%);
  }
  to {
	  opacity: 1;
	transform: translateY(0);
  }
`;

const slide = keyframes`
  from {
	  opacity: 0;
	transform: translateX(100%);
  }
  to {
	  opacity: 1;
	transform: translateX(0);
  }
`;

const StyledHero = styled.div``;

interface ImageProps {
	color: string;
}

const StyledImage = styled.div`
	width: 30vw;
	padding: 2rem;
	padding-bottom: 0;
	background-color: ${(props: ImageProps) => props.color};

	opacity: 0;
	transform: translateX(100%);
	animation: ${slide} 1s 2.9s ease-out forwards;

	> div {
		transform: translate(-25px, 5px);
	}

	@media (max-width: 768px) {
		width: 100%;
		margin: 0 20px;
	}
`;

const ContentContainer = styled.div`
	position: relative;
	min-height: 100vh;
	width: 100%;
	overflow: hidden;
	background-image: radial-gradient(white, #ddd);
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 768px) {
		padding-top: 80px;
		padding-bottom: 80px;
		flex-direction: column;
		justify-content: space-evenly;
	}
`;

const Left = styled.div`
	display: flex;
	flex-direction: column;
	padding: 80px;

	@media (max-width: 768px) {
		padding: 0 20px;
	}
`;

const Right = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	@media (min-width: 769px) {
		flex: 1;
		width: 100%;
	}

	@media (max-width: 768px) {
		width: 100%;
	}
`;

const ComingSoonContainer = styled.div`
	display: flex;
	align-items: center;
	margin-left: 10px;

	opacity: 0;
	transform: translateY(100%);
	animation: ${raise} 1s 2s ease-out forwards;
`;

interface ColorProps {
	color: string;
}

const Line = styled.div`
	width: 40px;
	height: 3px;
	margin-right: 10px;
	border-bottom: solid 3px ${(props: ColorProps) => props.color};
`;

const ComingSoonText = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 800;
	color: ${(props: ColorProps) => props.color};
	max-width: 64rem;
	line-height: 1.9rem;
	font-family: 'Roboto', sans-serif;
	text-transform: uppercase;

	font-size: 2.2rem;
	@media (max-width: 768px) {
		font-size: 2rem;
	}
`;

const Header = styled.h1`
	letter-spacing: 0.3rem;
	color: var(--text-primary);

	opacity: 0;
	transform: translateY(100%);
	animation: ${raise} 1s 2.3s ease-out forwards;

	font-size: 14rem;
	line-height: 10rem;
	margin-bottom: 3rem;
	@media (max-width: 768px) {
		font-size: 10rem;
		line-height: 7rem;
		margin-bottom: 2rem;
	}
`;

const SubHeader = styled.h2`
	font-weight: 500;
	color: var(--text-primary);
	max-width: 64rem;
	line-height: 2.3rem;
	margin-bottom: 3rem;
	font-family: 'Roboto', sans-serif;

	opacity: 0;
	transform: translateY(100%);
	animation: ${raise} 1s 2.6s ease-out forwards;

	font-size: 2rem;
	@media (max-width: 768px) {
		font-size: 1.8rem;
		max-width: 80vw;
	}
`;

const Hero = () => {
	const { active } = useWeb3React();
	const [minting, setMinting] = useState(false);
	const [connecting, setConnecting] = useState(false);
	const [color, setColor] = useState(0);
	const colorRef = useRef(color);
	colorRef.current = color;

	useEffect(() => {
		setInterval(() => {
			if (colorRef.current < 4) setColor(colorRef.current + 1);
			else setColor(0);
		}, 2000);
	}, []);

	return (
		<StyledHero>
			<ContentContainer>
				<Left>
					<ComingSoonContainer>
						<Line color={colors[color]} />
						<ComingSoonText color={colors[color]}>coming soon</ComingSoonText>
					</ComingSoonContainer>
					<Header>uwu crew</Header>
					<SubHeader>
						uwu crew is a collection of 10,000 NFTs on Ethereum and Binance Smart Chain brought to you from the community behind
						Waifusion. Launching mid August.
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
					{/* {!LIVE && <Button onClick={() => console.log('Nothing')}>coming soon</Button>} */}
				</Left>
				<Right>
					<StyledImage color={colors[color]}>
						<Image src={uwu} />
					</StyledImage>
				</Right>
			</ContentContainer>
			<MintPopup show={minting} close={() => setMinting(false)} />
			<ConnectWallet show={connecting} close={() => setConnecting(false)} />
		</StyledHero>
	);
};

export default Hero;
