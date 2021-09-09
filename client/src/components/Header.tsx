/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useDispatch } from 'react-redux';
import { setSlide } from 'state/reducers/navigation';
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

import logo from '../assets/logos/logo.svg';
import { useRouter } from 'next/dist/client/router';

const StyledNavbar = styled.div`
	display: flex;
	position: absolute;
	align-items: center;
	left: 0;
	top: 0;
	width: 100%;
	z-index: 1;
	padding: 1rem 4rem;
	height: 6.5rem;

	@media (max-width: 768px) {
		padding: 10px 20px;
		justify-content: center;
	}
`;

const wipe = keyframes`
  from {
	transform: scaleX(0);
  }
  to {
	transform: scaleX(1);
  }
`;

const LineTwo = styled.div`
	margin-top: 0.4rem;
	margin-left: 3rem;
	border-bottom: solid 3px var(--text-primary);
	flex: 1;
	transform-origin: right;
	transform: scaleX(0);
	animation: ${wipe} 1s 0s ease-out forwards;

	@media (max-width: 768px) {
		width: calc(100vw - 145px - 0px);
		display: none;
	}
`;

const lower = keyframes`
  from {
	  opacity: 0;
	transform: translateY(-50px);
  }
  to {
	  opacity: 1;
	transform: translateY(0);
  }
`;

const LogoContainer = styled.div`
	width: 9rem;
	margin-top: 1rem;
	cursor: pointer;

	opacity: 0;
	transform: translateY(-50px);
	animation: ${lower} 1s 1s ease-out forwards;

	@media (max-width: 768px) {
		display: none;
	}
`;

const NavItems = styled.div`
	display: flex;
	align-items: center;
	margin-left: 2rem;
	margin-top: 0.3rem;

	opacity: 0;
	transform: translateY(-50px);
	animation: ${lower} 1s 1s ease-out forwards;

	@media (max-width: 768px) {
		margin-left: 0;
	}
`;

const NavItem = styled.div`
	padding: 0 1rem;
	font-weight: 500;
	cursor: pointer;
	text-transform: capitalize;
	white-space: nowrap;

	font-size: 2rem;
	@media (max-width: 768px) {
		font-size: 1.6rem;
	}
`;

const Navbar: React.FC = () => {
	const dispatch = useDispatch();
	const router = useRouter();

	const navigateToSlide = (slide: string): void => {
		if (router.pathname !== '/') void router.replace('/');
		dispatch(setSlide(slide));
	};

	return (
		<StyledNavbar>
			<Link href="/">
				<LogoContainer>
					<Image src={logo} />
				</LogoContainer>
			</Link>
			<NavItems>
				<NavItem onClick={() => navigateToSlide('about')}>about</NavItem>
				<NavItem onClick={() => navigateToSlide('team')}>team</NavItem>
				<NavItem onClick={() => navigateToSlide('roadmap')}>what's next</NavItem>
				{/* <NavItem onClick={() => dispatch(setSlide('lore'))}>lore</NavItem> */}
				{/* <NavItem onClick={() => dispatch(setSlide('provenance'))}>provenance</NavItem> */}
			</NavItems>
			<LineTwo />
		</StyledNavbar>
	);
};

export default Navbar;
