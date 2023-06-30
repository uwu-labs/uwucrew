import type { DerivativeType } from 'config/derivatives';
import React, { useState } from 'react';
import styled from 'styled-components';
import DerivativePopup from './DerivativePopup';

const Container = styled.div`
	position: relative;
	margin: 0.5rem;
	overflow: hidden;
`;

const Image = styled.img`
	width: 100%;
`;

const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	:hover > button {
		opacity: 1;
	}

	:hover > div {
		transform: translateY(0);
	}
`;

const OverlayBackground = styled.button`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	/* background: rgba(0, 0, 0, 0.2); */
	background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.2) 30%, rgba(0, 0, 0, 0.2) 70%, rgba(0, 0, 0, 0.7) 100%);
	cursor: zoom-in;

	transition: opacity 0.3s;
	opacity: 0;
`;

const OverlayRow = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem 1rem;
	transition: transform 0.3s;
`;

const TopRow = styled(OverlayRow)`
	transform: translateY(-200%);
`;

const BottomRow = styled(OverlayRow)`
	transform: translateY(200%);
`;

const Link = styled.a`
	color: white;
	font-size: 2rem;
	font-weight: 500;
	text-decoration: none;
	cursor: pointer;

	:hover {
		text-decoration: underline;
	}
`;

interface Props {
	derivative: DerivativeType;
}

const magicImageLinkTransform = (link: string, large = false): string => {
	// If it is a Twitter image
	if (link.includes('https://pbs.twimg.com/media')) {
		const coreLink = link.split('?')[0];
		return `${coreLink}?format=jpg&name=${large ? 'large' : 'small'}`;
	}

	return link;
};

const DerivativeImage = ({ derivative }: Props) => {
	const [popup, setPopup] = useState(false);

	return (
		<>
			<Container>
				<Image src={magicImageLinkTransform(derivative.image)} />
				<Overlay>
					<OverlayBackground onClick={() => setPopup(true)} />
					<TopRow>
						{derivative.id && (
							<Link
								href={`https://opensea.io/assets/ethereum/0xf75140376d246d8b1e5b8a48e3f00772468b3c0c/${derivative.id}`}
								target="_blank"
							>{`uwucrew #${derivative.id}`}</Link>
						)}
					</TopRow>
					<BottomRow>
						{derivative.artistLink && derivative.artistName && (
							<Link target="_blank" href={derivative.artistLink}>
								{derivative.artistName}
							</Link>
						)}
						{derivative.post && (
							<Link target="_blank" href={derivative.post}>
								Twitter Post
							</Link>
						)}
					</BottomRow>
				</Overlay>
			</Container>
			<DerivativePopup
				derivative={derivative}
				show={popup}
				close={() => setPopup(false)}
				image={magicImageLinkTransform(derivative.image, true)}
			/>
		</>
	);
};

export default DerivativeImage;
