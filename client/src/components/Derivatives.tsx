import React, { useState } from 'react';
import derivatives, { DerivativeType } from 'config/derivatives';
import useScreenWidth from 'hooks/use-screen-width';
import styled from 'styled-components';
import DerivativeImage from './DerivativeImage';

const MIN_WIDTH = 350;

const StyledDerivatives = styled.div`
	padding: 5rem;
	padding-top: 10rem;
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	background: var(--bg-03);
	background-image: radial-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.75));

	@media (max-width: 720px) {
		padding: 1rem;
		padding-top: 7rem;
	}
`;

const Filters = styled.div`
	display: flex;
	align-items: center;
	margin: 0 auto;
	margin-bottom: 3rem;

	@media (max-width: 720px) {
		flex-direction: column;
		margin-bottom: 1rem;
	}
`;

const Filter = styled.div`
	display: flex;
	align-items: center;
	margin: 0 2rem;

	@media (max-width: 720px) {
		margin: 0.6rem 0;
	}
`;

const Label = styled.div`
	color: black;
	font-size: 2rem;
	font-weight: 600;
	margin-right: 1rem;
`;

const Dropdown = styled.select`
	border: solid 2px var(--bg-03);
	background: white;
	height: 3rem;
	font-size: 1.6rem;
	font-weight: 500;
	padding: 0 0.5rem;
	cursor: pointer;
`;

const Option = styled.option``;

const Input = styled.input`
	border: solid 2px var(--bg-03);
	background: white;
	height: 3rem;
	font-size: 1.6rem;
	font-weight: 500;
	padding: 0 0.5rem;
	cursor: pointer;
	margin-right: 2rem;
	width: 10rem;

	-moz-appearance: textfield;
	::-webkit-outer-spin-button {
		display: none;
	}
	::-webkit-inner-spin-button {
		display: none;
	}
`;

const Images = styled.div`
	display: flex;
`;

const Column = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
`;

const Derivatives = () => {
	const width = useScreenWidth();
	const [artist, setArtist] = useState('');
	const [id, setId] = useState('');

	const columns = Math.round(width / MIN_WIDTH);

	return (
		<StyledDerivatives>
			<Filters>
				<Filter>
					<Label>Artist:</Label>
					<Dropdown onChange={(e: any) => setArtist(e.target.value)}>
						<Option value="">All</Option>
						{[
							...new Set(
								derivatives
									.filter((derivative: DerivativeType) => Boolean(derivative.artistName))
									.map((derivative: DerivativeType) => derivative.artistName || '')
							)
						]
							.sort((a: string, b: string) => a.localeCompare(b))
							.map((artistName: string) => (
								<Option>{artistName}</Option>
							))}
					</Dropdown>
				</Filter>
				<Filter>
					<Label>uwu id:</Label>
					<Input value={id} placeholder="e.g. 123" type="number" onChange={(e: any) => setId(e.target.value)} />
				</Filter>
			</Filters>
			<Images>
				{[...Array(columns).keys()].map((key: number) => (
					<Column>
						{derivatives
							.filter((derivative: DerivativeType) => !artist || derivative.artistName === artist)
							.filter((derivative: DerivativeType) => !id || (derivative.id && derivative.id.toString() === id))
							.filter((d: DerivativeType, index: number) => index % columns === key + (d.id || 0) - (d.id || 0))
							.map((derivative: DerivativeType) => (
								<DerivativeImage derivative={derivative} />
							))}
					</Column>
				))}
			</Images>
		</StyledDerivatives>
	);
};

export default Derivatives;
