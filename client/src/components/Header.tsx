/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import styled from 'styled-components';
import NavItems from './NavItems';
import Popup from './Popup';

const StyledNavbar = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	z-index: 1;
`;

const Logo = styled.div`
	font-size: 2.2rem;
	font-weight: 600;
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

const NavItemsContainer = styled.div`
	@media (max-width: 768px) {
		display: none;
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
				<NavItemsContainer>
					<NavItems />
				</NavItemsContainer>
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
