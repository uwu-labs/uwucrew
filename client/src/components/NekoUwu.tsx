import useTranslation from 'next-translate/useTranslation';
import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Footer from './Footer';
import nekobox_logo_black from '../assets/nekobox/nekobox_black.png';
import twitter from '../assets/svgs/socials/twitter.svg';
import foundation from '../assets/svgs/socials/foundation.svg';
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
		padding: 0;
	}
`;

const Image = styled.img`
	width: 100%;
	max-width: 400px;
	height: auto;
`;

const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const SubHeader = styled.div`
	font-weight: 500;
	color: var(--text-primary);
	max-width: 33%;
	margin: 3rem 0;
	opacity: 0;
	transform: translateY(100%);
	animation: ${raise} 1s 1.6s ease-out forwards;

	font-size: 2rem;
	line-height: 2.3rem;
	@media (max-width: 768px) {
		font-size: 1.6rem;
		line-height: 2rem;
		max-width: 100%;
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

const Socials = styled.div`
	margin-top: 1rem;
	display: flex;
	color: var(--text-primary);
	font-size: 2.3rem;
	font-weight: 600;
	opacity: 0;
	justify-content: center;
	transform: translateY(100%);
	animation: ${raise} 1s 1.6s ease-out forwards;

	> a {
		cursor: pointer;
	}

	@media (max-width: 768px) {
		padding: 15px 20px;
	}
`;

const Social = styled(Image)`
	width: 3rem;
	margin: 0 3rem;
`;

const NekoUwu = () => {
	const { t } = useTranslation('common');
	const [colorIndex, setColor] = useState(0);
	const [searchInput, setSearchInput] = useState('');
	const [claimId, setClaimId] = useState('');
	const [tipAmount, setTipAmount] = useState('');

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
					<ImageContainer>
						<Image src={nekobox_logo_black.src} />
					</ImageContainer>
					<Socials>
						<a href="https://twitter.com/Nekoboxhime" target="_blank" rel="noreferrer">
							<Social src={twitter.src} />
						</a>
						<a href="https://foundation.app/@nekobox" target="_blank" rel="noreferrer" style={{ display: 'flex' }}>
							<Social src={foundation.src} />
						</a>
					</Socials>
					<SubHeader>{t('nekobox.subheader')}</SubHeader>
					<NekoUwuClaim color={color} uwuId={claimId} setId={setClaimId} tip={tipAmount} setTip={setTipAmount} />
					<SearchContainer>
						<UwuSearch initValue={searchInput} setValue={getSearchValue} color={color} />
					</SearchContainer>
				</Content>
			</ContentContainer>
			<Footer />
		</StyledHero>
	);
};

export default NekoUwu;
