import styled from 'styled-components';

interface Props {
	color: string;
	inactive?: boolean;
	width?: string;
}

const Button = styled.button`
	border-radius: 12px;
	height: 100%;
	height: 5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 1s;
	transition: background-color 0.3s;
	color: white;
	font-size: 2.2rem;
	font-weight: 500;
	cursor: pointer;
	padding: 0 5rem;
	text-transform: none;
	filter: brightness(1);
	pointer-events: ${(props: Props) => (props.inactive ? 'none' : 'auto')};
	width: ${(props: Props) => (props.width ? props.width : 'auto')};
	background-color: ${(props: Props) => props.color};

	:hover {
		filter: brightness(1.03);
		div:first-child {
		}
		div:last-child {
			transform: translateY(-2px);
		}
	}

	:active {
		div:first-child {
		}
		div:last-child {
			transform: translateY(2px);
		}
	}

	:disabled {
		cursor: not-allowed;
		opacity: 0.5;
		transform: none;
	}

	@media (max-width: 768px) {
		width: 100%;
	}
`;

export default Button;
