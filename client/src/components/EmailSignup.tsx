import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
	display: flex;
	align-items: center;
	height: 4.5rem;
`;

const Input = styled.input`
	height: 100%;
	border: solid 2px ${(props: Props) => props.color};
	background: white;
	width: 18rem;
	font-size: 1.6rem;
	padding: 0 1rem;
	color: var(--text-primary);
`;

const Button = styled.input`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 2rem;
	background-color: ${(props: Props) => props.color};
	color: white;
	font-size: 1.8rem;
	text-transform: uppercase;
	cursor: pointer;
`;

interface Props {
	color: string;
}

const EmailSignup = ({ color }: Props) => {
	const [email, setEmail] = useState('');

	return (
		<Form
			action="https://waifusion.us6.list-manage.com/subscribe/post?u=e27a013fdf4b77f3f4cd29de4&amp;id=53d3057369"
			method="post"
			id="mc-embedded-subscribe-form"
			name="mc-embedded-subscribe-form"
			target="_blank"
		>
			<Input
				color={color}
				placeholder="Enter email"
				type="email"
				value={email}
				name="EMAIL"
				id="mce-EMAIL"
				onChange={(e) => setEmail(e.target.value)}
			/>
			<Button color={color} type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" />
		</Form>
	);
};

export default EmailSignup;
