/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled, { keyframes } from 'styled-components';

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

	@media (max-width: 768px) {
		width: calc(100vw - 145px - 0px);
	}
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

const Navbar: React.FC = () => {
	return (
		<StyledNavbar>
			<Container>
				<Logo>uwu</Logo>
				<LineTwo />
			</Container>
		</StyledNavbar>
	);
};

export default Navbar;
