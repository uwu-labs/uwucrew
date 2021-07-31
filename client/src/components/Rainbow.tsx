import React from 'react';
import styled from 'styled-components';

const StyledRainbow = styled.div`
	width: 200vw;
	display: flex;
	flex-direction: column;
	filter: brightness(1.15) saturate(1.15);
	position: absolute;
	z-index: 4;
	bottom: 0;
`;

interface LineProps {
	color: string;
}

const Line = styled.div`
	height: 1rem;
	width: 100%;
	background-color: ${(props: LineProps) => props.color};
`;

const Rainbow = () => {
	return (
		<StyledRainbow>
			<Line color="var(--bg-01)" />
			<Line color="var(--bg-02)" />
			<Line color="var(--bg-03)" />
			<Line color="var(--bg-04)" />
			<Line color="var(--bg-05)" />
		</StyledRainbow>
	);
};

export default Rainbow;
