import React from 'react';
import styled from 'styled-components';
import { TableMarkup } from './Table';
import uwu_quest from '../assets/quest/uwu_quest.png';
import uwu_forge from '../assets/quest/uwu_forge.png';
import forge_example from '../assets/quest/forge_example.png';
import uwu_insignia from '../assets/quest/uwu_insignia.png';

const StyledQuest = styled.div`
	padding: 10rem;
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
	align-items: center;
`;

const Header = styled.h1`
	font-weight: 700;
	color: var(--bg-02);
	line-height: 8rem;
	margin-top: 6rem;
	margin-bottom: 6rem;
	text-align: center;

	font-size: 8rem;
	@media (max-width: 768px) {
		font-size: 4.5rem;
		margin: 3rem;
		line-height: 4rem;
		text-align: center;
	}
`;

const SmallHeader = styled.h2`
	font-weight: 600;
	color: var(--text-primary);
	line-height: 4rem;
	text-align: center;
	margin: 2rem 0rem;

	font-size: 4rem;
	@media (max-width: 768px) {
		font-size: 3rem;
		margin: 3rem;
		text-align: center;
	}
`;

const SubHeader = styled.div`
	font-weight: 500;
	color: var(--text-primary);
	max-width: 70%;
	margin-top: 2rem;
	margin-bottom: 2rem;
	font-family: 'Roboto', sans-serif;

	font-size: 1.7rem;
	line-height: 2.3rem;
	@media (max-width: 768px) {
		font-size: 1.6rem;
		line-height: 2rem;
		margin: 2rem;
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
		margin-top: 1.5rem;
		text-align: center;
	}
`;

const Image = styled.img`
	margin-top: 2rem;
	margin-bottom: 2rem;
	max-width: 50%;
`;

const Ol = styled.ol`
	padding-top: 0px;
	padding-bottom: 0px;
	padding-left: 1rem;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-flex-direction: column;
	-ms-flex-direction: column;
	flex-direction: column;
	align-items: center;
	@media (max-width: 768px) {
		margin: 2rem;
	}
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
		margin-top: 0.7rem ;
		text-align: center;
		word-wrap: break-word;
	}
    position: relative;
    padding-left: 2rem;
`;

const Divider = styled.hr`
	border: 0;
	height: 0.5rem;
	border-radius: 99px;
	margin-top: 5rem;
	margin-bottom: 5rem;
	background-color: var(--bg-02);
	width: 33rem;

	@media screen and (min-width: 768px) .hr {
		margin-top: 3rem;
		margin-bottom: 3rem;
	}
`;

