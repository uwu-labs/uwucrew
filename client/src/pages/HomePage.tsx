import React from "react";
import styled from "styled-components";
import Slide from "../components/Slide";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Home: React.FC = () => {
  return (
    <Container>
      <Slide color="red" />
    </Container>
  );
};

export default Home;
