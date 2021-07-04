import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import countdown from "countdown";
import Slide from "./Slide";
import i05 from "../assets/v2/05.png";

const Countdown = styled.div`
  font-size: 3rem;
  font-weight: 600;
  color: var(--text-primary);
  max-width: 60rem;
  text-align: center;
  margin-top: 2rem;
`;

const BuySlide: React.FC = () => {
  const [now, setNow] = useState(new Date());
  const nowRef = useRef(now);
  nowRef.current = now;

  const tick = () => {
    setNow(
      new Date(nowRef.current.setSeconds(nowRef.current.getSeconds() + 1))
    );
  };

  useEffect(() => {
    setInterval(() => tick(), 1000);
  }, []);

  return (
    <Slide
      color="#9E4E64"
      image={i05}
      right
      section="buy"
      header="Buy NFT Name"
      subHeaders={[
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      ]}
      content={
        <Countdown>
          {countdown(
            new Date(),
            new Date(2021, 7, 1),
            countdown.ALL,
            3
          ).toString()}
        </Countdown>
      }
    />
  );
};

export default BuySlide;
