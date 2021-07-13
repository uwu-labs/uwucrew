import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	z-index: 1;
`;

const Container = styled.footer`
	position: relative;
	width: 100%;
	padding: 2rem 4rem;
	box-sizing: border-box;
	display: flex;
	justify-content: flex-end;
`;

const Section = styled.div`
	display: flex;
	font-weight: 500;
	white-space: nowrap;
	@media (max-width: 768px) {
		display: none;
	}
`;

const ExternalLink = styled.a`
	margin-left: 20px;
	text-decoration: none;
	color: var(--text-primary);
	font-size: 1.2rem;
	font-weight: 600;
	:hover {
		text-decoration: underline;
	}
`;

const Footer: React.FC = () => {
	return (
		<StyledFooter>
			<Container>
				<Section>
					<ExternalLink href="https://twitter.com/waifusion" target="_blank" rel="noreferrer">
						Twitter
					</ExternalLink>
					<ExternalLink href="https://discord.gg/CaR7RhfDZ6" target="_blank" rel="noreferrer">
						Discord
					</ExternalLink>
					<ExternalLink href="https://t.me/Waifusion" target="_blank" rel="noreferrer">
						Telegram
					</ExternalLink>
					<ExternalLink href="http://github.com/waifusion" target="_blank" rel="noreferrer">
						GitHub
					</ExternalLink>
					<ExternalLink href="mailto: waifusiongovernance@gmail.com" target="_blank" rel="noreferrer">
						Contact
					</ExternalLink>
				</Section>
			</Container>
		</StyledFooter>
	);
};

export default Footer;
