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
import { ethers } from 'ethers';

import { config, dom } from '@fortawesome/fontawesome-svg-core';
import { Web3ReactProvider } from '@web3-react/core';
import Web3Automation from 'components/Web3Automation';
config.autoAddCss = false;

// TODO Add force wallet popup on mint page
// TODO Add adjustable color for connect popup
// TODO Implement mint mobile view
// TODO Add routing to mint page on hero
// TODO Add conditional routing to mint page on buy page and sold out message
// TODO Finish API

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
	const getLibrary = (provider: any): any => {
		return new ethers.providers.Web3Provider(provider);
	};

	return (
		<>
			<Web3ReactProvider getLibrary={getLibrary}>
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
							<link
								href="https://fonts.googleapis.com/css2?family=Baloo+Chettan+2:wght@400;500;600;700;800&display=swap"
								rel="stylesheet"
							></link>
						</Head>
						<Web3Automation />
						<DefaultSeo {...DefaultSEOProps} />
						<Component {...pageProps} />
					</ReduxProvider>
				</PlausibleProvider>
			</Web3ReactProvider>
		</>
	);
};

export default App;
