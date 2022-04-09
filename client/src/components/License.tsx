import { Utf8ErrorFuncs } from 'ethers/lib/utils';
import styled from 'styled-components';

const theCrew = [
	14, 25, 35, 389, 1461, 1850, 2504, 3209, 3489, 4174, 4542, 4636, 6153, 6785, 7643, 7953, 8006, 8022, 8028, 8047, 8614, 9295, 9641, 9668, 9669
];

const StyledLicense = styled.div`
	padding: 5rem;
	padding-top: 10rem;
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	background: var(--bg-02);
	background-image: radial-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.75));

	@media (max-width: 720px) {
		padding: 1rem;
		padding-top: 7rem;
	}
`;

const Header = styled.h1`
	font-weight: 700;
	color: var(--bg-02);

	font-size: 10rem;
	@media (max-width: 768px) {
		font-size: 5rem;
	}
`;

const SubHeader = styled.div`
	font-weight: 500;
	color: var(--text-primary);
	max-width: 70%;
	margin-bottom: 2rem;
	font-family: 'Roboto', sans-serif;

	font-size: 2rem;
	line-height: 2.3rem;
	@media (max-width: 768px) {
		font-size: 1.6rem;
		line-height: 2rem;
		max-width: 100%;
		width: 100%;
	}
`;

const Uwus = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	grid-gap: 1rem;
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

const License = () => {
	return (
		<StyledLicense>
			<Header>License</Header>
			<SubHeader>maybe here can be the general info on the uwucrew license?</SubHeader>
			<Header>The Crew</Header>
			<SubHeader>Some cool copy explaining the crew</SubHeader>
			<Uwus>
				{theCrew.map((uwu: number) => (
					<UwuContainer href={`https://opensea.io/assets/0xf75140376d246d8b1e5b8a48e3f00772468b3c0c/${uwu}`} target="_blank">
						<UwuImage src={`https://firebasestorage.googleapis.com/v0/b/uwucrew-thumbnails/o/${uwu}.png?alt=media`} />
						<UwuText>{`Uwu: #${uwu}`}</UwuText>
					</UwuContainer>
				))}
			</Uwus>
		</StyledLicense>
	);
};

export default License;
