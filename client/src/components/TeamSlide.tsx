import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Slide from 'components/Slide';
import social from '../assets/svgs/socials/twitter-yellow.svg';

interface TeamMemberType {
	name: string;
}

const members: TeamMemberType[] = [
	{
		name: 'Name1'
	},
	{
		name: 'Name2'
	},
	{
		name: 'Name3'
	},
	{
		name: 'Name4'
	}
];

const StyledContent = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-evenly;

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

const Picture = styled.img`
	width: 100%;
`;

const NameContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 1rem;
	padding: 0 0.5rem;
`;

const Name = styled.div`
	font-size: 2.3rem;
	font-weight: 600;
	color: var(--bg-03);
`;

const Description = styled.div`
	font-size: 1.4rem;
	font-weight: 500;
	color: var(--text-primary);
	line-height: 1.6rem;
	margin-top: 1rem;
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
							<Picture src="https://miro.medium.com/max/336/1*N7hOZYrSOKRha4WXnzwRqw.png" />
							<NameContainer>
								<Name>{`- ${m.name}`}</Name>
								<Image src={social} />
							</NameContainer>
							<Description>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
								aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
							</Description>
						</TeamMember>
					))}
				</StyledContent>
			}
		/>
	);
};

export default TeamSlide;
