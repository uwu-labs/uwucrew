import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { setSlide } from 'state/reducers/navigation';
import { useRouter } from 'next/dist/client/router';

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

const StyledNavItems = styled.div`
	display: flex;
	align-items: center;
	margin-left: 2rem;
	margin-top: 0.3rem;

	opacity: 0;
	transform: translateY(-50px);
	animation: ${lower} 1s 1s ease-out forwards;

	@media (max-width: 768px) {
		margin-left: 0;
		flex-direction: column;
	}
`;

const NavItem = styled.div`
	padding: 0 1rem;
	font-weight: 500;
	cursor: pointer;
	text-transform: none;
	white-space: nowrap;

	font-size: 2rem;
	@media (max-width: 768px) {
		font-size: 2rem;
		margin-bottom: 0.8rem;
	}
`;

const PageLink = styled.div`
	padding: 0 1rem;
	font-weight: 500;
	cursor: pointer;
	text-transform: none;
	white-space: nowrap;

	font-size: 2rem;
	@media (max-width: 768px) {
		font-size: 2rem;
		margin-bottom: 0.8rem;
	}
`;

const NavItems = () => {
	const dispatch = useDispatch();
	const router = useRouter();

	const navigateToSlide = (slide: string): void => {
		if (router.pathname !== '/') void router.replace('/');
		dispatch(setSlide(slide));
	};

	return (
		<StyledNavItems>
			<NavItem onClick={() => navigateToSlide('about')}>About</NavItem>
			<NavItem onClick={() => navigateToSlide('team')}>Team</NavItem>
			<Link href="/license">
				<PageLink>Art License</PageLink>
			</Link>
			<Link href="https://dressingroom.uwucrew.art/">
				<PageLink>Dressing Room</PageLink>
			</Link>
			<Link href="/quest">
				<PageLink>uwu Quest</PageLink>
			</Link>
			<Link href="/derivatives">
				<PageLink>Derivative Art Gallery</PageLink>
			</Link>
		</StyledNavItems>
	);
};

export default NavItems;
