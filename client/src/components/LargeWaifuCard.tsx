import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 500px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
`;

type Props = {
  id: number;
};

const LargeWaifuCard: React.FC<Props> = ({ id }) => {
  return (
    <Container>
      <Image draggable={false} src={`${""}${id}.png`} loading="lazy" />
    </Container>
  );
};

export default LargeWaifuCard;
