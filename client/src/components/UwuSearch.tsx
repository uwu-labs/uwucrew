import useTranslation from 'next-translate/useTranslation';
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Contract } from 'ethers';
import { mainnetProvider, NEKOUWU_CONTRACT } from 'core/constants';
import NEKOUWU_ABI from '../contracts/nekoUwu.json';
import MERKLE_PROOF from '../assets/data/nftxUwuProofs.json';

interface Props {
	color: string;
}

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
		height: fit-content;
	}
`;

const SearchContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	justify-content: center;
`;

const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const SearchButton = styled.button`
	height: 24px;
	width: 24px;
	cursor: pointer;
	margin: 1rem;
`;
const UwuSearchContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const UwuLabel = styled.div`
	height: 100%;
	transition: all 1s;
	min-width: 3rem;
	font-size: 1.6rem;
	padding: 1rem;
	color: ${(props: Props) => props.color};
	max-width: fit-content;

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

const SearchInput = styled.div`
	font-weight: 500;
	color: var(--text-primary);
	opacity: 0;
	transform: translateY(100%);
	animation: ${raise} 1s 1.6s ease-out forwards;
	align-self: center;
	margin: 2rem;
	font-size: 2rem;
	line-height: 2.3rem;
	@media (max-width: 768px) {
		font-size: 1.6rem;
		line-height: 2rem;
	}
`;

const filterClaimableIds = (input: Array<number>) => {
	const claimableIds: number[] = [];
	const unClaimableIds: number[] = [];
	const result = {
		claimableIds,
		unClaimableIds
	};
	input.forEach((id) => {
		if (MERKLE_PROOF.hasOwnProperty(`${id}`)) {
			claimableIds.push(id);
		} else {
			unClaimableIds.push(id);
		}
	});

	return result;
};

const fetchEligibility = async (contract: Contract, uwuIds: Array<number>) => {
	const response: Array<boolean> = await contract.claimed(uwuIds);
	return response;
};

const parseAndConvertSearch = (searchInput: string) => {
	const parseSearchInput = searchInput
		.split(',')
		.filter((x) => x.trim().length && !isNaN(Number(x)))
		.map(Number);
	return new Set(parseSearchInput.filter((x) => Math.trunc(x) < 0 || Math.trunc(x) <= 9669).map((x) => Math.trunc(x)));
};

export const UwuSearch = (props: { setValue: (arg0: any) => void; initValue: string | undefined; color: string }) => {
	const { t } = useTranslation('common');
	const diabled = `${props.initValue}`.length <= 0;
	const [unclaimableQueryIds, seUnclaimabletQueryIds] = useState<Array<number>>([]);
	const [claimableQueryIds, setClaimableQueryIds] = useState<Array<number>>([]);
	const [claimableidEligibility, setClaimableIdEligibility] = useState<Array<boolean>>([]);

	const handleSubmit = async () => {
		if (props.initValue) {
			const input = Array.from(parseAndConvertSearch(props.initValue));
			const ids = filterClaimableIds(input);
			const contract = new Contract(NEKOUWU_CONTRACT, NEKOUWU_ABI, mainnetProvider);
			const idEligibility = await fetchEligibility(contract, ids.claimableIds);

			setClaimableQueryIds(ids.claimableIds);
			seUnclaimabletQueryIds(ids.unClaimableIds);
			setClaimableIdEligibility(idEligibility);
		}
	};

	const zipped = claimableQueryIds.map((x, i) => [x, claimableidEligibility[i]]);
	// Have not been claimed and are NFTX hoodie (claimable)
	const claimableIds = zipped.filter(([, isClaimed]) => !isClaimed);
	// Have been claimed and are NFTX hoodie (claimable)
	const claimedIds = zipped.filter(([, isClaimed]) => isClaimed);

	const hasUnclaimableIds = unclaimableQueryIds.length !== 0;
	const hasClaimable = claimableIds.length !== 0;
	const hasClaimed = claimedIds.length !== 0;

	return (
		<UwuSearchContainer>
			<SearchContainer>
				<InputContainer>
					<SearchInput>{t('nekobox.eligibility')}</SearchInput>
					<Input
						placeholder={`ex: 308, 345,`}
						type="text"
						value={props.initValue}
						onChange={(e) => {
							props.setValue(e.target.value);
							setClaimableQueryIds([]);
							seUnclaimabletQueryIds([]);
						}}
					/>
				</InputContainer>
				<SearchButton disabled={diabled} onClick={handleSubmit} color={props.color}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
						<path d="M 13.261719 14.867188 L 15.742188 17.347656 C 15.363281 18.070313 15.324219 18.789063 15.722656 19.1875 L 20.25 23.714844 C 20.820313 24.285156 22.0625 23.972656 23.015625 23.015625 C 23.972656 22.058594 24.285156 20.820313 23.714844 20.25 L 19.191406 15.722656 C 18.789063 15.324219 18.070313 15.363281 17.347656 15.738281 L 14.867188 13.261719 Z M 8.5 0 C 3.804688 0 0 3.804688 0 8.5 C 0 13.195313 3.804688 17 8.5 17 C 13.195313 17 17 13.195313 17 8.5 C 17 3.804688 13.195313 0 8.5 0 Z M 8.5 15 C 4.910156 15 2 12.089844 2 8.5 C 2 4.910156 4.910156 2 8.5 2 C 12.089844 2 15 4.910156 15 8.5 C 15 12.089844 12.089844 15 8.5 15 Z" />
					</svg>
				</SearchButton>
			</SearchContainer>
			{hasClaimed && (
				<UwuLabel color={'var(--success)'}>
					{claimedIds.map(([id]) => `#${id}, `)}
					{claimedIds.length > 1 ? 'are' : 'is'}
					{t('nekobox.claimed')}
				</UwuLabel>
			)}
			{hasClaimable && (
				<UwuLabel color={'var(--success)'}>
					{claimableQueryIds.map((id) => `#${id}, `)}
					{claimableQueryIds.length > 1 ? 'are' : 'is'}
					{t('nekobox.available')}
				</UwuLabel>
			)}

			{hasUnclaimableIds && (
				<UwuLabel color={'var(--error)'}>
					{unclaimableQueryIds.map((id) => `#${id}, `)}
					{unclaimableQueryIds.length > 1 ? 'are' : 'is'}
					{t('nekobox.unclaimable')}
				</UwuLabel>
			)}
		</UwuSearchContainer>
	);
};
