import React from 'react';
import Image from 'next/image';
import styled, { keyframes } from 'styled-components';
import uwu01 from '../assets/girls/01.png';
import uwu02 from '../assets/girls/02.png';
import uwu03 from '../assets/girls/03.png';
import uwu04 from '../assets/girls/04.png';
import uwu05 from '../assets/girls/05.png';
import uwu06 from '../assets/girls/06.png';
import uwu07 from '../assets/girls/07.png';

const slide = keyframes`
  from {
	  opacity: 0;
	transform: translateX(-100%);
  }
  to {
	  opacity: 1;
	transform: translateX(0);
  }
`;

interface ImageProps {
	color: string;
}

const StyledImage = styled.div`
	position: relative;
	width: 35vw;
	height: 32vw;
	padding: 2rem;
	padding-bottom: 0;
	background-color: ${(props: ImageProps) => props.color};
	transition: all 1s;
	overflow: hidden;

	opacity: 0;
	transform: translateX(100%);
	animation: ${slide} 1s 3.2s ease-out forwards;

	@media (max-width: 768px) {
		width: 100%;
		height: 100%;
		padding: 0;
	}
`;

interface TransformProps {
	transform: string;
}

const ImageTransform = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	transform: translateX(${(props: TransformProps) => props.transform});
	transition: all 1s;

	> div {
		transform: translate(-2%, 4px);
	}
`;

interface Props {
	color: string;
	activeIndex: number;
}

const RotatingImage = ({ color, activeIndex }: Props) => {
	const imageTransform = (position: number): string => {
		return (activeIndex - position) * 100 + '%';
	};

	return (
		<StyledImage color={color}>
			<ImageTransform transform={imageTransform(0)}>
				<Image src={uwu01} />
			</ImageTransform>
			<ImageTransform transform={imageTransform(1)}>
				<Image src={uwu02} />
			</ImageTransform>
			<ImageTransform transform={imageTransform(2)}>
				<Image src={uwu03} />
			</ImageTransform>
			<ImageTransform transform={imageTransform(3)}>
				<Image src={uwu04} />
			</ImageTransform>
			<ImageTransform transform={imageTransform(4)}>
				<Image src={uwu05} />
			</ImageTransform>
			<ImageTransform transform={imageTransform(5)}>
				<Image src={uwu06} />
			</ImageTransform>
			<ImageTransform transform={imageTransform(6)}>
				<Image src={uwu07} />
			</ImageTransform>
		</StyledImage>
	);
};

export default RotatingImage;
