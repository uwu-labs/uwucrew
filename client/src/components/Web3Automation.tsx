import type { Web3Provider } from '@ethersproject/providers';
import { NEKOUWU_CONTRACT } from 'core/constants';
import { useWeb3React } from '@web3-react/core';
import { BigNumber, Contract } from 'ethers';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectReload } from 'state/reducers/uwu';
// import { metaMask } from './ConnectWallet';
import NEKOUWU_ABI from '../contracts/nekoUwu.json';
import { setTokenIdsHeld, setTokenIdsEligibility } from 'state/reducers/nekouwu';
import { bnToNumber } from 'lib/bigNumber';

const Web3Automation = () => {
	const dispatch = useDispatch();
	const { library, account, chainId } = useWeb3React<Web3Provider>();
	const reload = useSelector(selectReload);

	// const autoConnect = async (): Promise<void> => {
	// 	const authorized = await metaMask.isAuthorized();
	// 	if (!active && authorized) {
	// 		await activate(metaMask);
	// 	}
	// };

	// useEffect(() => {
	// 	void autoConnect();
	// }, []);

	const signer = library?.getSigner(String(account));
	const nekoUwuContract = new Contract(NEKOUWU_CONTRACT, NEKOUWU_ABI, signer);
	const getTokenIdsAvailable = async () => {
		if (!account) return;
		const response: Array<BigNumber> = await nekoUwuContract.allTokenIdsHeldBy(account);
		const numericRespose = response.map((tokenId) => bnToNumber(tokenId));
		const idsEligibility = await getIdEligibility(nekoUwuContract, numericRespose);
		dispatch(setTokenIdsHeld(numericRespose));
		dispatch(setTokenIdsEligibility(idsEligibility));
	};

	useEffect(() => {
		if (!library) return;
		void getTokenIdsAvailable();
	}, [account, chainId, library, reload]);

	return <></>;
};

export const getIdEligibility = async (nekoUwuContract: Contract, uwuIds: Array<number>) => {
	const response: Array<boolean> = await nekoUwuContract.claimed(uwuIds);
	return response;
};

export default Web3Automation;
