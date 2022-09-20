import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import NekoBox from 'components/NekoBox';

const Container = styled.div`
	position: relative;
	width: 100vw;
	display: flex;
	flex-direction: column;
`;

const DerivativesPage: NextPage = () => {
	return (
		<>
			<Header />
			<Container>
				<NekoBox />
			</Container>
		</>
	);
};

export default DerivativesPage;
