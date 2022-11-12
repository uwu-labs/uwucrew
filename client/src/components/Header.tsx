/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

import logo from '../assets/logos/logo_bunny.svg';
import NavItems from './NavItems';
import ExitButton from './ExitButton';

const NAVBAR_HEIGHT = '6.5rem';

const StyledNavbar = styled.div`
	display: flex;
	position: absolute;
	align-items: center;
	left: 0;
	top: 0;
	width: 100%;
	z-index: 1;
	padding: 1rem 4rem;
	height: ${NAVBAR_HEIGHT};

	@media (max-width: 768px) {
		padding: 10px 20px;
		justify-content: space-between;
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
	height: ${NAVBAR_HEIGHT};
	width: 4rem;
	display: flex;
	align-items: center;
	margin-top: 1rem;
	cursor: pointer;

	opacity: 0;
	transform: translateY(-50px);
	animation: ${lower} 1s 1s ease-out forwards;
`;

const Hamburger = styled.div`
	display: none;
	flex-direction: column;
	width: 3.7rem;
	height: 3rem;
	padding: 0.3rem;
	justify-content: space-between;
	animation: ${lower} 1s 1s ease-out forwards;

	@media (max-width: 768px) {
		display: flex;
	}
`;

const Line = styled.div`
	height: 0.3rem;
	background: var(--text-primary);
	width: 100%;
	border-radius: 0.2rem;
`;

const DesktopContainer = styled.div`
	display: flex;

	@media (max-width: 768px) {
		display: none;
	}
`;

const Dropdown = styled.div`
	position: fixed;
	width: 100%;
	padding: 3rem;
	top: 0;
	left: 0;
	background: var(--bg);
`;

const Navbar: React.FC = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<StyledNavbar>
			<Link href="/">
				<LogoContainer>
					<Image src={logo} />
				</LogoContainer>
			</Link>
			<DesktopContainer>
				<NavItems />
			</DesktopContainer>
			<Hamburger onClick={() => setMenuOpen(true)}>
				<Line />
				<Line />
				<Line />
			</Hamburger>
			{menuOpen && (
				<Dropdown>
					<NavItems />
					<ExitButton color="black" action={() => setMenuOpen(false)} />
				</Dropdown>
			)}
			<LineTwo />
		</StyledNavbar>
	);
};

export default Navbar;
