import { SITE } from 'core/constants';
import { DefaultSEOProps } from 'DefaultSEOProps';
import type { NextPage } from 'next';
import PlausibleProvider from 'next-plausible';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from 'state';

import { config, dom } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<PlausibleProvider domain={SITE}>
				<ReduxProvider store={store}>
					<Head>
						<meta httpEquiv="Expires" content="1y" />
						<meta httpEquiv="Pragma" content="1y" />
						<meta httpEquiv="Cache-Control" content="1y" />

						{/* This fixes big icons with next-seo since CSS is somehow overwritten*/}
						<style>{dom.css()}</style>

						<link rel="preconnect" href="https://fonts.googleapis.com" />
						<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
						<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
					</Head>
					<DefaultSeo {...DefaultSEOProps} />
					<Component {...pageProps} />
				</ReduxProvider>
			</PlausibleProvider>
		</>
	);
};

export default App;
