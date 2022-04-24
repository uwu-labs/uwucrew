import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import GlobalStyles from 'styles/GlobalStyles';
import Header from '../components/Header';
import License from 'components/License';

const Container = styled.div`
	position: relative;
	width: 100vw;
	display: flex;
	flex-direction: column;
`;

const LicensePage: NextPage = () => {
	return (
		<>
			<GlobalStyles />
			<Header />
			<Container>
				<License />
			</Container>
		</>
	);
};

export default LicensePage;
