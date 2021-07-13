/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

interface NavItemType {
	label: string;
	route: string;
}

const navItems: NavItemType[] = [
	{
		label: 'buy',
		route: '/?scroll=buy'
	},
	{
		label: 'about',
		route: '/?scroll=about'
	},
	{
		label: 'roadmap',
		route: '/?scroll=roadmap'
	},
	{
		label: 'team',
		route: '/?scroll=team'
	},
	{
		label: 'provenance',
		route: '/?scroll=provenance'
	}
];

const NavItemsWrapper = styled.ul`
	display: flex;
	align-items: center;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

const Item = styled.li`
	margin-left: 30px;
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
	font-size: 1.2rem;
	font-weight: 600;
	* {
		color: var(--text-primary);
	}
	:hover {
		opacity: 0.5;
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
	return (
		<NavItemsWrapper>
			{navItems.map((ni: NavItemType) => (
				<Item>
					<Link href={ni.route}>
						<LinkableItem>
							<label>{ni.label}</label>
						</LinkableItem>
					</Link>
				</Item>
			))}
		</NavItemsWrapper>
	);
};

export default NavItems;
