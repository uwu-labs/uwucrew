import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import GlobalStyles from 'styles/GlobalStyles';
import Image from 'next/image';

import Header from '../components/Header';
import ticket from '../assets/tickets/uwu_coin.gif';
import OwnedTickets from 'components/OwnedTickets';
import ForceConnect from 'components/ForceConnect';
import { LIVE } from 'core/constants';
import { useSelector } from 'react-redux';
import { selectBuyPrice, selectIsLocked, selectRemaining, selectStartTime, selectWave } from 'state/reducers/uwu';

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

const Ticket = styled.div`
	width: 40rem;
`;

const BuyPage: NextPage = () => {
	const buyPrice = useSelector(selectBuyPrice);
	const wave = useSelector(selectWave);
	const remaining = useSelector(selectRemaining);
	const isLocked = useSelector(selectIsLocked);
	const startTime = useSelector(selectStartTime);

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
					<Ticket>
						<Image src={ticket} />
					</Ticket>
					<Center>
						<Label>{`Tickets Remaining: ${remaining}`}</Label>
						<Label>{`Buy Price: ${buyPrice}`}</Label>
						<Label>{`Wave: ${wave}`}</Label>
						<Label>{`isLocked: ${isLocked}`}</Label>
						<Label>{`Start Time: ${startTime}`}</Label>
					</Center>
					<Ticket>
						<Image src={ticket} />
					</Ticket>
				</Content>
			</Container>
		</StyledBuy>
	);
};

export default BuyPage;
