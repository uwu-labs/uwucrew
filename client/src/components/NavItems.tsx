/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';

const NavItemsWrapper = styled.ul`
	display: flex;
	align-items: center;
	border-bottom: solid 3px var(--text-primary);
	min-width: 500px;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;
const NavItems: React.FC = () => {
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
