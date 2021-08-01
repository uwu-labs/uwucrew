/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import NavItems from './NavItems';
import Popup from './Popup';

const wipe = keyframes`
  from {
	transform: scaleX(0);
  }
  to {
	transform: scaleX(1);
  }
`;

const LineTwo = styled.div`
	position: fixed;
	top: 40px;
	right: 30px;
	border-bottom: solid 3px var(--text-primary);
	width: calc(100vw - 145px - 40px);
	transform-origin: right;
	transform: scaleX(0);
	animation: ${wipe} 1s 1s ease-out forwards;
`;

const StyledNavbar = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	z-index: 1;
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

const Logo = styled.div`
	font-size: 3.5rem;
	font-weight: 600;
	opacity: 0;
	transform: translateY(-50px);
	animation: ${lower} 1s 2s ease-out forwards;
`;

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-sizing: border-box;
	padding: 1rem 4rem;
	@media (max-width: 768px) {
		padding: 10px 20px;
	}
`;

const Hamburger = styled.button`
	display: flex;
	flex-direction: column;
	width: 1.5rem;
	height: 1.2rem;
	justify-content: space-between;
	border: none;
	background: none;
	outline: none;
	@media (min-width: 769px) {
		display: none;
	}
`;

const Line = styled.div`
	width: 100%;
	height: 0.1rem;
	background-color: var(--text-primary);
`;

const Navbar: React.FC = () => {
	const [navOpen, setNavOpen] = useState(false);

	return (
		<StyledNavbar>
			<Container>
				<Logo>uwu</Logo>
				<LineTwo />
				<Hamburger onClick={() => setNavOpen(true)}>
					<Line />
					<Line />
					<Line />
				</Hamburger>
				<Popup show={navOpen} close={() => setNavOpen(false)} content={<NavItems />} />
			</Container>
		</StyledNavbar>
	);
};

export default Navbar;
