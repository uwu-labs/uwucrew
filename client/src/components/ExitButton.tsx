import React from 'react';
import styled from 'styled-components';

const StyledExitButton = styled.button`
	position: absolute;
	top: 2rem;
	right: 2rem;
	width: 3rem;
	height: 3rem;
	cursor: pointer;
`;

interface LineProps {
	color: string;
	right?: boolean;
}

const Line = styled.div`
	width: 100%;
	height: 3px;
	transition: background-color 1s;
	background-color: ${(props: LineProps) => props.color};
	transform: ${(props: LineProps) => (props.right ? 'translateY(0px) rotate(45deg)' : 'translateY(-3px) rotate(-45deg)')};
`;

interface Props {
	color: string;
	action: () => void;
}

const ExitButton = ({ color, action }: Props) => {
	return (
		<StyledExitButton onClick={() => action()}>
			<Line color={color} right />
			<Line color={color} />
		</StyledExitButton>
	);
};

export default ExitButton;
