import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import GlobalStyles from 'styles/GlobalStyles';
import Image from 'next/image';

import uwu from '../assets/girls/buy.jpg';
import Header from '../components/Header';
import OwnedTickets from 'components/OwnedTickets';
import ForceConnect from 'components/ForceConnect';
import { SECONDS_PER_BLOCK, waveLimits } from 'core/constants';
import { useSelector } from 'react-redux';
import { selectBuyPrice, selectIsLocked, selectRemaining, selectStartTime, selectWaveBlockLength } from 'state/reducers/uwu';
import Countdown from 'components/Countdown';
import BuyInput from 'components/BuyInput';
import Footer from 'components/Footer';

const StyledBuy = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100vw;
	min-height: 100vh;
	background-color: var(--bg-04);
	background-image: radial-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.75));
`;

const HeaderContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

const Container = styled.div`
	position: relative;
	width: 100vw;
	display: flex;
	flex-direction: column;
	padding: 6rem;

	@media (max-width: 768px) {
		padding: 2rem;
		margin-top: 5rem;
		margin-bottom: 5rem;
	}
`;

const HeaderText = styled.div`
	font-weight: 700;
	color: var(--bg-04);

	font-size: 10rem;
	@media (max-width: 768px) {
		font-size: 4.5rem;
		white-space: nowrap;
		margin-bottom: 2rem;
	}
`;

const Content = styled.div`
	width: 100%;
	min-height: 70vh;
	display: flex;
	align-items: center;
	justify-content: space-evenly;

	@media (max-width: 768px) {
		flex-direction: column-reverse;
	}
`;

const Body = styled.div`
	display: flex;
	flex-direction: column;

	@media (max-width: 768px) {
		width: 100%;
		margin-top: 3rem;
	}
`;

const BodyHeader = styled.h1`
	letter-spacing: 0.17rem;
	color: var(--text-primary);

	font-size: 8rem;
	line-height: 10rem;
	margin-bottom: 2rem;
	@media (max-width: 768px) {
		font-size: 5rem;
		line-height: 5rem;
		margin-bottom: 1rem;
		white-space: nowrap;
	}
`;

const Label = styled.div`
	font-weight: 500;
	color: var(--text-primary);
	line-height: 2.3rem;
	margin-bottom: 2rem;
	max-width: 60rem;

	font-size: 2rem;
	@media (max-width: 768px) {
		font-size: 1.7rem;
		max-width: 100%;
	}
`;

const Uwu = styled.div`
	width: 30vw;

	@media (max-width: 768px) {
		width: 100%;
		margin-top: 3rem;
	}
`;

const BuyPage: NextPage = () => {
	const buyPrice = useSelector(selectBuyPrice);
	const remaining = useSelector(selectRemaining);
	const isLocked = useSelector(selectIsLocked);
	const startTimeEpocs = useSelector(selectStartTime);
	const waveBlockLength = useSelector(selectWaveBlockLength);

	const [update, setUpdate] = useState(0);

	useEffect(() => {
		setInterval(() => setUpdate(Math.random() + update), 1000);
	}, []);

	const startDate = () => {
		const startTime = new Date(0);
		startTime.setUTCSeconds(startTimeEpocs);
		return startTime;
	};

	const live = new Date() >= startDate();

	const wave = (): number => {
		const startTime = new Date(0);
		startTime.setUTCSeconds(startTimeEpocs);
		const now = new Date();
		if (now.getTime() < startTime.getTime()) return 1;
		const secondsPast = (now.getTime() - startTime.getTime()) / 1000;
		const blocksPast = secondsPast / SECONDS_PER_BLOCK;
		const wavesPast = Math.floor(blocksPast / waveBlockLength);
		return 1 + wavesPast;
	};

	const nextWave = (): Date => {
		const startTime = new Date(0);
		startTime.setUTCSeconds(startTimeEpocs);
		const secondsToAdd = wave() * waveBlockLength * SECONDS_PER_BLOCK;
		startTime.setSeconds(startTime.getSeconds() + secondsToAdd);
		return startTime;
	};

	return (
		<StyledBuy>
			<ForceConnect color="var(--bg-04)" />
			<GlobalStyles />
			<Header />

			<Container>
				<HeaderContainer>
					<HeaderText>Buy uwu-tickets</HeaderText>
					<OwnedTickets color="var(--bg-04)" />
				</HeaderContainer>
				<Content>
					<Uwu>
						<Image src={uwu} />
					</Uwu>
					<Body>
						<BodyHeader>{live ? 'Sale Live!!' : 'Starting Soon!'}</BodyHeader>
						<Label>{`uwu-tickets are redeemable for uwucrew NFTs! There are ${remaining} remaining for sale and they cost ${buyPrice} ETH to buy. The current wave is ${wave()} and you can get ${
							isLocked ? 0 : waveLimits[wave() - 1] || 32
						} more tickets this wave.`}</Label>
						{!live && <Countdown date={startDate()} />}
						{live && isLocked && <Countdown date={nextWave()} />}
						{live && !isLocked && <BuyInput max={waveLimits[wave() - 1] || 32} />}
					</Body>
				</Content>
			</Container>
			<Footer />
		</StyledBuy>
	);
};

export default BuyPage;
