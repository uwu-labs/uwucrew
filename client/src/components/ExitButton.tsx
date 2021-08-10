import React from 'react';
import styled from 'styled-components';

const StyledExitButton = styled.div`
	position: absolute;
	top: 3rem;
	right: 3rem;
	width: 3rem;
	height: 3rem;
`;

interface LineProps {
	color: string;
}

const Line = styled.div`
	width: 100%;
	height: 3px;
	background-color: ${(props: LineProps) => props.color};
`;

interface Props {
	color: string;
	action: () => void;
}

const ExitButton = ({ color, action }: Props) => {
	return (
		<StyledExitButton onClick={() => action()}>
			<Line color={color} />
			<Line color={color} />
		</StyledExitButton>
	);
};

export default ExitButton;
