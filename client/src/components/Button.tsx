import styled from 'styled-components';

const Button = styled.button<{
	primary?: boolean;
}>`
	color: var(--bg);
	font-size: 2rem;
	font-weight: 600;
	position: relative;
	cursor: pointer;
	padding: 0.5rem 1rem;
	background: var(--text-primary);
	border: solid 2px var(--text-primary);
	text-transform: uppercase;
`;

export default Button;
