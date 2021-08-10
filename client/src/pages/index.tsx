import { generateSitemap } from 'core/sitemap';
import type { GetStaticProps, NextPage } from 'next';
import path from 'path';
import React from 'react';
import styled from 'styled-components';
import GlobalStyles from 'styles/GlobalStyles';
import Header from '../components/Header';
import Hero from 'components/Hero';
import Slide from 'components/Slide';
import AboutSlide from 'components/AboutSlide';
import LoreSlide from 'components/LoreSlide';

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
				<AboutSlide />
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
				<LoreSlide />
				<Slide
					color="var(--bg-02)"
					section="roadmap"
					header="Roadmap"
					subHeaders={[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
					]}
				/>
				{/* <Slide
					color="var(--bg-05)"
					section="provenance"
					header="Provenance"
					subHeaders={[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
					]}
				/> */}
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
