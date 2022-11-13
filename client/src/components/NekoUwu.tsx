import useTranslation from 'next-translate/useTranslation';
import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';
import Footer from './Footer';
import nekobox_nftx from '../assets/nekobox/nekobox_nftx.svg';
import { UwuSearch } from './UwuSearch';
import { NekoUwuClaim } from './NekoUwuClaim';

const colors: string[] = ['var(--bg-01)'];

interface ContentContainerProps {
	color: string;
}

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

const Content = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 150em;
	align-items: center;
	padding: 10rem;

	@media (max-width: 768px) {
		margin: 3rem 2rem;
	}
`;

const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: 768px) {
		margin: 6rem 3rem;
	}
`;

const Header = styled.h1`
	font-weight: 700;
	color: var(--text-primary);
	margin: 3rem 0;
	text-align: center;

	font-size: 8rem;
	@media (max-width: 768px) {
		font-size: 4.5rem;
		margin: 3rem;
		line-height: 4rem;
		text-align: center;
	}
`;

const SubHeader = styled.div`
	font-weight: 500;
	color: var(--text-primary);
	max-width: 70%;
	margin: 3rem 0;
	opacity: 0;
	transform: translateY(100%);
	animation: ${raise} 1s 1.6s ease-out forwards;

	font-size: 2rem;
	line-height: 2.3rem;
	@media (max-width: 768px) {
		font-size: 1.6rem;
		line-height: 2rem;
		margin: 3rem;
	}
`;

const SearchContainer = styled.div`
	display: flex;
	opacity: 0;
	margin: 3rem 0;
	flex-direction: column;
	transform: translateY(100%);
	animation: ${raise} 1s 1.6s ease-out forwards;
`;

const NekoUwu = () => {
	const { t } = useTranslation('common');
	const [colorIndex, setColor] = useState(0);
	const [searchInput, setSearchInput] = useState('');
	const [claimId, setClaimId] = useState();
	const [tipAmount, setTipAmount] = useState();

	const colorIndexRef = useRef(colorIndex);
	colorIndexRef.current = colorIndex;
	const color = colors[colorIndex % colors.length];
	const getSearchValue = (value: string) => {
		setSearchInput(value);
	};
	useEffect(() => {
		setInterval(() => {
			setColor(colorIndexRef.current + 1);
		}, 5000);
	}, []);

	return (
		<StyledHero>
			<ContentContainer color={color}>
				<Content>
					<Header>{t('nekobox.header')}</Header>
					<SubHeader>{t('nekobox.subheader')}</SubHeader>
					<NekoUwuClaim color={color} uwuId={claimId} setId={setClaimId} tip={tipAmount} setTip={setTipAmount} />
					<SearchContainer>
						<SubHeader>{t('nekobox.eligibility')}</SubHeader>
						<UwuSearch initValue={searchInput} setValue={getSearchValue} />
					</SearchContainer>
				</Content>
				<ImageContainer>
					<Image src={nekobox_nftx} />
				</ImageContainer>
			</ContentContainer>
			<Footer />
		</StyledHero>
	);
};

export default NekoUwu;
