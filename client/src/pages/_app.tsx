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
import GlobalStyles from 'styles/GlobalStyles';
config.autoAddCss = false;

// ------ Tomorrow
// TODO BSC redeem
// TODO Add team split and roadmap
// TODO Add lore
// TODO Make open source
// TODO Rename Repo
// TODO Create Readme
// ---- AFTER MINT FINISHES
// TODO Fully remove mint check

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
						</Head>
						<GlobalStyles />
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
