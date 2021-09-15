import React from 'react';
import styled from 'styled-components';
import Slide from './Slide';

const roadmap: string[] = [
	'- uwucrew Official Merch Shop for WET',
	'- Additional Prizes in Waifusion Dungeon',
	'- Built-in HODL stats for uwucrew NFTs (future rewards for longest holders!)',
	'- Metaverse'
];

const drops: string[] = [
	'- Mixed type drops (including airdrops) for Waifusion holders, uwucrew holders, biggest holders, burn',
	'- Semi-realistic 1/1 Art drops by Laur',
	'- Generative Art Collection(s) by Kiwi',
	'- Various Artist Collaborations planned',
	'- uwuLoot'
];

const Content = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const SubHeader = styled.div`
	font-weight: 600;
	color: var(--text-primary);
	max-width: 70%;
	margin-bottom: 2rem;
	margin-top: 3rem;
	/* font-family: 'Roboto', sans-serif; */

	font-size: 3rem;
	line-height: 2.3rem;
	@media (max-width: 768px) {
		font-size: 1.6rem;
		line-height: 2rem;
		max-width: 100%;
		width: 100%;
	}
`;

const Items = styled.div`
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
	max-width: 70%;
	margin-bottom: 1rem;
	font-family: 'Roboto', sans-serif;

	font-size: 2rem;
	line-height: 2.3rem;
	@media (max-width: 768px) {
		font-size: 1.6rem;
		line-height: 2rem;
		max-width: 100%;
		width: 100%;
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
						<List>
							<SubHeader>Future Drops</SubHeader>
							{drops.map((item: string) => (
								<ListItem>{item}</ListItem>
							))}
						</List>
					</Items>
				</Content>
			}
		/>
	);
};

export default RoadmapSlide;
