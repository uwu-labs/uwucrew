import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Derivatives from 'components/Derivatives';

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
				<Derivatives />
			</Container>
		</>
	);
};

export default DerivativesPage;
