import { generateSitemap } from 'core/sitemap';
import type { GetStaticProps, NextPage } from 'next';
import path from 'path';
import React from 'react';
import styled from 'styled-components';
import GlobalStyles from 'styles/GlobalStyles';
import Header from '../components/Header';
import Hero from 'components/Hero';
import Slide from 'components/Slide';

const Container = styled.div`
	position: relative;
	width: 100vw;
	display: flex;
	flex-direction: column;
`;

const IndexPage: NextPage = () => {
	return (
		<>
			<GlobalStyles />
			<Header />
			<Container>
				<Hero />
				<Slide
					color="var(--bg-01)"
					section="about"
					header="About"
					subHeaders={[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt '
					]}
				/>
				<Slide
					color="var(--bg-02)"
					section="roadmap"
					header="Roadmap"
					subHeaders={[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
					]}
				/>
				<Slide
					color="var(--bg-03)"
					section="team"
					header="The Team"
					subHeaders={[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, '
					]}
				/>
				<Slide
					color="var(--bg-04)"
					section="lore"
					header="The Lore"
					subHeaders={[
						'Do you fight with your siblings? Don’t we all? Our story about sisters Kaitlyn and Ella is no different except for one thing, these two were powerful beings made out of pure cosmic energy. Kait and Ella were absolutely the same, but completely different. Kait was wise but cunning, she was made out of light energy called uwu, while Ella was cunning but wise, she got formed from owo, dark cosmic energy.',
						'Usually, their fights were lighthearted. For example, Kait liked to go inside Ella’s interdimensional room intentionally leaving the intergalactic door open, while Ella liked exploding stars that Kait liked. All of it was fine, until one day Ella accidentally spilled Kait’s iced coffee made out of energy from the sun and the biggest sibling clash in the history of the universe began.'
					]}
				/>
				<Slide
					color="var(--bg-05)"
					section="provenance"
					header="Provenance"
					subHeaders={[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
					]}
				/>
			</Container>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const directory = path.join(process.cwd(), 'src');

	await generateSitemap(directory);

	return { props: {} };
};

export default IndexPage;
