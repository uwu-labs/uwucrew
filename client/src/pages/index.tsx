import { generateSitemap } from 'core/sitemap';
import type { GetStaticProps, NextPage } from 'next';
import path from 'path';
import React from 'react';

const IndexPage: NextPage = () => {
	return (
		<>
			<h1>Hi</h1>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const directory = path.join(process.cwd(), 'src');

	await generateSitemap(directory);

	return { props: {} };
};

export default IndexPage;