const Quest = () => {
	return (
		<StyledQuest>
			<Content>
				<Image src={uwu_quest.src} alt="uwucrew quest illustration" />
				<Header>Introducing: uwu Quest!</Header>
				<SubHeader>
					<Link href="https://mirror.xyz/uwucrew.eth/_4n9TUszNT23Eiby-vGwcaZDTjGCBWmwooMG9gLCzi0" target="_blank">
						uwu Quest
					</Link>{' '}
					is an interactive stamp trading game heavily inspired by rwx quest! In uwu Quest, players must collect and turn in specific
					amounts and types of stamps to win various prizes!
				</SubHeader>
				<SubHeader>
					This first season of uwu Quest will be centered around{' '}
					<Link href="https://mirror.xyz/uwucrew.eth/_R5xzweyufF3uUaFeTUr_vgmIJ--XPvaKNWA2ajUmXg" target="_blank">
						Systema Solaris
					</Link>{' '}
					stamps. The stamps will be distributed to everyone holding 5 or more uwus as of 5/26 (snapshot on block 14850400) and to Systema
					Solaris auction bidders. We’d like to give a massive thank you to{' '}
					<Link href="https://twitter.com/robek_world" target="_blank">
						robekworld
					</Link>{' '}
					for being a huge influence behind the idea of stamp quests and giving us his blessing to launch this project.
				</SubHeader>
				<Divider />
				<SmallHeader>Systema Solaris Stamp Distribution</SmallHeader>
				<SubHeader>uwu lover (5-9): 1 random stamp airdropped</SubHeader>
				<SubHeader>uwu whale (10-19): 2 random stamps airdropped</SubHeader>
				<SubHeader>uwu god (20+): 3 random stamps airdropped</SubHeader>
				<SubHeader>
					{' '}
					Bid on{' '}
					<Link href="https://foundation.app/collection/systemasolaris" target="_blank">
						Systema Solaris
					</Link>{' '}
					: Corresponding stamp airdropped, 1 per auction per person
				</SubHeader>
				<SubHeader>All airdrops will be sent out a couple hours after the last Systema Solaris auction ends.</SubHeader>
				<SubHeader>Be on the lookout for other ways to earn stamps as well through games or events!</SubHeader>
				<Divider />
				<SmallHeader>Prizes and Conditions</SmallHeader>
				<TableMarkup />
				<SubHeader>
					{' '}
					*{' '}
					<Link href="https://twitter.com/uwucrewnft/status/1524565175851958273" target="_blank">
						Custom rugs examples
					</Link>{' '}
				</SubHeader>
				<SubHeader>
					{' '}
					**{' '}
					<Link href="https://opensea.io/uwu_quest" target="_blank">
						uwu Quest wallet
					</Link>{' '}
				</SubHeader>
				<SubHeader>
					{' '}
					*** Systema Solaris Insignia will be dropped in addition to turning in any of the “Turn in 9 stamps” or “Turn in 27 stamps”
					prizes. More on this below!{' '}
				</SubHeader>
				<SubHeader> Note: prizes are only redeemable by uwucrew holders! </SubHeader>
				<Divider />
				<SmallHeader>Redeeming prizes through the Forge</SmallHeader>
				<Image src={uwu_forge.src} alt="uwucrew forge illustration" />
				<SubHeader>The Forge is the wallet where you'll send the stamps to claim your prize. Here's how that process works:</SubHeader>
				<Ol>
					<Li>
						Send* the correct number and types of stamps to the Forge at:{' '}
						<Link href="https://opensea.io/uwuquest_forge" target="_blank">
							forge.uwucrew.eth
						</Link>{' '}
						or 0x6596c3BC6feF6972E70902468A662dfFe3D1F968
					</Li>
					<Li>
						Send the etherscan transaction link along with the desired prize in the #quest-turnin channel on Discord (please check the
						pinned messages and make sure the prize you choose is still available - channel will open up once the stamp airdrops are sent
						out)
					</Li>
					<Li>
						NFT prizes (including uwucrew Insignias) will be sent out within 24 hours. We will reach out to winners for their details
						regarding merch related prizes!
					</Li>
				</Ol>
				<SubHeader>
					*The best way to transfer multiple NFTs at once is to click the 3 dots on the bottom left of any NFT you want to transfer on
					Opensea, then “Transfer”. After that you should be able to select up to 20 NFTs to transfer in one transaction. If this is your
					first time using Opensea, you will also need to confirm an additional transaction to initialize your wallet.
				</SubHeader>
				<Image src={forge_example.src} alt="Illustration of transferring NFTs on OpenSea" />
				<Divider />
				<SmallHeader>uwucrew Insignia</SmallHeader>
				<Image src={uwu_insignia.src} alt="uwucrew Insignia illustration" />
				<SubHeader>
					uwucrew Insignia are{' '}
					<Link href="https://vitalik.ca/general/2022/01/26/soulbound.html" target="_blank">
						soulbound
					</Link>{' '}
					Polygon airdrops which will be given to holders for various achievements. Soulbound means that they can NOT be sold or transferred
					out, and will be linked to that wallet forever.
				</SubHeader>
				<SubHeader>
					Our first Insignia will be the Systema Solaris Insignia, awarded for turning in 1 of each stamp to the forge wallet.
				</SubHeader>
				<SubHeader>
					There will also be different types of Insignia in the future which can be earned through other non-quest related events and
					achievements. Insignia holders will be given a special role on Discord and will receive special prizes and bonuses in the future!
				</SubHeader>
				<Link href="https://foundation.app/collection/systemasolaris" target="_blank">
					Systema Solaris collection
				</Link>
			</Content>
		</StyledQuest>
	);
};

export default Quest;
