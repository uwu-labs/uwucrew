import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	margin: 1rem 0;
`;

const StyledCountdown = styled.div`
	border-top: solid 2px var(--text-primary);
	border-bottom: solid 2px var(--text-primary);
	padding: 1rem 0;
	display: flex;
	align-items: center;
	justify-content: space-evenly;

	@media (max-width: 768px) {
		width: 100%;
	}
`;

const Column = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 1rem;
`;

const Number = styled.div`
	letter-spacing: 0.2rem;
	color: var(--text-primary);

	font-size: 7rem;
	font-weight: 600;
	line-height: 5.5rem;
	margin-bottom: 0.5rem;
	@media (max-width: 768px) {
		font-size: 5rem;
		line-height: 5rem;
		margin-bottom: 0.3rem;
	}
`;

const Label = styled.div`
	letter-spacing: 0.2rem;
	color: var(--text-primary);
	font-weight: 500;

	font-size: 1.7rem;
	@media (max-width: 768px) {
		font-size: 1.6rem;
	}
`;

interface Props {
	date: Date;
}

const Countdown = ({ date }: Props) => {
	const [update, setUpdate] = useState(0);

	const difference = date.getTime() - new Date().getTime();
	const remaining = difference < 0 ? 0 : difference;

	const days = () => {
		let days = remaining / 1000 / 60 / 60 / 24;
		days = days + update - update;
		return Math.floor(days);
	};

	const hours = () => {
		let hours = remaining - days() * 1000 * 60 * 60 * 24;
		hours = hours / 1000 / 60 / 60;
		return Math.floor(hours);
	};

	const minutes = () => {
		let minutes = remaining - days() * 1000 * 60 * 60 * 24;
		minutes -= hours() * 1000 * 60 * 60;
		minutes = minutes / 1000 / 60;
		return Math.floor(minutes);
	};

	const seconds = () => {
		let seconds = remaining - days() * 1000 * 60 * 60 * 24;
		seconds -= hours() * 1000 * 60 * 60;
		seconds -= minutes() * 1000 * 60;
		seconds /= 1000;
		return Math.floor(seconds);
	};

	useEffect(() => {
		setInterval(() => setUpdate(Math.random()), 1000);
	}, []);

	return (
		<Container>
			<StyledCountdown>
				<Column>
					<Number>{days()}</Number>
					<Label>days</Label>
				</Column>
				<Column>
					<Number>{hours()}</Number>
					<Label>hours</Label>
				</Column>
				<Column>
					<Number>{minutes()}</Number>
					<Label>minutes</Label>
				</Column>
				<Column>
					<Number>{seconds()}</Number>
					<Label>seconds</Label>
				</Column>
			</StyledCountdown>
		</Container>
	);
};

export default Countdown;
