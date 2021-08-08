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

const images: StaticImageData[] = [uwu01, uwu02, uwu03, uwu04, uwu05, uwu06, uwu07];

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
	opacity: number;
}

const ImageTransform = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	transform: translateX(${(props: TransformProps) => props.transform});
	transition: transform 1s;
	opacity: ${(props: TransformProps) => props.opacity};

	> div {
		transform: translate(-2%, 4px);
	}
`;

interface Props {
	color: string;
	activeIndex: number;
}

const RotatingImage = ({ color, activeIndex }: Props) => {
	const relativeIndex = activeIndex % images.length;

	const imageTransform = (position: number): string => {
		if (position === 0 && relativeIndex === images.length - 1) return '-100%';
		if (position === relativeIndex - 1) return '100%';
		if (position === relativeIndex) return '0%';
		if (position === relativeIndex + 1) return '-100%';
		return '100%';
	};

	const opacity = (position: number) => {
		if (position === relativeIndex + 1) return 0;
		if (position === 0 && relativeIndex === images.length - 1) return 0;
		return 1;
	};

	return (
		<StyledImage color={color}>
			{images.map((image: StaticImageData, index: number) => (
				<ImageTransform transform={imageTransform(index)} opacity={opacity(index)}>
					<Image src={image} />
				</ImageTransform>
			))}
		</StyledImage>
	);
};

export default RotatingImage;
