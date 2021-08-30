import { useWeb3React } from '@web3-react/core';
import React from 'react';
import ConnectWallet from './ConnectWallet';

const ForceConnect = () => {
	const { active } = useWeb3React();

	return <ConnectWallet show={!active} close={() => {}} />;
};

export default ForceConnect;
