import React from "react";
import styled from "styled-components";
import Slide from "../components/Slide";
import i01 from "../assets/v2/01.png";
import i02 from "../assets/v2/02.png";
import i03 from "../assets/v2/03.png";
import i04 from "../assets/v2/04.png";
import i06 from "../assets/v2/06.png";
import i07 from "../assets/v2/07.png";
import BuySlide from "../components/BuySlide";

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Home: React.FC = () => {
  return (
    <Container>
      <Slide
        color="#4C96B2"
        image={i06}
        section=""
        header="Project Name"
        subHeaders={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        ]}
      />
      <BuySlide />
      <Slide
        color="#D3AA73"
        image={i04}
        section="about"
        header="About Project Name"
        subHeaders={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
        ]}
      />
      <Slide
        color="#6E4C65"
        image={i07}
        right
        section="roadmap"
        header="Project Name Roadmap"
        subHeaders={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
        ]}
      />
      <Slide
        color="#A06758"
        image={i02}
        section="team"
        header="The Project Name Team"
        subHeaders={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        ]}
      />
      <Slide
        color="#6A8154"
        image={i03}
        right
        section="provenance"
        header="NFT Name Provenance"
        subHeaders={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        ]}
      />
      <Slide
        color="#C584A4"
        image={i01}
        section="faq"
        header="Project Name FAQs"
        subHeaders={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
        ]}
      />
    </Container>
  );
};

export default Home;
