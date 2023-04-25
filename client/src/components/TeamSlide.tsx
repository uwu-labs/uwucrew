import React from 'react';
import Image, { StaticImageData } from 'next/image';
import styled from 'styled-components';
import Slide from 'components/Slide';
import twitter from '../assets/svgs/socials/twitter-yellow.svg';
import fnd from '../assets/svgs/socials/foundation-yellow.svg';
import github from '../assets/svgs/socials/github-yellow.svg';
import laur from '../assets/profiles/laur.jpg';
import chase from '../assets/profiles/chase.jpg';
import kiwi from '../assets/profiles/kiwi.jpg';
import morello from '../assets/profiles/morello.jpg';
import danny from '../assets/profiles/danny.jpg';
import omar from '../assets/profiles/omar.jpg';
import nines from '../assets/profiles/nines.jpg';
import jules from '../assets/profiles/jules.jpg';

interface TeamMemberType {
	name: string;
	image: StaticImageData;
	bio: string[];
	role: string;
	twitter?: string;
	fnd?: string;
	github?: string;
	linkText?: string;
	link?: string;
}

const members: TeamMemberType[] = [
	{
		name: 'Laur',
		role: 'Co-Founder & Artist',
		image: laur,
		bio: [
			'Laur is the sole artist of uwucrew!  Including all assets from the uwu Dressing Room!',
			'Laur focuses on semi-realism, 2d animation and character design. She enjoys collecting 1/1 anime art and supporting the growth of NFT artists.'
		],
		twitter: 'https://twitter.com/fungibleartist',
		fnd: 'https://foundation.app/@laur'
	},
	{
		name: 'Kiwi',
		role: 'Co-Founder & Dev',
		image: kiwi,
		bio: [
			'An avid DeFi/NFT enthusiast, Kiwi is a long time developer in the crypto space, working in the industry for over 5 years!',
			'He is responsible for leading the team, the uwucrew image generation, and oversees all dev tasks.'
		],
		twitter: 'https://twitter.com/0xKiwi_',
		github: 'https://github.com/0xKiwi',
		fnd: 'https://foundation.app/@Kiwi_Vault'
	},
	{
		name: 'Morello',
		role: 'Bit of everything',
		image: morello,
		bio: [
			'Morello helps with community, partnerships, and more for uwucrew.',
			'He has been paper-handing blue chip NFTs since February 2021, and is an avid collector of anime art.'
		],
		linkText: 'Check out his gallery here: ',
		link: 'https://foundation.app/@morello',
		fnd: 'https://foundation.app/@morello',
		twitter: 'https://twitter.com/morellostorment'
	},
	{
		name: 'Omar',
		role: 'Community Manager',
		image: omar,
		bio: [
			'Artist turned collector, community support and events.',
			'Omar is a street photographer who enjoys collecting anime inspired NFTs and helps strengthen uwucrew community engagement via event hosting, branding and fun activities.'
		],
		twitter: 'https://twitter.com/OmarIbisa',
		fnd: 'https://foundation.app/@omr'
	},
	{
		name: 'Danny',
		role: 'Partnerships Manager',
		image: danny,
		bio: [
			'Danny is the collaborations and partnerships manager of uwucrew and assists with research and development.',
			'He learned to study marketplace trends and valuations from MMO Free Markets and applies that to the NFT market today.'
		],
		twitter: 'https://twitter.com/0xMaple',
		fnd: 'https://foundation.app/@0xMaple'
	},
	{
		name: 'Jules',
		role: 'Creative Assistant',
		image: jules,
		bio: [
			'Jules is an accomplished artist and designer, who has a strong tendency to create cute stuff. They have extensive knowledge of the NFT space, and are a valuable guide to those who are new.',
			'Jules assists in the creative process for a variety of projects within uwucrew.'
		],
		twitter: 'https://twitter.com/BlancNFT',
		fnd: 'https://foundation.app/@jujulesblanc'
	},
	{
		name: 'Nines',
		role: '2D & 3D Designer',
		image: nines,
		bio: [
			'Meet Nines, our resident pixel magician who has been expertly manipulating pixels for over 15 years!',
			'With a keen eye for cool, new, and interesting techniques, Nines is our go-to guru for all things branding, promos, merch, design and everything in between.',
		],
		twitter: 'https://twitter.com/nine__s'
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
	margin: auto;
`;

const NameContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const Name = styled.div`
	font-family: 'Fredoka', sans-serif;
	font-size: 2.6rem;
	line-height: 2.6rem;
	font-weight: 600;
	color: var(--bg-03);
	margin-bottom: 0.3rem;
`;

const Role = styled.div`
	font-family: 'Fredoka', sans-serif;
	line-height: 1.4em;
	font-size: 1.4rem;
	font-weight: 600;
	color: var(--text-primary);
	margin-left: 0.5rem;
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
					{members.map((m: TeamMemberType, index: number) => (
						<TeamMember key={index}>
							<ImageContainer>
								<Image src={m.image} />
							</ImageContainer>
							<Content>
								<Overview>
									<NameContainer>
										<Name>{`${m.name}`}</Name>
									</NameContainer>
									<Socials>
										{m.fnd && (
											<SocialContainer href={m.fnd} target="_blank" rel="noreferrer">
												<Image src={fnd} />
											</SocialContainer>
										)}
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
