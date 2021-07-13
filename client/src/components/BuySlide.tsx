import React from 'react';
import styled from 'styled-components';
import Slide from './Slide';
import girl05 from '../assets/girls/05.png';

const Countdown = styled.div`
	font-size: 3rem;
	font-weight: 600;
	color: var(--text-primary);
	max-width: 60rem;
	text-align: center;
	margin-top: 2rem;
`;

const BuySlide: React.FC = () => {
	return (
		<Slide
			color="var(--bg-02)"
			image={girl05}
			right
			section="buy"
			header="Buy NFT Name"
			subHeaders={[
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			]}
			content={<Countdown>3 weeks and 12 hours</Countdown>}
		/>
	);
};

export default BuySlide;
