import React from 'react';
import styled from 'styled-components';
import { Pie } from 'react-chartjs-2';

const StyledSaleSplit = styled.div`
	width: 35vw;
	height: 27vw;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
`;

const SubHeader = styled.div`
	font-weight: 600;
	color: var(--text-primary);
	max-width: 70%;
	text-align: center;
	/* margin-bottom: 2rem; */
	/* font-family: 'Roboto', sans-serif; */

	font-size: 3rem;
	line-height: 2.3rem;
	@media (max-width: 768px) {
		font-size: 1.6rem;
		line-height: 2rem;
		max-width: 100%;
		width: 100%;
	}
`;

const data = {
	labels: ['Charity', 'DAO Treasury', 'Future Development', 'Team'],
	datasets: [
		{
			label: '# of Votes',
			data: [7.5, 15, 27.5, 50],
			// backgroundColor: ['#DBE6EA', '#F4E5EB', '#DEEAEF', '#F7F0E7'],
			backgroundColor: ['#C27797', '#8CB1B7', '#C79E9E', '#828697'],
			borderColor: ['#C27797', '#8CB1B7', '#C79E9E', '#828697'],
			borderWidth: 2
		}
	]
};

const options = {
	plugins: {
		legend: {
			position: 'right'
		}
	}
};

const SaleSplit = () => (
	<StyledSaleSplit>
		{/* <SubHeader>Primary Sale Split</SubHeader> */}
		<Pie data={data} options={options} />
	</StyledSaleSplit>
);

export default SaleSplit;
