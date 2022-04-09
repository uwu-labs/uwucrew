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
	text-transform: capitalize;
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
	text-transform: capitalize;
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
			<NavItem onClick={() => navigateToSlide('about')}>about</NavItem>
			<NavItem onClick={() => navigateToSlide('roadmap')}>roadmap</NavItem>
			<NavItem onClick={() => navigateToSlide('team')}>team</NavItem>
			<Link href="/license">
				<PageLink>license</PageLink>
			</Link>
			<Link href="https://dressingroom.uwucrew.art/">
				<PageLink>dressing room</PageLink>
			</Link>
			<Link href="/derivatives">
				<PageLink>derivative gallery</PageLink>
			</Link>
		</StyledNavItems>
	);
};

export default NavItems;
