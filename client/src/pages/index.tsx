import { generateSitemap } from 'core/sitemap';
import type { GetStaticProps, NextPage } from 'next';
import path from 'path';
import React from 'react';
import styled from 'styled-components';
import GlobalStyles from 'styles/GlobalStyles';
import Header from '../components/Header';
import Footer from 'components/Footer';
import Hero from 'components/Hero';

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
				{/* <Slide
					color="var(--bg-01)"
					image={girl06}
					section="about"
					header="About"
					subHeaders={[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt '
					]}
				/>
				<Slide
					right
					color="var(--bg-02)"
					image={girl05}
					section="roadmap"
					header="Roadmap"
					subHeaders={[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
					]}
				/>
				<Slide
					color="var(--bg-03)"
					image={girl04}
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
					right
					color="var(--bg-04)"
					image={girl07}
					section="waifusion"
					header="Waifusion"
					subHeaders={[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
					]}
				/>
				<Slide
					color="var(--bg-05)"
					image={girl02}
					section="provenance"
					header="Provenance"
					subHeaders={[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
					]}
				/> */}
			</Container>
			<Footer />
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const directory = path.join(process.cwd(), 'src');

	await generateSitemap(directory);

	return { props: {} };
};

export default IndexPage;
