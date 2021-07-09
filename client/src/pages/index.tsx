import { generateSitemap } from 'core/sitemap';
import type { GetStaticProps, NextPage } from 'next';
import path from 'path';
import React from 'react';
import styled from 'styled-components';
import Slide from '../components/Slide';
import girl01 from '../assets/girls/01.png';
import girl02 from '../assets/girls/02.png';
import girl03 from '../assets/girls/03.png';
import girl04 from '../assets/girls/04.png';
import girl06 from '../assets/girls/06.png';
import girl07 from '../assets/girls/07.png';
import BuySlide from '../components/BuySlide';

const Container = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	flex-direction: column;
	height: 100%;
`;

const IndexPage: NextPage = () => {
	return (
		<Container>
			<Slide
				color="#4C96B2"
				image={girl06}
				section=""
				header="Project Name"
				subHeaders={[
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
				]}
			/>
			<BuySlide />
			<Slide
				color="#D3AA73"
				image={girl04}
				section="about"
				header="About Project Name"
				subHeaders={[
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt '
				]}
			/>
			<Slide
				color="#6E4C65"
				image={girl07}
				right
				section="roadmap"
				header="Project Name Roadmap"
				subHeaders={[
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, '
				]}
			/>
			<Slide
				color="#A06758"
				image={girl02}
				section="team"
				header="The Project Name Team"
				subHeaders={[
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
				]}
			/>
			<Slide
				color="#6A8154"
				image={girl03}
				right
				section="provenance"
				header="NFT Name Provenance"
				subHeaders={[
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
				]}
			/>
			<Slide
				color="#C584A4"
				image={girl01}
				section="faq"
				header="Project Name FAQs"
				subHeaders={[
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, '
				]}
			/>
		</Container>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const directory = path.join(process.cwd(), 'src');

	await generateSitemap(directory);

	return { props: {} };
};

export default IndexPage;
