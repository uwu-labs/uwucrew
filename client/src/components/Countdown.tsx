import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

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

const Container = styled.div`
	width: 100%;
	display: flex;
	/* justify-content: center; */
	align-items: center;
	margin: 1rem 0;

	opacity: 0;
	transform: translateY(100%);
	animation: ${raise} 1s 1.9s ease-out forwards;
`;

const StyledCountdown = styled.div`
	border-top: solid 2px var(--text-primary);
	border-bottom: solid 2px var(--text-primary);
	padding: 1rem 0;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
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
		font-size: 7.5rem;
		line-height: 5rem;
		margin-bottom: 2rem;
	}
`;

const Label = styled.div`
	letter-spacing: 0.2rem;
	color: var(--text-primary);
	font-family: 'Roboto', sans-serif;
	font-weight: 500;

	font-size: 1.7rem;
	@media (max-width: 768px) {
		font-size: 7.5rem;
	}
`;

const Countdown = () => {
	const epocs = 1630879200;
	const [update, setUpdate] = useState(0);

	const launchDate = () => {
		const d = new Date(0);
		d.setUTCSeconds(epocs);
		return d;
	};

	const remaining = launchDate().getTime() - new Date().getTime();

	const days = () => {
		const days = remaining / 1000 / 60 / 60 / 24;
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
		seconds = seconds / 1000;
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
