import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectOwnedTickets } from 'state/reducers/uwu';
import styled from 'styled-components';

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
	const { t } = useTranslation('common');

	return (
		<StyledOwnedTickets color={color}>
			<Label>{`${t('components.owned.owned')}: ${owned === undefined ? ownedTickets : owned}`}</Label>
		</StyledOwnedTickets>
	);
};

export default OwnedTickets;
