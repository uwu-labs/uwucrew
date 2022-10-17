import Button from './Button';
import React from 'react';
import styled from 'styled-components';
import useTranslation from 'next-translate/useTranslation';
import { Contract } from 'ethers';
import { goerliProvider, NEKOUWU_CONTRACT } from 'core/constants';
import NEKOUWU_ABI from '../contracts/nekoUwu.json';

const SearchInput = styled.input`
	padding: 1.5rem 1.5rem;
	margin: 3rem;
	border-radius: 1.5rem;
	border: 0;
	letter-spacing: 0.1rem;
	color: rgb(255, 255, 255);
	color: rgb(255, 255, 255);
	background: var(--bg-01);
	opacity: 0.7;
	height: 5rem;
	font-size: 2rem;
	line-height: 2.3rem;

	&::placeholder {
		color: rgb(255, 255, 255);
	}

	&:focus {
		outline: none;
	}

	@media (max-width: 768px) {
		font-size: 1.6rem;
		line-height: 2rem;
		margin: 3rem;
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

export const UwuSearch = (props: { setValue: (arg0: any) => void; initValue: string | undefined }) => {
	const updateSearchValue = (event: { target: { value: any } }) => {
		props.setValue(event.target.value);
	};
	const diabled = `${props.initValue}`.length <= 0;
	const { t } = useTranslation('common');

	if (props.initValue) {
		console.log(parseAndConvertSearch(props.initValue));
	}

	const handleSubmit = async () => {
		if (props.initValue) {
			const searchVal = Array.from(parseAndConvertSearch(props.initValue));
			const contract = new Contract(NEKOUWU_CONTRACT, NEKOUWU_ABI, goerliProvider);
			const res = await fetchEligibility(contract, searchVal);
			console.log(`CLAIMED`, res);
			return res;
		}
		return [];
	};

	return (
		<>
			<SearchInput type="text" placeholder="ex: 308, 345," value={props.initValue} onChange={updateSearchValue} />
			<Button disabled={diabled} color="var(--bg-01)" onClick={handleSubmit}>
				{t('nekobox.search')}
			</Button>
		</>
	);
};
