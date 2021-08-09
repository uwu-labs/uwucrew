import styled from 'styled-components';

interface Props {
	color: string;
}

const Button = styled.button`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 2rem;
	background-color: ${(props: Props) => props.color};
	transition: all 1s;
	color: white;
	font-size: 1.8rem;
	font-weight: 500;
	text-transform: uppercase;
	cursor: pointer;
	padding: 0 5rem;

	@media (max-width: 768px) {
		padding: 0 1rem;
	}
`;

export default Button;
