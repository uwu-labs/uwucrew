import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import ticket from '../assets/tickets/uwu_coin.png';
import { useSelector } from 'react-redux';
import { selectOwnedTickets } from 'state/reducers/uwu';

const StyledOwnedTickets = styled.div`
	display: flex;
	align-items: center;
	border: solid 3px var(--bg-04);
	padding: 0.1rem 1rem;
`;

const Label = styled.div`
	font-weight: 500;
	color: var(--text-primary);
	font-family: 'Roboto', sans-serif;
	margin-right: 1rem;
	color: var(--bg-04);

	font-size: 2rem;
	line-height: 2.3rem;
	@media (max-width: 768px) {
		font-size: 1.6rem;
		line-height: 2rem;
	}
`;

const Icon = styled.div`
	width: 4rem;
	margin-top: 0.2rem;
`;

const OwnedTickets = () => {
	const ownedTickets = useSelector(selectOwnedTickets);

	return (
		<StyledOwnedTickets>
			<Label>{`Owned: ${ownedTickets}`}</Label>
			<Icon>
				<Image src={ticket} />
			</Icon>
		</StyledOwnedTickets>
	);
};

export default OwnedTickets;
