import React from 'react';
import Slide from 'components/Slide';

const AboutSlide = () => {
	return (
		<Slide
			color="var(--bg-01)"
			section="about"
			header="About"
			subHeaders={[
				'Created by uwu Labs, uwucrew released on September 5th 2021 and is an NFT art collection of 9670 anime style inspired avatars. We want to keep it uwu and foster a culture around empowering artists, involving our community as much as possible!',
				'uwucrew NFTs are licensed under the uwu Art License, holders are free to use their NFT characters as they wish, with a portion of team-designated uwus licensed as CC0!',
				'An interesting property of uwucrew is our unique asset generation which involves over 30 layers of hand-drawn art! In order to support various kinds of outfits and expressions, the uwucrew collection also supports multiple arm poses (even with sleeved clothes) to let us incorporate different accessories!',
				'Since launch, our positive art culture has made leaps through the NFT space, and we strive to continue setting the standard for empowering artsts and more!'
			]}
		/>
	);
};

export default AboutSlide;
