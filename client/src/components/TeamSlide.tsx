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
import quantumly from '../assets/profiles/quantumly.jpg';
import danny from '../assets/profiles/danny.jpg';
import omar from '../assets/profiles/omar.jpg';

interface TeamMemberType {
	name: string;
	image: StaticImageData;
	bio: string[];
	role: string;
	twitter?: string;
	github?: string;
	linkText?: string;
	link?: string;
}

const members: TeamMemberType[] = [
	{
		name: 'Laur',
		role: 'Artist',
		image: laur,
		bio: [
			'Laur is the sole artist of uwucrew, 9670 anime and pop culture-inspired avatars that aims to be inclusive and expressive.',
			'Laur focuses on semi-realism, 2d animation and character design. She enjoys collecting 1/1 anime art and supporting the growth of NFT artists.'
		],
		twitter: 'https://twitter.com/fungibleartist'
	},
	{
		name: 'Kiwi',
		role: 'Solidity Dev',
		image: kiwi,
		bio: [
			'Ivan Martinez (Kiwi) is a long time developer in the crypto space, working for NFTX as a protocol lead enginer.',
			'An avid DeFi and NFT enthusiast, Kiwi has been engaged with NFTs since March 2021.',
			'He is responsible for the uwucrew smart contracts and image gen.'
		],
		twitter: 'https://twitter.com/0xKiwi_',
		github: 'https://github.com/0xKiwi'
	},
	{
		name: 'Morello',
		role: 'Bit of everything',
		image: morello,
		bio: [
			'Morello works on community management, partnerships, and project organization for uwucrew.',
			'He has been paper-handing blue chip NFTs since February 2021, and has since become an avid collector of anime art.'
		],
		linkText: 'Check out his gallery here: ',
		link: 'https://foundation.app/@morello',
		twitter: 'https://twitter.com/morellostorment'
	},
	{
		name: 'Chase',
		role: 'Front End Dev',
		image: chase,
		bio: [
			'Recommended by 4 out of 5 people who recommend things.',
			'Chase is a Front End Web3 dev who has a passion for DeFi and NFTs.',
			'He builds the websites for uwucrew and ensures everything is looking slick online!'
		],
		twitter: 'https://twitter.com/chase_manning_',
		github: 'https://github.com/chase-manning'
	},
	{
		name: 'CatInKleins',
		role: 'R&D',
		image: cat,
		bio: [
			'More than anything, Cat loves his mom, ETH and NFTs.',
			'Being an early uwu appreciator, he helped design and establish uwucrew NFT collection. Currently, Cat mostly focuses on community management, socials and events organization. Secretly a part of the uwuminati.'
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
	},
	{
		name: 'Omar',
		role: 'Community Support & Events',
		image: omar,
		bio: [
			'Artist turned collector, community support and events.',
			'Omar is a street photographer who enjoys collecting anime inspired NFTs and helps strengthen uwucrew community engagement via event hosting, branding and fun activities.'
		],
		twitter: 'https://twitter.com/OmarIbisa'
	},
	{
		name: 'Danny',
		role: 'Collaborations & Partnerships',
		image: danny,
		bio: [
			'Danny is the collaborations and partnerships manager of uwucrew and assists with research and development.',
			'He learned to study marketplace trends and valuations from MMO Free Markets and applies that to the NFT market today.'
		],
		twitter: 'https://twitter.com/0xMaple'
	},
	{
		name: 'Quantumly',
		role: 'Full Stack Developer',
		image: quantumly,
		bio: [
			'Full Stack Developer working with JavaScript / TypeScript, React, Solidity, C#, and Elixir.',
			'Fast learner & open source contributor.'
		],
		twitter: 'https://twitter.com/quantumlyy',
		github: 'https://github.com/quantumlyy'
	}
];

const StyledContent = styled.div`
	width: 100%;
	display: grid;
	align-items: center;
	justify-content: center;
	justify-items: center;
	grid-gap: 1rem;

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
	margin-bottom: 0.3rem;
`;

const Role = styled.div`
	line-height: 1.2rem;
	font-size: 1.4rem;
	font-weight: 600;
	color: var(--text-primary);
	margin-left: 1.5rem;
	white-space: nowrap;
	margin-bottom: 1.5rem;
	transform: translateY(-0.3rem);
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

const Link = styled.a`
	font-size: 1.4rem;
	font-weight: 500;
	color: var(--text-primary);
	line-height: 1.6rem;
	margin-top: 0.3rem;
	margin-bottom: 0.5rem;
	font-family: 'Roboto', sans-serif;
	text-decoration: underline;
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
								<Role>{m.role}</Role>
								{m.bio.map((b: string, i: number) => (
									<Description key={i}>{b}</Description>
								))}
								{m.linkText && m.link && (
									<Description>
										{m.linkText}
										<Link href={m.link} target="_blank" rel="noreferrer">
											{m.link}
										</Link>
									</Description>
								)}
							</Content>
						</TeamMember>
					))}
				</StyledContent>
			}
		/>
	);
};

export default TeamSlide;
