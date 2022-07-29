import React from 'react';
import Slide from 'components/Slide';

const AboutSlide = () => {
	return (
		<Slide
			color="var(--bg-01)"
			section="about"
			header="About"
			subHeaders={[
				'uwucrew is a generative collection of 9670 avatars inspired by anime, aiming to be both inclusive and expressive. Every uwucrew NFT is completely unique and features up to 9 traits with 140+ assets.',
				'An interesting property of uwucrew is our unique asset generation which involves over 25 layers of hand-drawn art! In order to support various kinds of outfits and expressions, the uwucrew collection also supports multiple arm poses (even with sleeved clothes) to let us incorporate several kinds of hand accessories!',
				'uwucrew launched on September 5th 2021 at the cost of 0.06 ETH each, featuring a re-imagined minting process which prevented gas wars and made minting a painless and accessible experience.',
				'uwucrew is licensed under the uwu art license, holders are free to use their NFT characters as they wish, with a portion of team-designated uwus licensed as CC0!'
			]}
		/>
	);
};

export default AboutSlide;
