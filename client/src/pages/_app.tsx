import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import React from 'react';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<Component {...pageProps} />
		</>
	);
};

export default App;
