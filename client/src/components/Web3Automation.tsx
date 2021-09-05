import { useWeb3React } from '@web3-react/core';
import { SALE_CONTRACT, SECONDS_PER_BLOCK } from 'core/constants';
import { BigNumber, Contract } from 'ethers';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectReload,
	setAmountForSale,
	setAmountSold,
	setBuyPrice,
	setIsLocked,
	setOwnedTickets,
	setStartBlock,
	setStartTime,
	setWave,
	setWaveBlockLength
} from 'state/reducers/uwu';

import abi from '../contracts/uwucrewWaveLockSale.json';
import { metaMask } from './ConnectWallet';

const Web3Automation = () => {
	const dispatch = useDispatch();
	const { library, account, chainId, active, activate } = useWeb3React();
	const reload = useSelector(selectReload);

	const autoConnect = async (): Promise<void> => {
		const authorized = await metaMask.isAuthorized();
		if (!active && authorized) {
			await activate(metaMask);
		}
	};

	useEffect(() => {
		void autoConnect();
	}, []);

	const contract = new Contract(SALE_CONTRACT, abi, library?.getSigner());

	const getBalance = async () => {
		if (!account) return;
		const response: BigNumber = await contract.balance(account);
		dispatch(setOwnedTickets(response.toNumber()));
	};
	const getBuyPrice = async () => {
		const response: BigNumber = await contract.buyPrice();
		dispatch(setBuyPrice(response));
	};
	const getStartTime = async () => {
		const response: BigNumber = await contract.startTime();
		dispatch(setStartTime(response.toNumber()));
	};
	const getStartBlock = async () => {
		const response: BigNumber = await contract.startBlock();
		dispatch(setStartBlock(response.toNumber()));
	};
	const getAmountForSale = async () => {
		const response: BigNumber = await contract.amountForSale();
		dispatch(setAmountForSale(response.toNumber()));
	};
	const getAmountSold = async () => {
		const response: BigNumber = await contract.amountSold();
		dispatch(setAmountSold(response.toNumber()));
	};
	const getWave = async () => {
		const response: BigNumber = await contract.wave();
		dispatch(setWave(response.toNumber()));
	};
	const getWaveBlockLength = async () => {
		const response: BigNumber = await contract.waveBlockLength();
		dispatch(setWaveBlockLength(response.toNumber()));
	};
	const getIsLocked = async () => {
		if (!account) return;

		// Getting Start Time
		const startTime = new Date(0);
		const startTimeResponse: BigNumber = await contract.startTime();
		startTime.setUTCSeconds(startTimeResponse.toNumber());

		// Getting Wave Block Length
		const waveBlockLengthResponse: BigNumber = await contract.waveBlockLength();
		const waveBlockLength = waveBlockLengthResponse.toNumber();

		// Calcing Wave
		const now = new Date();
		if (now.getTime() < startTime.getTime()) return;
		const secondsPast = (now.getTime() - startTime.getTime()) / 1000;
		const blocksPast = secondsPast / SECONDS_PER_BLOCK;
		const wavesPast = Math.floor(blocksPast / waveBlockLength);

		// Getting Is Locked
		const response: boolean = await contract.waveLock(wavesPast, account);
		dispatch(setIsLocked(response));
	};

	useEffect(() => {
		if (!library) return;
		void getBalance();
		void getBuyPrice();
		void getStartTime();
		void getStartBlock();
		void getAmountForSale();
		void getAmountSold();
		void getWave();
		void getWaveBlockLength();
		void getIsLocked();
	}, [account, chainId, library, reload]);

	return <></>;
};

export default Web3Automation;
