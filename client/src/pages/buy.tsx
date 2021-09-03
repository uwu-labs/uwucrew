import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import GlobalStyles from 'styles/GlobalStyles';
import Image from 'next/image';

import uwu from '../assets/girls/buy.jpg';
import Header from '../components/Header';
import OwnedTickets from 'components/OwnedTickets';
import ForceConnect from 'components/ForceConnect';
import { LIVE, waveLimits } from 'core/constants';
import { useSelector } from 'react-redux';
import { selectBuyPrice, selectIsLocked, selectRemaining, selectStartTime, selectWaveBlockLength } from 'state/reducers/uwu';
import Countdown from 'components/Countdown';
import BuyInput from 'components/BuyInput';

const StyledBuy = styled.div`
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
`;

const Container = styled.div`
	position: relative;
	width: 100vw;
	display: flex;
	flex-direction: column;
	padding: 6rem;
`;

const HeaderText = styled.div`
	font-weight: 700;
	color: var(--bg-04);

	font-size: 10rem;
	@media (max-width: 768px) {
		font-size: 5rem;
	}
`;

const Content = styled.div`
	width: 100%;
	min-height: 70vh;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
`;

const Center = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Label = styled.div`
	font-weight: 500;
	color: var(--text-primary);
	line-height: 2.3rem;
	margin-bottom: 2rem;

	font-size: 2rem;
	@media (max-width: 768px) {
		font-size: 1.6rem;
		max-width: 80vw;
	}
`;

const Uwu = styled.div`
	width: 30vw;
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

	const wave = (): number => {
		const startTime = new Date(0);
		startTime.setUTCSeconds(startTimeEpocs);
		const now = new Date();
		if (now.getTime() < startTime.getTime()) return 1;
		const secondsPast = (now.getTime() - startTime.getTime()) / 1000;
		const blocksPast = secondsPast / 15;
		const wavesPast = Math.floor(blocksPast / waveBlockLength);
		return 1 + wavesPast;
	};

	const nextWave = (): Date => {
		const startTime = new Date(0);
		startTime.setUTCSeconds(startTimeEpocs);
		const secondsToAdd = wave() * waveBlockLength * 15;
		startTime.setSeconds(startTime.getSeconds() + secondsToAdd);
		return startTime;
	};

	if (!LIVE) return <></>;

	return (
		<StyledBuy>
			<ForceConnect />
			<GlobalStyles />
			<Header />

			<Container>
				<HeaderContainer>
					<HeaderText>Buy uwu-tickets</HeaderText>
					<OwnedTickets />
				</HeaderContainer>
				<Content>
					<Uwu>
						<Image src={uwu} />
					</Uwu>
					<Center>
						<Label>{`Tickets Remaining: ${remaining}`}</Label>
						<Label>{`Buy Price: ${buyPrice} ETH`}</Label>
						<Label>{`Current Wave: ${wave()}`}</Label>
						<Label>{`You can get ${isLocked ? 0 : waveLimits[wave() - 1] || 32} more tickets this wave`}</Label>
						<Label>{`Next wave starts in:`}</Label>
						<Countdown date={nextWave()} />
						<BuyInput max={waveLimits[wave() - 1] || 32} />
					</Center>
				</Content>
			</Container>
		</StyledBuy>
	);
};

export default BuyPage;
