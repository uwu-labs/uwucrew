import styled from 'styled-components';

const Button = styled.button<{
	primary?: boolean;
}>`
	color: var(--text-primary);
	font-size: 2rem;
	font-weight: 700;
	position: relative;
	cursor: pointer;
	padding: 1rem 2rem;
	background: white;
	border: solid 1px var(--text-primary);
`;

export default Button;
