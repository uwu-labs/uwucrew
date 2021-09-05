import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import GlobalStyles from 'styles/GlobalStyles';
import Image from 'next/image';

import uwu from '../assets/girls/mint.jpg';
import Header from '../components/Header';
import OwnedTickets from 'components/OwnedTickets';
import ForceConnect from 'components/ForceConnect';
import { useSelector } from 'react-redux';
import Footer from 'components/Footer';
import { selectOwnedTickets } from 'state/reducers/uwu';
import MintInput from 'components/MintInput';

const StyledMint = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100vw;
	min-height: 100vh;
	background-color: var(--bg-03);
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
	color: var(--bg-03);

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
		font-size: 4.5rem;
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

const MintPage: NextPage = () => {
	const balance = useSelector(selectOwnedTickets);

	return (
		<StyledMint>
			<ForceConnect color="var(--bg-03)" />
			<GlobalStyles />
			<Header />

			<Container>
				<HeaderContainer>
					<HeaderText>Mint uwuws!</HeaderText>
					<OwnedTickets color="var(--bg-03)" />
				</HeaderContainer>
				<Content>
					<Uwu>
						<Image src={uwu} />
					</Uwu>
					<Body>
						<BodyHeader>Redeem Tickets</BodyHeader>
						<Label>{`You can mint an uwucrew NFT with your uwu-tickets! You have ${balance} tickets remaining to mint uwuws with. uwus are revealed instantly and are completely randomised.`}</Label>
						<div>
							<MintInput />
						</div>
					</Body>
				</Content>
			</Container>
			<Footer />
		</StyledMint>
	);
};

export default MintPage;
