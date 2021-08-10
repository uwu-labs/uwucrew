import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import ExitButton from './ExitButton';

const StyledPopup = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.25);
	backdrop-filter: blur(6px);
	z-index: 1;
`;

const Background = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;

interface ContainerProps {
	large?: boolean;
	color: string;
}

const Container = styled.div`
	position: relative;
	width: ${(props: ContainerProps) => (props.large ? '90vw' : '600px')};
	height: ${(props: ContainerProps) => (props.large ? '90vh' : 'auto')};
	padding: 2rem;
	background-color: ${(props: ContainerProps) => props.color};
	background-image: radial-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.75));
	border: 3px solid ${(props: ContainerProps) => props.color};
	font-size: 1.4rem;
	font-weight: 500;
	color: var(--plain-dark);
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (max-width: 768px) {
		width: 90vw;
	}
`;

const Header = styled.h3`
	font-size: 3rem;
	font-weight: 600;
	margin-bottom: 1rem;
	color: var(--text-primary);
`;

const Body = styled.p`
	font-size: 1.4rem;
	font-weight: 500;
	margin-bottom: 2rem;
	text-align: center;
	color: var(--plain-dark);
`;

const ButtonContainer = styled.div`
	margin-top: 2rem;
	display: flex;
	button {
		margin: 0 1rem;
	}
	@media (max-width: 768px) {
		flex-direction: column;
		button {
			margin: 1rem 0;
		}
	}
`;

interface Props {
	show: boolean;
	close: () => void;
	color: string;
	header?: string;
	body?: string;
	content?: JSX.Element;
	buttonText?: string;
	buttonAction?: () => void;
	secondButtonText?: string;
	secondButtonAction?: () => void;
	large?: boolean;
}

const Popup: React.FC<Props> = (props) => {
	if (!props.show) return null;

	return (
		<StyledPopup>
			<Background onClick={() => props.close()} />
			<Container large={props.large} color={props.color}>
				<ExitButton color={props.color} action={() => props.close()} />
				{props.header && <Header>{props.header}</Header>}
				{props.body && <Body>{props.body}</Body>}
				{props.content && props.content}
				{(props.buttonText || props.secondButtonText) && (
					<ButtonContainer>
						{props.buttonText && (
							<Button
								color="pink"
								onClick={() => {
									if (props.buttonAction) props.buttonAction();
								}}
							>
								{props.buttonText}
							</Button>
						)}
						{props.secondButtonText && (
							<Button
								color="pink"
								onClick={() => {
									if (props.secondButtonAction) props.secondButtonAction();
								}}
							>
								{props.secondButtonText}
							</Button>
						)}
					</ButtonContainer>
				)}
			</Container>
		</StyledPopup>
	);
};

export default Popup;
