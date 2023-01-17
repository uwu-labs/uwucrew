import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import NekoUwu from 'components/NekoUwu';

const Container = styled.div`
	position: relative;
	width: 100vw;
	display: flex;
	flex-direction: column;
`;

const NekoUwuwPage: NextPage = () => {
	return (
		<>
			<Header />
			<Container>
				<NekoUwu />
			</Container>
		</>
	);
};

export default NekoUwuwPage;
