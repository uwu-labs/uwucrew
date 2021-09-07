import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectOwnedTickets } from 'state/reducers/uwu';

interface StyledProps {
	color: string;
}

const StyledOwnedTickets = styled.div`
	display: flex;
	align-items: center;
	background-color: ${(props: StyledProps) => props.color};
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

interface Props {
	color: string;
	owned?: number;
}

const OwnedTickets = ({ color, owned }: Props) => {
	const ownedTickets = useSelector(selectOwnedTickets);

	return (
		<StyledOwnedTickets color={color}>
			<Label>{`Owned: ${owned === undefined ? ownedTickets : owned}`}</Label>
		</StyledOwnedTickets>
	);
};

export default OwnedTickets;
