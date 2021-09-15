import React from 'react';
import styled from 'styled-components';
import { Pie } from 'react-chartjs-2';

const StyledSaleSplit = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;

	width: 35vw;
	height: 27vw;
	@media (max-width: 768px) {
		width: 90vw;
		height: 70vw;
	}
`;

const data = {
	labels: ['Charity', 'DAO Treasury', 'Future Development', 'Team'],
	datasets: [
		{
			label: 'Distribution',
			data: [7.5, 15, 27.5, 50],
			backgroundColor: ['#C27797', '#C79E9E', '#808080', '#8CB1B7'],
			borderColor: ['#C27797', '#C79E9E', '#808080', '#8CB1B7'],
			borderWidth: 2
		}
	]
};

const options = {
	plugins: {
		legend: {
			position: 'right'
		},
		tooltip: {
			callbacks: {
				label: (context: any) => `${context.dataset.label}: ${context.parsed}%`
			}
		}
	}
};

const SaleSplit = () => (
	<StyledSaleSplit>
		<Pie data={data} options={options} />
	</StyledSaleSplit>
);

export default SaleSplit;
