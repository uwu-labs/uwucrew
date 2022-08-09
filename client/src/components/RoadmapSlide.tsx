import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Slide from './Slide';
import Image from 'next/image';

import roadmapImage from '../assets/roadmap/roadmap.jpg';

const roadmap: string[] = [
	'• Merch',
	'• Artist Collabs',
	'• uwucrew Dressing Room',
	'• uwu Labs Family Projects',
	'• Long Term Partnerships',
	'• Waifusion updates',
	'• uwuloot'
];

const Content = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

const Items = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
`;

const List = styled.div`
	display: flex;
	flex-direction: column;
`;

const ListItem = styled.div`
	font-weight: 500;
	color: var(--text-primary);
	padding-right: 2rem;
	margin-bottom: 1rem;
	font-family: 'Roboto', sans-serif;

	font-size: 2rem;
	line-height: 2.3rem;
	@media (max-width: 768px) {
		font-size: 1.6rem;
		line-height: 2rem;
		width: 100%;
		max-width: 100%;
	}
`;

const ButtonContainer = styled.div`
	margin-top: 3rem;
`;

const RoadmapV2 = styled.div`
	flex: 1;

	@media (max-width: 768px) {
		margin-top: 3rem;
		margin-bottom: 2rem;
	}
`;

const RoadmapSlide = () => {
	return (
		<Slide
			color="var(--bg-02)"
			section="roadmap"
			header="Roadmap"
			content={
				<Content>
					<Items>
						<List>
							{roadmap.map((item: string) => (
								<ListItem>{item}</ListItem>
							))}
						</List>
						<ButtonContainer>
							<Button
								color="var(--bg-02)"
								onClick={() =>
									(window as any).open('https://medium.com/@uwulabs/uwucrew-official-roadmap-v2-6fc60431a7cd', '_blank').focus()
								}
							>
								More Details
							</Button>
						</ButtonContainer>
					</Items>
					<RoadmapV2>
						<Image src={roadmapImage} alt="Roadmap V2" />
					</RoadmapV2>
				</Content>
			}
		/>
	);
};

export default RoadmapSlide;
