import { generateSitemap } from 'core/sitemap';
import type { GetStaticProps, NextPage } from 'next';
import path from 'path';
import React from 'react';
import styled from 'styled-components';
import GlobalStyles from 'styles/GlobalStyles';
import Header from '../components/Header';
import Hero from 'components/Hero';
import AboutSlide from 'components/AboutSlide';
import TeamSlide from 'components/TeamSlide';
import RoadmapSlide from 'components/RoadmapSlide';

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
				<RoadmapSlide />
				<TeamSlide />
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
