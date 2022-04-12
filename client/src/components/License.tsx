import React from 'react';
import styled from 'styled-components';

const theCrew = [
	14, 25, 35, 389, 1461, 1850, 2504, 3209, 3489, 4174, 4542, 4636, 6153, 6785, 7643, 7953, 8006, 8022, 8028, 8047, 8614, 9295, 9641, 9668, 9669
];

const StyledLicense = styled.div`
	padding: 1rem 5rem;
	padding-top: 10rem;
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: var(--bg-02);
	background-image: radial-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.75));

	@media (max-width: 720px) {
		padding: 2rem;
		padding-top: 7rem;
	}
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 150em;
`;

const Header = styled.h1`
	font-weight: 700;
	color: var(--bg-02);
	line-height: 6rem;
	margin-top: 6rem;

	font-size: 8rem;
	@media (max-width: 768px) {
		font-size: 4.5rem;
		margin-top: 4rem;
		line-height: 4rem;
	}
`;

const SmallHeader = styled.h2`
	font-weight: 600;
	color: var(--text-primary);
	margin-top: 5rem;
	line-height: 3rem;

	font-size: 4rem;
	@media (max-width: 768px) {
		font-size: 3rem;
		margin-top: 4rem;
	}
`;

const SubHeader = styled.div`
	font-weight: 500;
	color: var(--text-primary);
	max-width: 70%;
	margin-top: 2rem;
	font-family: 'Roboto', sans-serif;

	font-size: 1.7rem;
	line-height: 2.3rem;
	@media (max-width: 768px) {
		font-size: 1.6rem;
		line-height: 2rem;
		max-width: 100%;
		width: 100%;
		margin-top: 1.5rem;
	}
`;

const Link = styled.a`
	font-weight: 500;
	color: var(--text-primary);
	max-width: 70%;
	margin-top: 2rem;
	font-family: 'Roboto', sans-serif;
	text-decoration: underline;

	font-size: 1.7rem;
	line-height: 2.3rem;
	@media (max-width: 768px) {
		font-size: 1.6rem;
		line-height: 2rem;
		max-width: 100%;
		width: 100%;
		margin-top: 1.5rem;
	}
`;

const Uwus = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	grid-gap: 1rem;
	margin-top: 5rem;
`;

const UwuContainer = styled.a`
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: center;
	cursor: pointer;

	transform: scale(1);
	transition: 0.3s transform;
	:hover {
		transform: scale(1.05);
	}
`;

const UwuImage = styled.img`
	width: 100%;
`;

const UwuText = styled.div`
	font-weight: 500;
	font-size: 2rem;
`;

const Ul = styled.ul`
	display: flex;
	flex-direction: column;
	margin-left: 3rem;
`;

const Li = styled.li`
	font-weight: 500;
	color: var(--text-primary);
	max-width: 70%;
	margin-top: 1rem;
	font-family: 'Roboto', sans-serif;

	font-size: 1.7rem;k
	line-height: 2.3rem;
	@media (max-width: 768px) {
		font-size: 1.6rem;
		line-height: 2rem;
		max-width: 100%;
		width: 100%;
		margin-top: 0.7rem ;
	}
`;

const License = () => {
	return (
		<StyledLicense>
			<Content>
				<Header>uwu Art License</Header>
				<SmallHeader>Holders</SmallHeader>
				<Link href="http://creativecommons.org/licenses/by/4.0" target="_blank">
					CC BY 4.0
				</Link>
				<SubHeader>For the NFT(s) you own you’re free to:</SubHeader>
				<Ul>
					<Li>Copy or share in any medium</Li>
					<Li>Make derivatives, remix, or transform in any medium, even commercially</Li>
					<Li>As long as you give proper credit to uwucrew</Li>
				</Ul>
				<SmallHeader>Non-holders</SmallHeader>
				<Link href="http://creativecommons.org/licenses/by-nc/4.0" target="_blank">
					CC BY-NC 4.0
				</Link>
				<SubHeader>For any NFT in the collection you’re free to:</SubHeader>
				<Ul>
					<Li>Copy or share in any medium</Li>
					<Li>Make derivatives, remix, or transform in any medium, but NOT commercially</Li>
					<Li>As long as you give proper credit to uwucrew</Li>
				</Ul>
				<SmallHeader>uwucrew Team</SmallHeader>
				<SubHeader>
					The uwucrew team reserves rights to use all uwucrew collection NFT art and all derivative art for promotional use.
				</SubHeader>
				<SmallHeader>Usage with Permission</SmallHeader>
				<SubHeader>
					The owner of the NFT not only owns the art, but also the character of the NFT as well — meaning that they have the ability to
					grant permission for others to sell derivative art that includes their character for as long as they own the original NFT.
				</SubHeader>
				<SubHeader>
					Keep in mind that this permission only persists for the owner of the NFT, so if the original NFT is sold after permission was
					given, commercial usage permission of the character must be requested again from the new owner.
				</SubHeader>
				<Header>The Crew</Header>
				<Link href="https://creativecommons.org/share-your-work/public-domain/cc0" target="_blank">
					CC0
				</Link>
				<SubHeader>For all NFTs in the community collection:</SubHeader>
				<Ul>
					<Li>Anyone is free to copy or share in any medium</Li>
					<Li>Anyone is free to make derivatives, remix, or transform in any medium, or use for any purpose, even commercially</Li>
				</Ul>
				<SubHeader>
					We’ve picked the following 25 uwus from the uwulabs and team members’ wallets to start the uwucrew community collection a.k.a “The
					Crew”! Once an uwucrew NFT is added to the community collection, it will never be removed. More uwus may join The Crew in the
					future!
				</SubHeader>
				<Uwus>
					{theCrew.map((uwu: number) => (
						<UwuContainer href={`https://opensea.io/assets/0xf75140376d246d8b1e5b8a48e3f00772468b3c0c/${uwu}`} target="_blank">
							<UwuImage src={`https://firebasestorage.googleapis.com/v0/b/uwucrew-thumbnails/o/${uwu}.png?alt=media`} />
							<UwuText>{`uwu: #${uwu}`}</UwuText>
						</UwuContainer>
					))}
				</Uwus>
			</Content>
		</StyledLicense>
	);
};

export default License;
