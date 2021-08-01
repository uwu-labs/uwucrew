/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useDispatch } from 'react-redux';
import { setSlide } from 'state/reducers/navigation';
import styled from 'styled-components';

const navItems: string[] = ['about', 'roadmap', 'team', 'waifusion', 'provenance'];

const NavItemsWrapper = styled.ul`
	display: flex;
	align-items: center;
	border-bottom: solid 3px var(--text-primary);
	min-width: 500px;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

const Item = styled.li`
	margin-left: 2rem;
	display: flex;
	flex-direction: row;
	cursor: pointer;
	@media (max-width: 768px) {
		margin: 0.7rem 0;
	}
`;

const LinkableItem = styled.div`
	text-decoration: none;
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
	cursor: pointer;
	transition: all 0.3s;
	text-transform: capitalize;
	color: var(--text-primary);
	font-size: 1.3rem;
	font-weight: 600;
	* {
		color: var(--text-primary);
	}
	:hover {
		opacity: 0.7;
	}
	svg {
		height: 14pt;
		margin-right: 7px;
	}
	label {
		cursor: pointer;
	}
`;

const NavItems: React.FC = () => {
	const dispatch = useDispatch();

	return (
		<NavItemsWrapper>
			{/* {navItems.map((ni: string, i: number) => (
				<Item key={i}>
					<LinkableItem onClick={() => dispatch(setSlide(ni))}>
						<label>{ni}</label>
					</LinkableItem>
				</Item>
			))} */}
		</NavItemsWrapper>
	);
};

export default NavItems;
