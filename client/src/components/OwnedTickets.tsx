import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectOwnedTickets } from 'state/reducers/uwu';

const StyledOwnedTickets = styled.div`
	display: flex;
	align-items: center;
	background-color: var(--bg-04);
	height: 4.7rem;
	padding: 0 3.3rem;
`;

const Label = styled.div`
	font-weight: 500;
	color: white;

	font-size: 2.2rem;
	line-height: 2.3rem;
	@media (max-width: 768px) {
		font-size: 1.6rem;
		line-height: 2rem;
	}
`;

const OwnedTickets = () => {
	const ownedTickets = useSelector(selectOwnedTickets);

	return (
		<StyledOwnedTickets>
			<Label>{`Owned: ${ownedTickets}`}</Label>
		</StyledOwnedTickets>
	);
};

export default OwnedTickets;
