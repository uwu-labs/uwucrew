import React from "react";
import styled from "styled-components";

type SlideProps = {
  color: string;
};

const StyledSlide = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props: SlideProps) => props.color};
`;

type Props = {
  color: string;
};

const Slide = ({ color }: Props): JSX.Element => {
  return <StyledSlide color={color}>meow</StyledSlide>;
};

export default Slide;
