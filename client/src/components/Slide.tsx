import React from "react";
import styled from "styled-components";

type SlideProps = {
  color: string;
};

const StyledSlide = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props: SlideProps) => props.color};
  height: 30rem;
`;

type ImageProps = {
  right?: boolean;
};

const Image = styled.img`
  position: absolute;
  height: 25rem;
  bottom: 0;
  left: ${(props: ImageProps) => (props.right ? "auto" : "5rem")};
  right: ${(props: ImageProps) => (props.right ? "5rem" : "auto")};
  transform: ${(props: ImageProps) => (props.right ? "scaleX(-1)" : "none")};
`;

type Props = {
  color: string;
  image: string;
  right?: boolean;
};

const Slide = ({ color, image, right }: Props): JSX.Element => {
  return (
    <StyledSlide color={color}>
      <Image src={image} right={right} />
    </StyledSlide>
  );
};

export default Slide;
