/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled, { keyframes } from 'styled-components';

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
	width: calc(100vw - 145px - 40px);
	transform-origin: right;
	transform: scaleX(0);
	animation: ${wipe} 1s 1s ease-out forwards;

	@media (max-width: 768px) {
		width: calc(100vw - 145px - 0px);
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

const Logo = styled.div`
	font-size: 3.5rem;
	font-weight: 600;
	line-height: 2.4rem;

	opacity: 0;
	transform: translateY(-50px);
	animation: ${lower} 1s 2s ease-out forwards;
`;

const NavItems = styled.div`
	display: flex;
	align-items: center;
	margin-left: 2rem;
	margin-top: 0.3rem;

	opacity: 0;
	transform: translateY(-50px);
	animation: ${lower} 1s 2s ease-out forwards;
`;

const NavItem = styled.div`
	font-size: 2rem;
	margin: 0 1rem;
	font-weight: 500;
`;

const Navbar: React.FC = () => {
	return (
		<StyledNavbar>
			<Logo>uwu</Logo>
			<NavItems>
				<NavItem>test</NavItem>
				<NavItem>test</NavItem>
				<NavItem>test</NavItem>
				<NavItem>test</NavItem>
			</NavItems>
			<LineTwo />
		</StyledNavbar>
	);
};

export default Navbar;
