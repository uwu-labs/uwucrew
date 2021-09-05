import { useWeb3React } from '@web3-react/core';
import React from 'react';
import ConnectWallet from './ConnectWallet';

interface Props {
	color: string;
}

const ForceConnect = ({ color }: Props) => {
	const { active } = useWeb3React();

	return (
		<ConnectWallet
			show={!active}
			close={() => {
				console.log('meow');
			}}
			color={color}
		/>
	);
};

export default ForceConnect;
