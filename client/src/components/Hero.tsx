import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Button from './Button';
import ConnectWallet from './ConnectWallet';
import MintPopup from './MintPopup';
import RotatingImage from './RotatingImage';
import Footer from './Footer';
import { useRouter } from 'next/dist/client/router';
import { LIVE } from 'core/constants';
import Countdown from './Countdown';

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

const StyledHero = styled.div`
	position: relative;
	overflow: hidden;
`;

interface ContentContainerProps {
	color: string;
}

const ContentContainer = styled.div`
	min-height: 100vh;
	width: 100%;
	overflow: hidden;
	background-color: ${(props: ContentContainerProps) => props.color};
	background-image: radial-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.75));
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	transition: all 1s;

	@media (max-width: 768px) {
		padding-top: 80px;
		padding-bottom: 80px;
		flex-direction: column-reverse;
		justify-content: space-evenly;
	}
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;

	@media (max-width: 768px) {
		margin: 3rem 2rem;
	}
`;

const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: 768px) {
		width: calc(100vw - 4rem);
		height: calc(100vw - 4rem - 2rem);
		margin: 3rem;
	}
`;

const Header = styled.h1`
	letter-spacing: 0.3rem;
	color: var(--text-primary);

	opacity: 0;
	transform: translateY(100%);
	animation: ${raise} 1s 1.3s ease-out forwards;

	font-size: 14rem;
	line-height: 10rem;
	margin-bottom: 3rem;
	@media (max-width: 768px) {
		font-size: 7.5rem;
		line-height: 5rem;
		margin-bottom: 2rem;
	}
`;

const SubHeader = styled.h2`
	font-weight: 500;
	color: var(--text-primary);
	max-width: 61rem;
	line-height: 2.3rem;
	margin-bottom: 2rem;
	font-family: 'Roboto', sans-serif;

	opacity: 0;
	transform: translateY(100%);
	animation: ${raise} 1s 1.6s ease-out forwards;

	font-size: 2rem;
	@media (max-width: 768px) {
		font-size: 1.6rem;
		max-width: 80vw;
	}
`;

const ButtonContainer = styled.div`
	margin-top: 2rem;

	opacity: 0;
	transform: translateY(100%);
	animation: ${raise} 1s 2.2s ease-out forwards;
`;

const Hero = () => {
	const [minting, setMinting] = useState(false);
	const [connecting, setConnecting] = useState(false);
	const [colorIndex, setColor] = useState(0);
	const colorIndexRef = useRef(colorIndex);
	const router = useRouter();
	colorIndexRef.current = colorIndex;

	const color = colors[colorIndex % colors.length];

	useEffect(() => {
		setInterval(() => {
			setColor(colorIndexRef.current + 1);
		}, 5000);
	}, []);

	return (
		<StyledHero>
			<ContentContainer color={color}>
				<ImageContainer>
					<RotatingImage color={color} activeIndex={colorIndex} />
				</ImageContainer>
				<TextContainer>
					<Header>uwucrew</Header>
					<SubHeader>
						uwucrew is a generative collection of 9670 avatars inspired by anime and pop culture, aiming to be both inclusive and
						expressive. Every uwucrew NFT is completely unique and features up to 9 traits with 120+ assets.
					</SubHeader>
					<SubHeader>uwucrew NFTs will cost 0.06 ETH to mint and are releasing on Sunday 9/5 at 6pm EST / 3pm PST</SubHeader>
					{!LIVE && <Countdown />}
					<ButtonContainer>
						<Button
							inactive={!LIVE}
							color={color}
							onClick={() => {
								if (LIVE) router.replace('/buy');
								else return;
							}}
						>
							{LIVE ? 'Buy Tickets' : 'Coming Soon'}
						</Button>
					</ButtonContainer>
				</TextContainer>
			</ContentContainer>
			<MintPopup show={minting} close={() => setMinting(false)} />
			<ConnectWallet show={connecting} close={() => setConnecting(false)} />
			<Footer />
		</StyledHero>
	);
};

export default Hero;
