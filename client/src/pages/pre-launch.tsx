import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import uwu from '../assets/girls/07.png';
import discord from '../assets/svgs/socials/discord.svg';
import twitter from '../assets/svgs/socials/twitter.svg';
import telegram from '../assets/svgs/socials/telegram.svg';
import github from '../assets/svgs/socials/github.svg';
import Rainbow from 'components/Rainbow';
import Artifacts from 'components/Artifacts';

const StyledPreLaunch = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: var(--bg);
	/* background: radial-gradient(#fff, #eee); */
	background-image: linear-gradient(180deg, #2f6ed3 5%, #5095e4 20%, #5095e4 60%, #2f6ed3 95%);
`;

const ComingSoon = styled.div`
	position: absolute;
	top: 6rem;
	left: 50%;
	transform: translateX(-50%) rotate(-5deg);
	padding: 0.5rem 2.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	color: var(--text-primary);
	font-size: 2.3rem;
	font-weight: 600;

	background: rgba(255, 255, 255, 0.25);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(4px);
	border-radius: 10px;
	border: 1px solid rgba(255, 255, 255, 0.18);

	color: #fff;
	text-shadow: 0 2px 4px rgb(71 97 206 / 36%);
`;

const Socials = styled.div`
	position: absolute;
	bottom: 6rem;
	left: 50%;
	transform: translateX(-50%) rotate(-5deg);
	padding: 1.2rem 2.5rem;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 1.3rem;
	color: var(--text-primary);
	font-size: 2.3rem;
	font-weight: 600;

	background: rgba(255, 255, 255, 0.25);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(4px);
	border-radius: 10px;
	border: 1px solid rgba(255, 255, 255, 0.18);

	color: #fff;
	text-shadow: 0 2px 4px rgb(71 97 206 / 36%);

	> a {
		cursor: pointer;
	}
`;

const Social = styled(Image)`
	width: 1rem;
	margin: 0 1rem;
`;

const Content = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	padding: 6rem;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

const Left = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 40vw;
	padding: 2rem 3rem;

	background: rgba(255, 255, 255, 0.25);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(4px);
	border-radius: 10px;
	border: 1px solid rgba(255, 255, 255, 0.18);
	transform: rotate(-5deg);
`;

const Header = styled.h1`
	color: var(--text-primary);
	font-size: 12rem;
	font-weight: 700;
	line-height: 11rem;
	margin-bottom: 3rem;
	text-align: center;

	color: #fff;
	text-shadow: 0 2px 4px rgb(71 97 206 / 36%);
`;

const SubHeader = styled.h2`
	color: var(--text-primary);
	font-size: 2.4rem;
	line-height: 3rem;
	font-weight: 500;
	margin-bottom: 2rem;

	color: #fff;
	text-shadow: 0 2px 4px rgb(71 97 206 / 36%);
`;

const Right = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledImage = styled.div`
	width: 30vw;
	/* transform: scaleX(-1); */
	padding: 2rem;
	padding-bottom: 0;

	background: rgba(255, 255, 255, 0.25);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(4px);
	border-radius: 10px;
	border: 1px solid rgba(255, 255, 255, 0.18);
	transform: rotate(-5deg);

	> div {
		transform: translate(-25px, 5px);
	}
`;

const PreLaunch = () => {
	return (
		<StyledPreLaunch>
			{/* <Rainbow /> */}
			<Artifacts />
			<Content>
				<Left>
					<Header>uwu crew</Header>
					<SubHeader>
						uwu crew is a collection of 10,000 NFTs on Ethereum and Binance Smart Chain brought to you from the community behind
						Waifusion. Launching mid August.
					</SubHeader>
				</Left>
				<Right>
					<StyledImage>
						<Image src={uwu} />
					</StyledImage>
				</Right>
			</Content>
			<ComingSoon>Coming Soon</ComingSoon>
			<Socials>
				<a href="" target="_blank">
					<Social src={discord} />
				</a>
				<a href="" target="_blank">
					<Social src={twitter} />
				</a>
				<a href="" target="_blank">
					<Social src={telegram} />
				</a>
				<a href="" target="_blank">
					<Social src={github} />
				</a>
			</Socials>
		</StyledPreLaunch>
	);
};

export default PreLaunch;
