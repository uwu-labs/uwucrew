import useTranslation from 'next-translate/useTranslation';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Contract } from 'ethers';
import { goerliProvider, NEKOUWU_CONTRACT } from 'core/constants';
import NEKOUWU_ABI from '../contracts/nekoUwu.json';

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
	gap: 3rem;
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
`;

const UwuLabel = styled.div`
	height: 100%;
	transition: all 1s;
	min-width: 3rem;
	font-size: 1.6rem;
	padding: 1rem;
	color: #0abf27;
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
	const claimed: boolean[] = [];
	const ids: number[] = [];
	const [queryIds, setQueryIds] = useState(ids);
	const [idEligibility, setidEligibility] = useState(claimed);

	const handleSubmit = async () => {
		if (props.initValue) {
			const input = Array.from(parseAndConvertSearch(props.initValue));
			const contract = new Contract(NEKOUWU_CONTRACT, NEKOUWU_ABI, goerliProvider);
			const res = await fetchEligibility(contract, input);
			setQueryIds(input);
			setidEligibility(res);
		}
	};

	const zipped = queryIds.map((x, i) => [x, idEligibility[i]]);
	const availableIds = zipped.filter(([, isClaimed]) => !isClaimed);
	const hasInputIds = queryIds.length !== 0;
	const isClaimed = availableIds.length === 0;

	return (
		<UwuSearchContainer>
			<SearchContainer>
				<Input
					placeholder={`ex: 308, 345,`}
					type="text"
					value={props.initValue}
					onChange={(e) => {
						props.setValue(e.target.value);
						setQueryIds([]);
					}}
				/>
				<SearchButton disabled={diabled} onClick={handleSubmit} color={props.color}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
						<path d="M 13.261719 14.867188 L 15.742188 17.347656 C 15.363281 18.070313 15.324219 18.789063 15.722656 19.1875 L 20.25 23.714844 C 20.820313 24.285156 22.0625 23.972656 23.015625 23.015625 C 23.972656 22.058594 24.285156 20.820313 23.714844 20.25 L 19.191406 15.722656 C 18.789063 15.324219 18.070313 15.363281 17.347656 15.738281 L 14.867188 13.261719 Z M 8.5 0 C 3.804688 0 0 3.804688 0 8.5 C 0 13.195313 3.804688 17 8.5 17 C 13.195313 17 17 13.195313 17 8.5 C 17 3.804688 13.195313 0 8.5 0 Z M 8.5 15 C 4.910156 15 2 12.089844 2 8.5 C 2 4.910156 4.910156 2 8.5 2 C 12.089844 2 15 4.910156 15 8.5 C 15 12.089844 12.089844 15 8.5 15 Z" />
					</svg>
				</SearchButton>
			</SearchContainer>
			{hasInputIds && !isClaimed && (
				<UwuLabel>
					{availableIds.map(([id]) => `#${id}, `)}
					{t('nekobox.available')}
				</UwuLabel>
			)}
			{hasInputIds && isClaimed && (
				<UwuLabel>
					{queryIds.map((id) => `#${id}, `)}
					{t('nekobox.claimed')}
				</UwuLabel>
			)}
		</UwuSearchContainer>
	);
};
