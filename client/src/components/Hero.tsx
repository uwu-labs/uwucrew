import useTranslation from 'next-translate/useTranslation';
import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../assets/logos/logo.svg';
import Image from 'next/image';
import Button from './Button';
import ConnectWallet from './ConnectWallet';
import Footer from './Footer';
import RotatingImage from './RotatingImage';

const colors: string[] = ['var(--bg-01)'];

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

const LogoContainer = styled.div`
	display: flex;
	align-items: center;
	margin-top: 1rem;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 5rem;
	cursor: pointer;

	opacity: 0;
	animation: ${raise} 1s 1.3s ease-out forwards;

	@media (min-width: 768px) {
		width: 42.5rem;
	}
`;

const SubHeader = styled.h2`
	font-weight: 500;
	color: var(--text-primary);
	max-width: 61rem;
	line-height: 2.3rem;
	margin-bottom: 2rem;

	opacity: 0;
	transform: translateY(100%);
	animation: ${raise} 1s 1.6s ease-out forwards;

	font-size: 2rem;
	@media (max-width: 768px) {
		font-size: 1.6rem;
		text-align: center;
	}
`;

const ButtonContainer = styled.div`
	margin-top: 2rem;
	margin-left: auto;
	margin-right: auto;

	opacity: 0;
	transform: translateY(100%);
	animation: ${raise} 1s 2.2s ease-out forwards;

	@media (max-width: 768px) {
		width: 100%;
	}
`;

const Hero = () => {
	const [connecting, setConnecting] = useState(false);
	const [colorIndex, setColor] = useState(0);
	const colorIndexRef = useRef(colorIndex);
	colorIndexRef.current = colorIndex;
	const { t } = useTranslation('common');

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
					<LogoContainer>
						<Image src={logo} />
					</LogoContainer>
					<SubHeader>{t('general.description')}</SubHeader>
					<ButtonContainer>
						<Button color={color} onClick={() => (window as any).open('https://opensea.io/collection/uwucrew', '_blank').focus()}>
							{t('components.hero.opensea')}
						</Button>
					</ButtonContainer>
				</TextContainer>
			</ContentContainer>
			<ConnectWallet show={connecting} close={() => setConnecting(false)} color={color} />
			<Footer />
		</StyledHero>
	);
};

export default Hero;
