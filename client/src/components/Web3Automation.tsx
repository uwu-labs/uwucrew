import { useWeb3React } from '@web3-react/core';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refresh } from 'state/reducers/uwu';
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

	useEffect(() => {
		console.log('meow');
		dispatch(refresh({ library, account }));
	}, [account, chainId]);

	return <></>;
};

export default Web3Automation;
