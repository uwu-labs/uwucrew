import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Slide from './Slide';

const ButtonContainer = styled.div`
	width: 15rem;
	height: 4.3rem;
	margin-top: 2rem;
`;

const LoreSlide = (): JSX.Element => {
	return (
		<Slide
			color="var(--bg-04)"
			section="lore"
			header="The Lore"
			subHeaders={[
				'Do you fight with your siblings? Don’t we all? Our story about sisters Kaitlyn and Ella is no different except for one thing, these two were powerful beings made out of pure cosmic energy. Kait and Ella were absolutely the same, but completely different. Kait was wise but cunning, she was made out of light energy called uwu, while Ella was cunning but wise, she got formed from owo, dark cosmic energy.',
				'Usually, their fights were lighthearted. For example, Kait liked to go inside Ella’s interdimensional room intentionally leaving the intergalactic door open, while Ella liked exploding stars that Kait liked. All of it was fine, until one day Ella accidentally spilled Kait’s iced coffee made out of energy from the sun and the biggest sibling clash in the history of the universe began.'
			]}
			content={
				<ButtonContainer>
					<Button color="var(--bg-04)">meow</Button>
				</ButtonContainer>
			}
		/>
	);
};

export default LoreSlide;
