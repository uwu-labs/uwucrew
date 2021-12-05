import derivatives, { DerivativeType } from 'config/derivatives';
import useScreenWidth from 'hooks/use-screen-width';
import styled from 'styled-components';
import DerivativeImage from './DerivativeImage';

const MIN_WIDTH = 350;

const StyledDerivatives = styled.div`
	padding: 5rem;
	padding-top: 10rem;
	width: 100%;
	min-height: 100vh;
	display: flex;
	background: var(--bg-03);
	background-image: radial-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.75));
`;

const Column = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
`;

const Derivatives = () => {
	const width = useScreenWidth();

	const columns = Math.round(width / MIN_WIDTH);

	return (
		<StyledDerivatives>
			{[...Array(columns).keys()].map((key: number) => (
				<Column>
					{derivatives
						.filter((d: DerivativeType, index: number) => index % columns === key)
						.map((derivative: DerivativeType) => (
							<DerivativeImage derivative={derivative} />
						))}
				</Column>
			))}
		</StyledDerivatives>
	);
};

export default Derivatives;
