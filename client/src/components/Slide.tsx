import React, { useRef } from "react";
import { useHistory } from "react-router";
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
  height: 35rem;
`;

type ContentProps = {
  right?: boolean;
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: ${(props: ContentProps) =>
    props.right ? "translateX(-15rem)" : "translateX(15rem)"};
`;

type ImageProps = {
  right?: boolean;
};

const Image = styled.img`
  position: absolute;
  height: 30rem;
  bottom: 0;
  left: ${(props: ImageProps) => (props.right ? "auto" : "0")};
  right: ${(props: ImageProps) => (props.right ? "0" : "auto")};
  transform: ${(props: ImageProps) => (props.right ? "scaleX(-1)" : "none")};
`;

const Header = styled.div`
  font-size: 4.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
`;

const SubHeader = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--text-primary);
  max-width: 60rem;
  text-align: center;
  margin-top: 1rem;
`;

type Props = {
  color: string;
  image: string;
  right?: boolean;
  section: string;
  header?: string;
  subHeaders?: string[];
  content?: JSX.Element;
};

const Slide = ({
  color,
  image,
  right,
  section,
  header,
  subHeaders,
  content,
}: Props): JSX.Element => {
  const history = useHistory();
  const scrollRef = useRef<HTMLDivElement>(null);
  history.listen((location) => {
    const i = location.search.search("scroll=");
    if (
      i > -1 &&
      location.search.substring(i + 7, location.search.length - i + 1) ===
        section
    ) {
      scrollRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  });

  return (
    <StyledSlide color={color} ref={scrollRef}>
      <Image src={image} right={right} />
      <Content right={right}>
        {header && <Header>{header}</Header>}
        {subHeaders &&
          subHeaders.map((subHeader: string) => (
            <SubHeader>{subHeader}</SubHeader>
          ))}
        {content && content}
      </Content>
    </StyledSlide>
  );
};

export default Slide;
