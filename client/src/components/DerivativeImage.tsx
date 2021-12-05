import type { DerivativeType } from 'config/derivatives';
import styled from 'styled-components';

const Image = styled.img`
	width: 100%;
	padding: 0.5rem;
`;

interface Props {
	derivative: DerivativeType;
}

const DerivativeImage = ({ derivative }: Props) => {
	return <Image src={derivative.image} />;
};

export default DerivativeImage;
