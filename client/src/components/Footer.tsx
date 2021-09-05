import React from 'react';
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';
import discord from '../assets/svgs/socials/discord.svg';
import twitter from '../assets/svgs/socials/twitter.svg';
import medium from '../assets/svgs/socials/medium.svg';
import github from '../assets/svgs/socials/github.svg';
import instagram from '../assets/svgs/socials/instagram.svg';
import etherscan from '../assets/svgs/socials/etherscan.svg';

const StyledFooter = styled.div`
	display: flex;
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	z-index: 1;
	overflow: hidden;
	height: 6rem;
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
	position: absolute;
	left: 40px;
	bottom: 30px;
	border-bottom: solid 3px var(--text-primary);
	width: calc(100vw - 282px - 70px);
	transform-origin: left;
	transform: scaleX(0);
	animation: ${wipe} 1s 0s ease-out forwards;

	@media (max-width: 768px) {
		left: 25px;
		width: calc(100vw - 272px - 0px);
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
	grid-template-columns: repeat(6, 1fr);
	grid-gap: 1.3rem;
	color: var(--text-primary);
	font-size: 2.3rem;
	font-weight: 600;
	transform: translateY(50px);
	animation: ${raise} 1s 1s ease-out forwards;

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
				<a
					href="https://etherscan.io/address/0xF75140376D246D8B1E5B8a48E3f00772468b3c0c"
					target="_blank"
					rel="noreferrer"
					style={{ transform: 'translateY(3px)' }}
				>
					<Social src={etherscan} />
				</a>
				<a href="https://discord.gg/CaR7RhfDZ6" target="_blank" rel="noreferrer">
					<Social src={discord} />
				</a>
				<a href="https://twitter.com/uwucrewnft" target="_blank" rel="noreferrer">
					<Social src={twitter} />
				</a>
				<a href="https://waifusioncommunity.medium.com/" target="_blank" rel="noreferrer">
					<Social src={medium} />
				</a>
				<a href="https://github.com/waifusion" target="_blank" rel="noreferrer">
					<Social src={github} />
				</a>
				<a href="https://www.instagram.com/waifusionnft/" target="_blank" rel="noreferrer">
					<Social src={instagram} />
				</a>
			</Socials>
		</StyledFooter>
	);
};

export default Footer;
