import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectSlide } from 'state/reducers/navigation';

interface SlideProps {
	color: string;
}

const StyledSlide = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	align-items: center;
	background-color: ${(props: SlideProps) => props.color};
	background-image: radial-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.75));
	min-height: 55rem;
	padding: 7rem 12rem;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-bottom: 3rem;
`;

const Header = styled.div`
	font-size: 10rem;
	font-weight: 700;
	/* color: var(--text-primary); */
	color: ${(props: SlideProps) => props.color};
`;

const SubHeader = styled.div`
	font-weight: 500;
	color: var(--text-primary);
	max-width: 70%;
	line-height: 2.3rem;
	margin-bottom: 2rem;
	font-family: 'Roboto', sans-serif;

	font-size: 2rem;
	@media (max-width: 768px) {
		font-size: 1.8rem;
		max-width: 80vw;
	}
`;

const TopLine = styled.div`
	position: absolute;
	top: 3rem;
	right: 4rem;
	border-bottom: solid 3px ${(props: SlideProps) => props.color};
	transform-origin: right;
	width: 80%;
`;

const BottomLine = styled.div`
	position: absolute;
	bottom: 3rem;
	left: 4rem;
	border-bottom: solid 3px ${(props: SlideProps) => props.color};
	transform-origin: right;
	width: 80%;
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

	useEffect(() => {
		if (slide === section)
			scrollRef.current?.scrollIntoView({
				behavior: 'smooth',
				block: 'center'
			});
	}, [slide]);

	return (
		<StyledSlide color={color} ref={scrollRef}>
			<TopLine color={color} />
			<BottomLine color={color} />
			<Content>
				{header && <Header color={color}>{header}</Header>}
				{subHeaders && subHeaders.map((subHeader: string, i) => <SubHeader key={i}>{subHeader}</SubHeader>)}
				{content && content}
			</Content>
		</StyledSlide>
	);
};

export default Slide;
