import React from 'react';
import type { DerivativeType } from 'config/derivatives';
import styled from 'styled-components';
import ExitButton from './ExitButton';

const StyledDerivativePopup = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 3vw;
	z-index: 2;
`;

const Background = styled.button`
	background: rgba(0, 0, 0, 0.2);
	backdrop-filter: blur(10px);
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;

const Popup = styled.div`
	position: relative;
	height: 100%;
	display: flex;
	background-color: white;
	max-width: calc(100% - 2rem);

	@media (max-width: 1024px) {
		flex-direction: column;
		height: auto;
	}
`;

const Image = styled.img`
	height: 100%;

	@media (max-width: 1024px) {
		height: auto;
		width: 100%;
	}
`;

const Sidebar = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	padding: 3rem;
	min-width: 25rem;
	padding-top: 8rem;

	@media (max-width: 1024px) {
		padding: 2rem;
		padding-top: 2rem;
	}
`;

const Row = styled.div`
	display: flex;
	align-items: center;
`;

const Header = styled.div`
	color: black;
	font-size: 2rem;
	font-weight: 700;
	margin-right: 1rem;
`;

const Link = styled.a`
	color: black;
	font-size: 2rem;
	font-weight: 500;
	text-decoration: underline;
`;

interface Props {
	derivative: DerivativeType;
	show: boolean;
	close: () => void;
}

const DerivativePopup = ({ derivative, show, close }: Props) => {
	if (!show) return <></>;

	return (
		<StyledDerivativePopup>
			<Background onClick={() => close()} />
			<Popup>
				<Image src={derivative.image} />
				<Sidebar>
					<ExitButton color="black" action={close} />
					{derivative.id && (
						<Row>
							<Header>uwucrew:</Header>
							<Link href={`https://opensea.io/assets/0xf75140376d246d8b1e5b8a48e3f00772468b3c0c/${derivative.id}`} target="_blank">
								{`#${derivative.id}`}
							</Link>
						</Row>
					)}
					{derivative.artistName && derivative.artistLink && (
						<Row>
							<Header>Artist:</Header>
							<Link href={derivative.artistLink} target="_blank">
								{derivative.artistName}
							</Link>
						</Row>
					)}
					{derivative.post && (
						<Row>
							<Header>Post:</Header>
							<Link href={derivative.post} target="_blank">
								Twitter
							</Link>
						</Row>
					)}
				</Sidebar>
			</Popup>
		</StyledDerivativePopup>
	);
};
export default DerivativePopup;
