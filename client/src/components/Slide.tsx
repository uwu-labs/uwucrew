// import { Router, useRouter } from 'next/dist/client/router';
import React, { useRef } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

interface SlideProps {
	color: string;
}

const StyledSlide = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props: SlideProps) => props.color};
	height: 35rem;
`;

interface ContentProps {
	right?: boolean;
}

const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	transform: ${(props: ContentProps) => (props.right ? 'translateX(-15rem)' : 'translateX(15rem)')};
`;

interface ImageProps {
	right?: boolean;
}

const StyledImage = styled.div`
	position: absolute;
	width: 30rem;
	bottom: 0;
	left: ${(props: ImageProps) => (props.right ? 'auto' : '0')};
	right: ${(props: ImageProps) => (props.right ? '0' : 'auto')};
	transform: ${(props: ImageProps) => (props.right ? 'scaleX(-1)' : 'none')};
`;

const Header = styled.div`
	font-size: 4.5rem;
	font-weight: 600;
	color: var(--text-primary);
	margin-bottom: 1rem;
`;

const SubHeader = styled.div`
	font-size: 1.5rem;
	font-weight: 500;
	color: var(--text-primary);
	max-width: 60rem;
	text-align: center;
	margin-top: 1rem;
`;

interface Props {
	color: string;
	image: StaticImageData;
	right?: boolean;
	section: string;
	header?: string;
	subHeaders?: string[];
	content?: JSX.Element;
}

const Slide = ({ color, image, right, section, header, subHeaders, content }: Props): JSX.Element => {
	// const route = useRouter();
	const scrollRef = useRef<HTMLDivElement>(null);
	console.log(section);
	// Router.events.on('routeChangeStart', () => {
	// 	console.log(router.pathname);
	// 	console.log(section);
	// });

	// history.listen((location) => {
	// 	const i = location.search.search('scroll=');
	// 	if (i > -1 && location.search.substring(i + 7, location.search.length - i + 1) === section) {
	// 		scrollRef.current?.scrollIntoView({
	// 			behavior: 'smooth',
	// 			block: 'center'
	// 		});
	// 	}
	// });

	return (
		<StyledSlide color={color} ref={scrollRef}>
			<StyledImage right={right}>
				<Image src={image} />
			</StyledImage>
			<Content right={right}>
				{header && <Header>{header}</Header>}
				{subHeaders && subHeaders.map((subHeader: string) => <SubHeader>{subHeader}</SubHeader>)}
				{content && content}
			</Content>
		</StyledSlide>
	);
};

export default Slide;
