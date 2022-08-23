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
	qrcode: true
});

const Content = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Label = styled.div`
	font-weight: 500;
	color: var(--text-primary);
	line-height: 2.3rem;
	max-width: 60rem;

	font-size: 2rem;
	margin-bottom: 2rem;
	@media (max-width: 768px) {
		font-size: 1.6rem;
		line-height: 2rem;
		max-width: 100%;
		margin-bottom: 1rem;
	}
`;

interface OptionProps {
	color: string;
}

const Option = styled.button`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 1.5rem;
	padding: 1.3rem 0;
	cursor: pointer;
	color: white;
	font-size: 2.2rem;
	font-weight: 500;
	text-transform: uppercase;

	transition: background-color 0.3s;
	background-color: ${(props: OptionProps) => props.color};

	transition: all 1s;
	:hover {
		opacity: 0.8;
	}

	@media (max-width: 768px) {
		margin-top: 1rem;
	}
`;

interface Props {
	show: boolean;
	close: () => void;
	color: string;
}

const ConnectWallet = ({ show, close, color }: Props) => {
	const { activate } = useWeb3React();

	const connect = async (connector: any) => {
		await activate(connector);
		close();
	};

	return (
		<Popup
			color={color}
			show={show}
			close={close}
			header="Connect Wallet"
			content={
				<Content>
					<Label>Connect your wallet to mint uwus!</Label>
					<Option onClick={() => connect(metaMask)} color={color}>
						Metamask
					</Option>
					<Option onClick={() => connect(walletConnect)} color={color}>
						Wallet Connect
					</Option>
				</Content>
			}
		/>
	);
};

export default ConnectWallet;
