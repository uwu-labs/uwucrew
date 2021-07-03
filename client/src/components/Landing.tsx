import React from "react";
import styled from "styled-components";

const StyledLanding = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
`;

const Landing: React.FC = () => {
  return <StyledLanding>meow</StyledLanding>;
};

export default Landing;
