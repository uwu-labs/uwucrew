import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Quest from 'components/Quest';

const Container = styled.div`
	position: relative;
	width: 100vw;
	display: flex;
	flex-direction: column;
`;

const QuestPage: NextPage = () => {
	return (
		<>
			<Header />
			<Container>
				<Quest />
			</Container>
		</>
	);
};

export default QuestPage;
