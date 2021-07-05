import { SITE } from 'core/constants';
import { DefaultSEOProps } from 'DefaultSEOProps';
import type { NextPage } from 'next';
import PlausibleProvider from 'next-plausible';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<PlausibleProvider domain={SITE}>
				<Head>
					<meta httpEquiv="Expires" content="1y" />
					<meta httpEquiv="Pragma" content="1y" />
					<meta httpEquiv="Cache-Control" content="1y" />
				</Head>
				<DefaultSeo {...DefaultSEOProps} />

				<Component {...pageProps} />
			</PlausibleProvider>
		</>
	);
};

export default App;
