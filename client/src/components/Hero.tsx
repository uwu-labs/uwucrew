import React from 'react';
import styled from 'styled-components';

const StyledHero = styled.div`
	position: relative;
	height: 90vh;
	width: 100%;
	overflow: hidden;
`;

const Image = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	opacity: 0.7;
`;

const ContentContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Header = styled.h1`
	font-size: 7rem;
	letter-spacing: 0.3rem;
	color: var(--text-primary);
`;

const SubHeader = styled.h2`
	font-size: 1.4rem;
	font-weight: 500;
	color: var(--text-primary);
	max-width: 60rem;
	text-align: center;
	margin-top: 1rem;
	line-height: 2rem;
`;

const Countdown = styled.div`
	font-size: 3.5rem;
	font-weight: 500;
	color: var(--text-primary);
	margin-top: 3rem;
	margin-bottom: 5rem;
`;

const Hero = () => {
	return (
		<StyledHero>
			<Image src={'https://i.imgur.com/oCR1Pxf.jpg'} />

			<ContentContainer>
				<Content>
					<Header>Uwu Crew</Header>
					<SubHeader>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
						enim ad minim veniam
					</SubHeader>
					<Countdown>13 Days, 7 Hours, 12 Minutes</Countdown>
				</Content>
			</ContentContainer>
		</StyledHero>
	);
};

export default Hero;
