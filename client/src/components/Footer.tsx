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
	width: calc(100vw - 239px - 40px);
	transform-origin: left;
	transform: scaleX(0);
	animation: ${wipe} 1s 1s ease-out forwards;

	@media (max-width: 768px) {
		left: 25px;
		width: calc(100vw - 230px - 0px);
	}
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

	@media (max-width: 768px) {
		padding: 15px 20px;
	}
`;

const Social = styled(Image)`
	width: 1rem;
	margin: 0 1rem;
`;

const Footer: React.FC = () => {
	return (
		<StyledFooter>
			<Line />
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
		</StyledFooter>
	);
};

export default Footer;
