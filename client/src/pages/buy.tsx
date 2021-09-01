import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import GlobalStyles from 'styles/GlobalStyles';
import Header from '../components/Header';
import OwnedTickets from 'components/OwnedTickets';
import ForceConnect from 'components/ForceConnect';
import { LIVE } from 'core/constants';

const StyledBuy = styled.div`
	display: flex;
	flex-direction: column;
	width: 100vw;
	min-height: 100vh;
	background-color: var(--bg-04);
	background-image: radial-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.75));
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

const BuyPage: NextPage = () => {
	if (!LIVE) return <></>;

	return (
		<StyledBuy>
			{/* <MintPopup show={true} close={() => console.log('emeo')} /> */}
			<ForceConnect />
			<GlobalStyles />
			<Header />
			<Container>
				<HeaderText>Buy uwu-tickets</HeaderText>
				<OwnedTickets />
			</Container>
		</StyledBuy>
	);
};

export default BuyPage;
