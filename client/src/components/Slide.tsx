import React, { useEffect, useRef, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { useSelector } from 'react-redux';
import { selectSlide } from 'state/reducers/navigation';

interface SlideProps {
	color: string;
	show: boolean;
}

const StyledSlide = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	align-items: center;
	background-color: ${(props: SlideProps) => props.color};
	background-image: radial-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.75));

	padding: 7rem 12rem;
	min-height: 55rem;
	@media (max-width: 768px) {
		padding: 1rem 3rem;
		min-height: 40rem;
		padding-top: 4rem;
	}
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-bottom: 3rem;
`;

const raise = keyframes`
  from {
	opacity: 0;
	transform: translateY(100%);
  }
  to {
	opacity: 1;
	transform: translateY(0);
  }
`;

const headerAnimate = css`
	animation: ${raise} 0.6s 0.9s ease-out forwards;
`;

const Header = styled.h1`
	font-weight: 700;
	color: ${(props: SlideProps) => props.color};

	font-size: 10rem;
	@media (max-width: 768px) {
		font-size: 5rem;
	}

	opacity: 0;
	transform: translateY(100%);
	${(props: SlideProps) => (props.show ? headerAnimate : 'animation: none')};
`;

const subHeaderAnimate = css`
	animation: ${raise} 0.6s 1.2s ease-out forwards;
`;

const SubHeader = styled.div`
	font-weight: 500;
	color: var(--text-primary);
	max-width: 70%;
	margin-bottom: 2rem;

	font-size: 2rem;
	line-height: 2.3rem;
	@media (max-width: 768px) {
		font-size: 1.6rem;
		line-height: 2rem;
		max-width: 100%;
		width: 100%;
	}

	opacity: 0;
	transform: translateY(100%);
	${(props: SlideProps) => (props.show ? subHeaderAnimate : 'animation: none')};
`;

const wipe = keyframes`
  from {
	transform: scaleX(0);
  }
  to {
	transform: scaleX(1);
  }
`;

const wipeAnimate = css`
	animation: ${wipe} 0.6s 0.3s ease-out forwards;
`;

const TopLine = styled.div`
	position: absolute;
	top: 3rem;
	right: 4rem;
	border-bottom: solid 3px ${(props: SlideProps) => props.color};
	transform-origin: right;
	width: 80%;

	transform-origin: right;
	transform: scaleX(0);
	${(props: SlideProps) => (props.show ? wipeAnimate : 'animation: none')};
`;

const BottomLine = styled.div`
	position: absolute;
	bottom: 3rem;
	left: 4rem;
	border-bottom: solid 3px ${(props: SlideProps) => props.color};
	transform-origin: right;
	width: 80%;

	transform-origin: left;
	transform: scaleX(0);
	${(props: SlideProps) => (props.show ? wipeAnimate : 'animation: none')};
`;

const contentAnimate = css`
	animation: ${raise} 0.6s 1.2s ease-out forwards;
`;

const ContentContainer = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	flex-direction: column;

	opacity: 0;
	transform: translateY(100%);
	${(props: SlideProps) => (props.show ? contentAnimate : 'animation: none')};
`;

interface Props {
	color: string;
	section: string;
	header?: string;
	subHeaders?: string[];
	content?: JSX.Element;
}

const Slide = ({ color, section, header, subHeaders, content }: Props): JSX.Element => {
	const slide = useSelector(selectSlide);
	const scrollRef = useRef<HTMLDivElement>(null);
	const [inView, setInView] = useState(false);

	const updateInView = () => {
		const pos = scrollRef.current?.getBoundingClientRect().top;
		if (!pos) return;
		if (window.innerHeight / 2 > pos!) setInView(true);
	};

	useEffect(() => {
		if (slide === section)
			scrollRef.current?.scrollIntoView({
				behavior: 'smooth',
				block: 'center'
			});
	}, [slide]);

	useEffect(() => {
		window.addEventListener('scroll', () => updateInView());
	}, []);

	return (
		<StyledSlide color={color} ref={scrollRef} show={inView}>
			<TopLine color={color} show={inView} />
			<BottomLine color={color} show={inView} />
			<Content>
				{header && (
					<Header color={color} show={inView}>
						{header}
					</Header>
				)}
				{subHeaders &&
					subHeaders.map((subHeader: string, i) => (
						<SubHeader key={i} color={color} show={inView}>
							{subHeader}
						</SubHeader>
					))}
				{content && (
					<ContentContainer color={color} show={inView}>
						{content}
					</ContentContainer>
				)}
			</Content>
		</StyledSlide>
	);
};

export default Slide;
