import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import GlobalStyles from 'styles/GlobalStyles';
import Image from 'next/image';

import uwu from '../assets/girls/mint.jpg';
import Header from '../components/Header';
import ForceConnect from 'components/ForceConnect';
import Footer from 'components/Footer';
import Countdown from 'components/Countdown';
import data from '../assets/data/bsc_proofs.json';
import { useWeb3React } from '@web3-react/core';
import abi from '../contracts/NFTMerkleDistributor.json';
import { Contract } from 'ethers';
import { BSC_CLAIM } from 'core/constants';
import MintBscInput from 'components/MintBscInput';

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
	const { account, chainId, library } = useWeb3React();
	const [balance, setBalance] = useState(0);
	const [index, setIndex] = useState(0);
	const [proof, setProof] = useState<string[]>([]);
	const [total, setTotal] = useState(0);

	const startDate = () => {
		const startTime = new Date(0);
		startTime.setUTCSeconds(1630877400);
		return startTime;
	};

	const deadline = () => {
		const deadline = startDate();
		deadline.setDate(deadline.getDate() + 4);
		return deadline;
	};

	const getbalance = async (): Promise<number> => {
		if (!account) return 0;
		const address = account;
		const accountData = (data as any)[address];
		if (!accountData) return 0;
		if (!library) return 0;
		const contract = new Contract(BSC_CLAIM, abi, library?.getSigner());
		const minted = await contract.mintedPerAccount(address);
		setBalance(Number(accountData.Amount) - minted.toNumber());
		setIndex(accountData.Index);
		setProof(accountData.Proof);
		setTotal(Number(accountData.Amount));
		return balance;
	};

	useEffect(() => {
		void getbalance();
	}, [account, chainId, library]);

	return (
		<StyledMint>
			<ForceConnect color="var(--bg-03)" />
			<GlobalStyles />
			<Header />

			<Container>
				<HeaderContainer>
					<HeaderText>Mint uwuws!</HeaderText>
				</HeaderContainer>
				<Content>
					<Uwu>
						<Image src={uwu} />
					</Uwu>
					<Body>
						<BodyHeader>Redeem Uwuws</BodyHeader>
						<Label>{`If you purchased an uwu-ticket with BSC WET then you can redeem your uwus here! You have ${balance} tickets remaining to mint uwuws with.`}</Label>
						<Label>Please redeem your uwu-tickets before the time expires or else you may lose your uwus</Label>
						<Countdown date={deadline()} />
						<MintBscInput balance={balance} refresh={() => getbalance()} index={index} address={account} proof={proof} total={total} />
					</Body>
				</Content>
			</Container>
			<Footer />
		</StyledMint>
	);
};

export default MintPage;
