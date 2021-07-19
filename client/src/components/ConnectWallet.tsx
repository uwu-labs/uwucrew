import { useWeb3React } from '@web3-react/core';
import React from 'react';
import styled from 'styled-components';
import Popup from './Popup';
import { INFURA_ID } from 'core/constants';
import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';

export const metaMask = new InjectedConnector({
	supportedChainIds: [1, 4]
});

export const walletConnect = new WalletConnectConnector({
	rpc: {
		1: `https://mainnet.infura.io/v3/${INFURA_ID}`,
		4: `https://rinkeby.infura.io/v3/${INFURA_ID}`
	},
	qrcode: true,
	pollingInterval: 12000
});

const Content = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Option = styled.button`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 1rem;
	padding: 1.3rem 0;
	cursor: pointer;
	border: solid 1px var(--text-primary);
`;

type Props = {
	show: boolean;
	close: () => void;
};

const ConnectWallet = (props: Props) => {
	const { activate } = useWeb3React();

	const connect = async (connector: any) => {
		await activate(connector);
		props.close();
	};

	return (
		<Popup
			show={props.show}
			close={props.close}
			header="Select Wallet"
			content={
				<Content>
					<Option onClick={() => connect(metaMask)}>Metamask</Option>
					<Option onClick={() => connect(walletConnect)}>Wallet Connect</Option>
				</Content>
			}
		/>
	);
};

export default ConnectWallet;
