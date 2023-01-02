import useTranslation from 'next-translate/useTranslation';
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { NEKOUWU_CONTRACT } from 'core/constants';
import NEKOUWU_ABI from '../contracts/nekoUwu.json';
import type { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import { Contract, ethers } from 'ethers';
import { selectTokenIdsHeld, selectTokenIdEligibility } from 'state/reducers/nekouwu';
import { useSelector } from 'react-redux';
import ConnectWallet from './ConnectWallet';
import MERKLE_PROOF from '../assets/data/nftxUwuProofs.json';
import Button from './Button';

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
	border: ${(props: Props) => (props.color ? `solid 2px ${props.color}` : 'solid 2px var(--error)')};
	transition: all 1s;
	background: rgba(255, 255, 255, 0.5);
	font-size: 1.6rem;
	padding: 1rem;
	color: var(--text-primary);
	flex-basis: fit-content;
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

const mapIdEligibility = (uwuIds: Array<number>, tokenIdsEligibility: Array<boolean>) => {
	const ids: { uwuId: number; isClaimed: boolean }[] = [];
	uwuIds.forEach((uwuId, index) => {
		const isClaimed = tokenIdsEligibility[index];
		const idMap = {
			uwuId,
			isClaimed
		};
		ids.push(idMap);
	});

	return ids;
};

const getAvailableTokens = (tokenIdsMap: { uwuId: number; isClaimed: boolean }[]) => {
	const ids: Array<number> = [];
	tokenIdsMap.forEach((tokenIdMap: { isClaimed: any; uwuId: number }) => {
		if (!tokenIdMap.isClaimed) {
			ids.push(tokenIdMap.uwuId);
		}
	});
	return ids;
};

export const NekoUwuClaim = (props: {
	setId: (arg0: any) => void;
	setTip: (arg0: any) => void;
	uwuId: string | undefined;
	tip: string;
	color: string;
}) => {
	const { t } = useTranslation('common');
	const [connecting, setConnecting] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [response, setResponse] = useState('');
	const { account, library } = useWeb3React<Web3Provider>();
	const tokenIds: Array<number> = useSelector(selectTokenIdsHeld);
	const tokenIdsEligibility: Array<boolean> = useSelector(selectTokenIdEligibility);
	const tokenIdsMap = mapIdEligibility(tokenIds, tokenIdsEligibility);
	const availableTokenIds = getAvailableTokens(tokenIdsMap);
	const hasUwuws = tokenIds.length !== 0;
	const hasUnclaimedUwus = availableTokenIds.length !== 0;
	const blockInvalidChar = (e: { key: string; preventDefault: () => any }) => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

	const validate = (uwuId: string | undefined, tipAmount: string): boolean => {
		if (!hasUwuws) {
			setError(t('nekobox.errors.no_uwu'));
			return false;
		}
		if (!uwuId) {
			setError(t('nekobox.errors.invalid_input'));
			return false;
		}
		if (!tipAmount) {
			setError(t('nekobox.errors.invalid_tip'));
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
		if (!validate(props.uwuId, props.tip) || !library) {
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
						color={props.color}
					/>

					<Input
						placeholder={`Insert Tip (eth)`}
						type="number"
						value={props.tip}
						onKeyDown={blockInvalidChar}
						onChange={(e) => {
							props.setTip(e.target.value);
						}}
						color={props.color}
					/>
				</InputContainer>
				{account && hasUnclaimedUwus && (
					<UwuLabel color={'var(--success)'}>
						{availableTokenIds.map((uwuId: number) => `#${uwuId}, `)}
						{t('nekobox.available')}
					</UwuLabel>
				)}
				<ButtonContainer>
					{account ? (
						<Button width={'100%'} disabled={loading} color={props.color} onClick={handleClaim}>
							{loading ? 'Loading' : 'Claim'}
						</Button>
					) : (
						<Button width={'100%'} disabled={connecting} color={props.color} onClick={() => setConnecting(true)}>
							{t('nekobox.connect')}
						</Button>
					)}
				</ButtonContainer>
			</IdContainer>
			<ConnectWallet show={connecting} close={() => setConnecting(false)} color={props.color} />
		</>
	);
};
