import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Slide from 'components/Slide';
import twitter from '../assets/svgs/socials/twitter-yellow.svg';
import github from '../assets/svgs/socials/github-yellow.svg';
import laur from '../assets/profiles/laur.jpg';
import chase from '../assets/profiles/chase.jpg';
import kiwi from '../assets/profiles/kiwi.jpg';
import morello from '../assets/profiles/morello.jpg';
import cat from '../assets/profiles/cat.jpg';
import wave from '../assets/profiles/wave.jpg';

interface TeamMemberType {
	name: string;
	image: StaticImageData;
	bio: string[];
	role: string;
	twitter?: string;
	github?: string;
}

const members: TeamMemberType[] = [
	{
		name: 'Laur',
		role: 'Artist',
		image: laur,
		bio: [
			'Laur is our talented lady illustrator debuting in the NFT art space with uwucrew.',
			'Her style ranges from semi-realism to cartoonish illustrations and character design. Bad-ass bitch that drew over 120 assets. Likes the booba. Supports the booba.'
		],
		twitter: 'https://twitter.com/electrowaifu'
	},
	{
		name: 'Kiwi',
		role: 'Solidity Dev',
		image: kiwi,
		bio: [
			'Ivan Martinez (Kiwi) is a long time developer in the crypto space, he currently works for Prysmatic Labs building ETH2.0. He is also an avid DeFi and NFT enthusiast, working at NFTX as a protocol lead. He is responsible for the uwucrew smart contracts and image generation. Based and NFT-pilled.'
		],
		twitter: 'https://twitter.com/0xKiwi_',
		github: 'https://github.com/0xKiwi'
	},
	{
		name: 'Morello',
		role: 'Bit of everything',
		image: morello,
		bio: [
			'Defi, shitcoin, NFT enthusiast (gambler) and collector of anime-inspired art.',
			"Doesn't really have a real role but helps out with art, task planning, socials, and shitposting for uwucrew."
		],
		twitter: 'https://twitter.com/morellostorment'
	},
	{
		name: 'Chase',
		role: 'Front End Dev',
		image: chase,
		bio: [
			'Chase is a Front End Web3 dev who has a passion for DeFi and NFTs.',
			'He developed the original Waifusion Dungeon, the new Waifusion site, and the uwucrew site.'
		],
		twitter: 'https://twitter.com/ChaseManning_NZ',
		github: 'https://github.com/chase-manning'
	},
	{
		name: 'CatInKleins',
		role: 'R&D',
		image: cat,
		bio: [
			"ETH maxi and NFT gambler, he's generally happy to get paid for looking at anime cleavages all day.",
			'Cat helps with art, socials and uwuniverse creation.'
		],
		twitter: 'https://twitter.com/CatInKleins'
	},
	{
		name: '0xWave',
		role: 'Math-wiz, waifu sommelier',
		image: wave,
		bio: [
			'Software engineer and data wizard pretending to not be as degenerate as your average jpeg collector.',
			'Community builder deeply interested in DeFi, NFTs, and their intersection.',
			'Might respond to your bad take with a chart.'
		],
		twitter: 'https://twitter.com/0xWave'
	}
];

const StyledContent = styled.div`
	width: 100%;
	display: grid;
	align-items: center;
	justify-content: center;
	justify-items: center;
	grid-gap: 3rem;

	margin-top: 3rem;
	grid-template-columns: repeat(auto-fit, minmax(49rem, 1fr));
	@media (max-width: 768px) {
		margin-top: 1rem;
		margin-bottom: 2rem;
		grid-template-columns: repeat(1, 1fr);
	}
`;

const TeamMember = styled.div`
	border: solid 3px var(--bg-03);
	padding: 1rem;
	display: flex;
	flex-direction: row;

	height: 27rem;
	@media (max-width: 768px) {
		height: auto;
		flex-direction: column;
	}
`;

const ImageContainer = styled.div`
	width: 24rem;
	@media (max-width: 768px) {
		width: 100%;
	}
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;

	margin-left: 1rem;
	@media (max-width: 768px) {
		margin-left: 0;
		margin-top: 1rem;
	}
`;

const Overview = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-top: 1rem;
	padding: 0 0.5rem;
`;

const Socials = styled.div`
	display: flex;
`;

const SocialContainer = styled.a`
	margin-left: 0.3rem;
	cursor: pointer;
	transform: translateY(-0.3rem);
	width: 2.8rem;
	margin-bottom: 2rem;
`;

const NameContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const Name = styled.div`
	font-size: 2.6rem;
	line-height: 1.9rem;
	font-weight: 600;
	color: var(--bg-03);
	margin-bottom: 0.8rem;
`;

const Role = styled.div`
	line-height: 1.2rem;
	font-size: 1.4rem;
	font-weight: 600;
	color: var(--text-primary);
	margin-left: 1.5rem;
	white-space: nowrap;
`;

const Description = styled.div`
	font-size: 1.4rem;
	font-weight: 500;
	color: var(--text-primary);
	line-height: 1.6rem;
	margin-top: 0.3rem;
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
						<TeamMember>
							<ImageContainer>
								<Image src={m.image} />
							</ImageContainer>
							<Content>
								<Overview>
									<NameContainer>
										<Name>{`- ${m.name}`}</Name>
										<Role>{m.role}</Role>
									</NameContainer>
									<Socials>
										{m.github && (
											<SocialContainer href={m.github} target="_blank" rel="noreferrer">
												<Image src={github} />
											</SocialContainer>
										)}
										{m.twitter && (
											<SocialContainer href={m.twitter} target="_blank" rel="noreferrer">
												<Image src={twitter} />
											</SocialContainer>
										)}
									</Socials>
								</Overview>
								{m.bio.map((b: string) => (
									<Description>{b}</Description>
								))}
							</Content>
						</TeamMember>
					))}
				</StyledContent>
			}
		/>
	);
};

export default TeamSlide;
