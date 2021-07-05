import { SITE } from 'core/constants';
import type { NextPage } from 'next';
import PlausibleProvider from 'next-plausible';
import type { AppProps } from 'next/app';
import React from 'react';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<PlausibleProvider domain={SITE}>
				<Component {...pageProps} />
			</PlausibleProvider>
		</>
	);
};

export default App;
