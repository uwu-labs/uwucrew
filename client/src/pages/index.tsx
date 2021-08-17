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
import TeamSlide from 'components/TeamSlide';

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
				<TeamSlide />
				{/* <LoreSlide /> */}
				<Slide
					color="var(--bg-02)"
					section="roadmap"
					header="What's Next"
					subHeaders={[
						'We are a team who have been greatly involved in the NFT scene since early March, and are extremely excited to create a collection of our own for everyone to enjoy!',
						'We have several initiatives planned involving a merch shop, NFT drops, and collaborations to reward holders over time. We believe in a long term vision and are committed to our community to provide an innovative and fun experience.',
						'More announcements will be released in the coming weeks with further details on this!'
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
