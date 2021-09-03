import { useWeb3React } from '@web3-react/core';
import { SALE_CONTRACT } from 'core/constants';
import { BigNumber, Contract } from 'ethers';
import { bnToNumber } from 'lib/bigNumber';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
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
		dispatch(setBuyPrice(bnToNumber(response)));
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
		const waveResponse: BigNumber = await contract.wave();
		const response: boolean = await contract.waveLock(waveResponse.toNumber(), account);
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
	}, [account, chainId, library]);

	return <></>;
};

export default Web3Automation;
