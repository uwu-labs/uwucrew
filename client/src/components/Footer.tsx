import React from 'react';
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';
import discord from '../assets/svgs/socials/discord.svg';
import twitter from '../assets/svgs/socials/twitter.svg';
import telegram from '../assets/svgs/socials/telegram.svg';
import github from '../assets/svgs/socials/github.svg';

const StyledFooter = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	z-index: 1;
`;

const Container = styled.footer`
	position: relative;
	width: 100%;
	padding: 2rem 4rem;
	box-sizing: border-box;
	display: flex;
	justify-content: flex-end;
`;

const wipe = keyframes`
  from {
	transform: scaleX(0);
  }
  to {
	transform: scaleX(1);
  }
`;

const Line = styled.div`
	position: fixed;
	left: 40px;
	bottom: 30px;
	border-bottom: solid 3px var(--text-primary);
	/* min-width: 500px; */
	width: calc(100vw - 239px - 40px);
	transform-origin: left;
	transform: scaleX(0);
	animation: ${wipe} 1s 1s ease-out forwards;
`;

const raise = keyframes`
  from {
	  opacity: 0;
	transform: translateY(50px);
  }
  to {
	  opacity: 1;
	transform: translateY(0);
  }
`;

const Socials = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;
	padding: 15px 40px;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 1.3rem;
	color: var(--text-primary);
	font-size: 2.3rem;
	font-weight: 600;
	transform: translateY(50px);
	animation: ${raise} 1s 2s ease-out forwards;

	> a {
		cursor: pointer;
	}
`;

const Social = styled(Image)`
	width: 1rem;
	margin: 0 1rem;
`;

const Section = styled.div`
	display: flex;
	font-weight: 500;
	white-space: nowrap;
	@media (max-width: 768px) {
		display: none;
	}
`;

const Footer: React.FC = () => {
	return (
		<StyledFooter>
			<Line />
			<Container>
				<Section>
					<Socials>
						<a href="https://discord.gg/Ry6bsgsTQh" target="_blank" rel="noreferrer">
							<Social src={discord} />
						</a>
						<a href="https://twitter.com/waifusion" target="_blank" rel="noreferrer">
							<Social src={twitter} />
						</a>
						<a href="https://t.me/Waifusion" target="_blank" rel="noreferrer">
							<Social src={telegram} />
						</a>
						<a href="https://github.com/backdfund" target="_blank" rel="noreferrer">
							<Social src={github} />
						</a>
					</Socials>
				</Section>
			</Container>
		</StyledFooter>
	);
};

export default Footer;
