import useTranslation from 'next-translate/useTranslation';
import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';
// import Button from './Button';
import ConnectWallet from './ConnectWallet';
import Footer from './Footer';
import nekobox_nftx from '../assets/nekobox/nekobox_nftx.svg';
import { selectTokenIdsHeld } from 'state/reducers/nekouwu';
import { useSelector } from 'react-redux';
import { UwuSearch } from './UwuSearch';
import type { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';

const colors: string[] = ['var(--bg-01)'];

interface Props {
	color: string;
	inactive?: boolean;
}

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

const InputContainer = styled.div`
	display: flex;
	opacity: 0;
	transform: translateY(100%);
	animation: ${raise} 1s 1.6s ease-out forwards;
	gap: 3rem;
`;

const IdContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const Input = styled.input`
	height: 100%;
	text-align: center;
	border: solid 2px var(--bg-01);
	transition: all 1s;
	background: rgba(255, 255, 255, 0.5);
	font-size: 1.6rem;
	padding: 1rem;
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

const UwuLabel = styled.div`
	height: 100%;
	transition: all 1s;
	min-width: 3rem;
	font-size: 1.6rem;
	padding: 1rem;
	color: #0abf27;
	-moz-appearance: textfield;

	::-webkit-outer-spin-button {
		display: none;
	}
	::-webkit-inner-spin-button {
		display: none;
	}

	overflow-x: hidden;
	overflow-y: scroll;
	max-width: fit-content;

	@media (max-width: 768px) {
		width: 100%;
		flex: 1;
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

const Button = styled.button`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 1s;
	color: white;
	font-size: 2.2rem;
	font-weight: 500;
	cursor: pointer;
	padding: 0 5rem;
	text-transform: none;
	pointer-events: ${(props: Props) => (props.inactive ? 'none' : 'auto')};
	height: 5rem;
	width: 100%;

	transition: background-color 0.3s;
	background-color: ${(props: Props) => props.color};

	@media (max-width: 768px) {
		width: 100%;
	}
`;

const ButtonContainer = styled.div`
	margin-top: 3rem;
	margin-left: auto;
	margin-right: auto;
	width: 100%;

	opacity: 0;
	transform: translateY(100%);
	animation: ${raise} 1s 2.2s ease-out forwards;

	@media (max-width: 768px) {
		width: 100%;
	}
`;

/*
	TODO: Clean up CSS common styled compontents to be imported rather than redefined. Work on Claim func
 */
const NekoUwu = () => {
	const [connecting, setConnecting] = useState(false);
	const { account } = useWeb3React<Web3Provider>();
	console.log(`account: ${account}`);
	const [colorIndex, setColor] = useState(0);
	const colorIndexRef = useRef(colorIndex);
	colorIndexRef.current = colorIndex;
	const color = colors[colorIndex % colors.length];
	const { t } = useTranslation('common');
	const tokenIds = useSelector(selectTokenIdsHeld);
	const [searchInput, setSearchInput] = useState('');
	const diabled = tokenIds.length === 0;
	console.log(tokenIds, diabled);
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
					<IdContainer>
						<InputContainer>
							<Input placeholder={`Insert uwu #`} type="number" />
							<Input placeholder={`Insert Tip`} type="number" />
						</InputContainer>
						{account && (
							<UwuLabel>
								{tokenIds.map((tokenId) => `#${tokenId}, `)}
								{t('nekobox.avaliable')}
							</UwuLabel>
						)}
						<ButtonContainer>
							{account ? (
								<Button
									disabled={diabled}
									color={color}
									onClick={() => (window as any).open('https://opensea.io/collection/uwucrew', '_blank').focus()}
								>
									{t('nekobox.claim')}
								</Button>
							) : (
								<Button disabled={connecting} color={color} onClick={() => setConnecting(true)}>
									{t('nekobox.connect')}
								</Button>
							)}
						</ButtonContainer>
					</IdContainer>
					<SearchContainer>
						<SubHeader>{t('nekobox.eligibility')}</SubHeader>
						<UwuSearch initValue={searchInput} setValue={getSearchValue} />
					</SearchContainer>
				</Content>
				<ImageContainer>
					<Image src={nekobox_nftx} />
				</ImageContainer>
			</ContentContainer>
			<ConnectWallet show={connecting} close={() => setConnecting(false)} color={color} />
			<Footer />
		</StyledHero>
	);
};

export default NekoUwu;
