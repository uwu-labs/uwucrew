import useTranslation from 'next-translate/useTranslation';
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { NEKOUWU_CONTRACT } from 'core/constants';
import NEKOUWU_ABI from '../contracts/nekoUwu.json';
import type { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import { Contract, ethers } from 'ethers';
import { selectTokenIdsHeld } from 'state/reducers/nekouwu';
import { useSelector } from 'react-redux';
import ConnectWallet from './ConnectWallet';
import MERKLE_PROOF from '../assets/data/nftxUwuProofs.json';

interface Props {
	color: string;
	inactive?: boolean;
}

interface Errors {
	code: string;
	reason: string;
}

const ERRORS: Errors[] = [
	{
		code: 'INSUFFICIENT_FUNDS',
		reason: 'Insufficient funds to cover transaction cost'
	},
	{
		code: 'INVALID_ARGUMENT',
		reason: 'Invalid tip payable amount'
	},
	{
		code: 'UNPREDICTABLE_GAS_LIMIT',
		reason: 'Drop already claimed'
	},
	{
		code: 'ACTION_REJECTED',
		reason: 'User rejected transaction'
	}
];

const raise = keyframes`
  from {
	  opacity: 0;
	transform: translateY(100%);
  }
  to {
	  opacity: 1;
	transform: translateY(0);
  }
`;

const InputContainer = styled.div`
	display: flex;
	opacity: 0;
	transform: translateY(100%);
	animation: ${raise} 1s 1.6s ease-out forwards;
	gap: 3rem;
`;

const Input = styled.input`
	height: 100%;
	text-align: center;
	border: solid 2px var(--bg-01);
	transition: all 1s;
	background: rgba(255, 255, 255, 0.5);
	font-size: 1.6rem;
	padding: 1rem;
	color: var(--text-primary);
	-moz-appearance: textfield;

	::-webkit-outer-spin-button {
		display: none;
	}
	::-webkit-inner-spin-button {
		display: none;
	}

	@media (max-width: 768px) {
		width: 100%;
		flex: 1;
	}
`;

const Button = styled.button`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 1s;
	color: white;
	font-size: 2.2rem;
	font-weight: 500;
	cursor: pointer;
	padding: 0 5rem;
	text-transform: none;
	pointer-events: ${(props: Props) => (props.inactive ? 'none' : 'auto')};
	height: 5rem;
	width: 100%;

	transition: background-color 0.3s;
	background-color: ${(props: Props) => props.color};

	@media (max-width: 768px) {
		width: 100%;
	}
`;

const ButtonContainer = styled.div`
	margin-top: 3rem;
	margin-left: auto;
	margin-right: auto;
	width: 100%;

	opacity: 0;
	transform: translateY(100%);
	animation: ${raise} 1s 2.2s ease-out forwards;

	@media (max-width: 768px) {
		width: 100%;
	}
`;

const IdContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const UwuLabel = styled.div`
	height: 100%;
	transition: all 1s;
	min-width: 3rem;
	font-size: 1.6rem;
	padding: 1rem;
	color: ${(props: Props) => props.color};
	max-width: fit-content;
	animation: ${raise} 1s 1.6s ease-out forwards;
	margin: 2rem 0;

	-moz-appearance: textfield;

	::-webkit-outer-spin-button {
		display: none;
	}
	::-webkit-inner-spin-button {
		display: none;
	}

	@media (max-width: 768px) {
		width: 100%;
		flex: 1;
	}
`;

const Error = styled.div`
	font-weight: 700;
	color: var(--error);
	max-width: 64rem;
	line-height: 2.3rem;
	margin: 3rem;
	word-break: break-all;
	font-size: 1.6rem;

	@media (max-width: 768px) {
		font-size: 1.2rem;
		max-width: 80vw;
	}
`;

const fetchProof = (strId: string) => {
	let proofs: string[] = [];
	for (const [k, v] of Object.entries(MERKLE_PROOF)) {
		if (k === strId) {
			proofs = v;
		}
	}
	return proofs;
};

const parseError = (response: any) => {
	let errMsg = response;
	errMsg = ERRORS.find((err) => {
		return err.code === response.code;
	});
	return errMsg.reason;
};

export const NekoUwuClaim = (props: {
	setId: (arg0: any) => void;
	setTip: (arg0: any) => void;
	uwuId: string | undefined;
	tip: string | undefined;
	color: string;
}) => {
	const { t } = useTranslation('common');
	const [connecting, setConnecting] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [response, setResponse] = useState('');
	const { account, library } = useWeb3React<Web3Provider>();
	const tokenIds: Array<number> = useSelector(selectTokenIdsHeld);
	const hasUwuws = tokenIds.length !== 0;
	const blockInvalidChar = (e: { key: string; preventDefault: () => any }) => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

	const validate = (uwuId: string | undefined): boolean => {
		if (!hasUwuws) {
			setError(t('nekobox.errors.no_uwu'));
			return false;
		}
		if (!uwuId) {
			setError(t('nekobox.errors.invalid_input'));
			return false;
		}
		let value = -1;
		try {
			value = Number(uwuId);
		} catch {
			setError(t('nekobox.errors.invalid_input'));
			return false;
		}
		if (value < 0 || value > 9669) {
			setError(t('nekobox.errors.zero_or_more'));
			return false;
		}
		if (value % 1 !== 0) {
			setError(t('nekobox.errors.integer'));
			return false;
		}
		if (!tokenIds.includes(value)) {
			setError(t('nekobox.errors.token_not_held'));
			return false;
		}
		setError('');
		return true;
	};

	const claim = async (contract: Contract, uwuId: number, proof: string[], tipAmount: string | undefined) => {
		const tipVal = tipAmount ? tipAmount : 0;
		const tip = { value: ethers.utils.parseEther(`${tipVal}`) };
		await contract
			.claim(uwuId, proof, tip)
			.then((receipt: any) => {
				receipt
					.wait()
					.then(() => {
						console.log('Claim submitted');
					})
					.finally(() => {
						setLoading(false);
						setResponse('Claim succesfully submitted!');
					});
			})
			.catch((err: any) => {
				setLoading(false);
				setError(parseError(err));
			});
	};
	const handleClaim = async () => {
		setLoading(true);
		if (!validate(props.uwuId) || !library) {
			setLoading(false);
			return;
		}
		if (account) {
			const id = Number(props.uwuId);
			const strId = `${id}`;
			if (MERKLE_PROOF.hasOwnProperty(strId)) {
				const proof = fetchProof(strId);
				const signer = library?.getSigner(account);
				const contract = new Contract(NEKOUWU_CONTRACT, NEKOUWU_ABI, signer);
				await claim(contract, id, proof, props.tip);
			} else {
				setLoading(false);
			}
		}
	};

	return (
		<>
			{response && <UwuLabel color={'var(--success)'}>{response}</UwuLabel>}
			{error && <Error>{error}</Error>}

			<IdContainer>
				<InputContainer>
					<Input
						placeholder={`Insert uwu #`}
						type="number"
						value={props.uwuId}
						onKeyDown={blockInvalidChar}
						onChange={(e) => {
							props.setId(e.target.value);
						}}
					/>
					<Input
						placeholder={`Insert Tip (eth)`}
						type="number"
						value={props.tip}
						onKeyDown={blockInvalidChar}
						onChange={(e) => {
							props.setTip(e.target.value);
						}}
					/>
				</InputContainer>
				{account && hasUwuws && (
					<UwuLabel color={'var(--success)'}>
						{tokenIds.map((tokenId) => `#${tokenId}, `)}
						{t('nekobox.available')}
					</UwuLabel>
				)}
				<ButtonContainer>
					{account ? (
						<Button disabled={loading} color={props.color} onClick={handleClaim}>
							{loading ? 'Loading' : 'Claim'}
						</Button>
					) : (
						<Button disabled={connecting} color={props.color} onClick={() => setConnecting(true)}>
							{t('nekobox.connect')}
						</Button>
					)}
				</ButtonContainer>
			</IdContainer>
			<ConnectWallet show={connecting} close={() => setConnecting(false)} color={props.color} />
		</>
	);
};
