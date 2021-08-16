import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Slide from 'components/Slide';
import social from '../assets/svgs/socials/twitter-yellow.svg';
import laur from '../assets/profiles/laur.png';
import chase from '../assets/profiles/chase.png';
import kiwi from '../assets/profiles/kiwi.jpg';
import morello from '../assets/profiles/morello.jpg';

interface TeamMemberType {
	name: string;
	image: StaticImageData;
	bio: string;
	role: string;
}

const members: TeamMemberType[] = [
	{
		name: 'Laur',
		role: 'Artist',
		image: laur,
		bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
	},
	{
		name: 'Kiwi',
		role: 'Solidity Dev',
		image: kiwi,
		bio: 'Ivan Martinez (Kiwi) is a long time developer in the crypto space, he currently works as a software engineer for Prysmatic Labs building ETH2.0. He is also an avid DeFi and NFT enthusiast, working at NFTX as a protocol lead engineer. He is responsible for the uwucrew smart contracts and image generation software.'
	},
	{
		name: 'Morello',
		role: 'Bit of everything',
		image: morello,
		bio: "Defi, shitcoin, NFT gambler enthusiast and collector of anime-inspired art. Doesn't really have a real role but helps out with art, task planning, socials, and shitposting for uwucrew."
	},
	{
		name: 'Chase',
		role: 'Front End Dev',
		image: chase,
		bio: 'Chase is a Front End Web3 dev who has a passion for DeFi and NFTs. He developed the origional Waifusion Dungeon, the new Waifusion site, and the uwu crew site.'
	},
	{
		name: 'Cat',
		role: 'Role',
		image: laur,
		bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
	},
	{
		name: '0xWave',
		role: 'API Dev',
		image: laur,
		bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
	}
];

const StyledContent = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
	align-items: center;
	justify-content: center;
	justify-items: center;
	grid-gap: 3rem;

	margin-top: 3rem;
	@media (max-width: 768px) {
		margin-top: 1rem;
		flex-direction: column;
	}
`;

const TeamMember = styled.a`
	border-radius: 1rem;
	border: solid 3px var(--bg-03);
	padding: 1rem;
	display: flex;
	width: 29rem;
	flex-direction: column;

	transition: all 0.3s;
	:hover {
		transform: scale(1.03);
	}

	@media (max-width: 768px) {
		margin-bottom: 3rem;
	}
`;

const Overview = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 1rem;
	padding: 0 0.5rem;
`;

const NameContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const Name = styled.div`
	font-size: 2.3rem;
	line-height: 1.9rem;
	font-weight: 600;
	color: var(--bg-03);
	margin-bottom: 0.5rem;
`;

const Role = styled.div`
	line-height: 1.2rem;
	font-size: 1.3rem;
	font-weight: 600;
	color: var(--text-primary);
	margin-left: 1rem;
`;

const Description = styled.div`
	font-size: 1.4rem;
	font-weight: 500;
	color: var(--text-primary);
	line-height: 1.6rem;
	margin-top: 2rem;
	margin-bottom: 0.5rem;
	font-family: 'Roboto', sans-serif;
	padding: 0 0.5rem;
	width: 100%;
`;

const TeamSlide = () => {
	return (
		<Slide
			color="var(--bg-03)"
			section="team"
			header="The Team"
			content={
				<StyledContent>
					{members.map((m: TeamMemberType) => (
						<TeamMember href="https://twitter.com/ChaseManning_NZ" target="_blank" rel="noreferrer">
							<Image src={m.image} />
							<Overview>
								<NameContainer>
									<Name>{`- ${m.name}`}</Name>
									<Role>{m.role}</Role>
								</NameContainer>
								<Image src={social} />
							</Overview>
							<Description>{m.bio}</Description>
						</TeamMember>
					))}
				</StyledContent>
			}
		/>
	);
};

export default TeamSlide;
