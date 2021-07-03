import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import countdown from "countdown";
import bg from "../assets/arcade-bg.png";
import logo from "../assets/white-logo.png";

const StyledArcadePage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
`;

const Background = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  filter: blur(25px) brightness(0.7) saturate(1.3) contrast(1.3);
  transform: scale(1.2);
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-between;
`;

const Logo = styled.img`
  height: 4rem;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(-1rem);
`;

const Header = styled.h1`
  font-size: 12rem;
  font-weight: 800;
  color: white;
  text-align: center;
  transform: translateY(-1rem);
`;

const ComingSoon = styled.div`
  padding: 0.5rem 1.2rem;
  border: solid 1px white;
  border-radius: 0.4rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 1.2rem;
  text-transform: uppercase;
  line-height: 1;
  background-color: rgba(255, 255, 255, 0.05);
`;

const Description = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: white;
  text-align: center;
  max-width: 50rem;
  margin-top: 2rem;
`;

const Countdown = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  color: white;
  text-align: center;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputForm = styled.form`
  display: flex;
`;

const InputLabel = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
  color: white;
  margin-bottom: 0.6rem;
`;

const Input = styled.input`
  background: none;
  border: solid 1px white;
  padding: 0.5rem 1.2rem;
  border-radius: 0.4rem;
  outline: none;
  color: white;
  font-weight: 500;
  font-size: 1rem;

  ::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const Button = styled.button`
  margin-left: 1rem;
  border-radius: 0.4rem;
  position: relative;
  padding: 0.5rem 1.2rem;
  font-size: 1.1em;
  border: none;
  background: none;
  outline: none;
  color: black;
  mix-blend-mode: screen;
  text-transform: capitalize;
  cursor: pointer;

  ::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: white;
    border-radius: 0.3em;
    content: "";
    mix-blend-mode: color-burn;
  }
`;

const V2Page = (): JSX.Element => {
  const [email, setEmail] = useState();

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
    <StyledArcadePage>
      <Background src={bg} />
      <Content>
        <Logo src={logo} />
        <Center>
          <ComingSoon>coming soon</ComingSoon>
          <Header>Megami</Header>
          <Countdown>
            {countdown(
              new Date(),
              new Date(2021, 7, 1),
              countdown.ALL,
              3
            ).toString()}
          </Countdown>
          <Description>
            Brought to you by Waifusion, Megami is a new generative Waifu NFT
            series! <br />
            More details to be revealed soon. Subscribe below for updates.
          </Description>
        </Center>
        <InputContainer>
          <InputLabel>Sign up to receive updates</InputLabel>
          <InputForm
            action="https://waifusion.us6.list-manage.com/subscribe/post?u=e27a013fdf4b77f3f4cd29de4&amp;id=53d3057369"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            target="_blank"
          >
            <Input
              type="email"
              value={email}
              name="EMAIL"
              id="mce-EMAIL"
              onChange={(e: any) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            <Button
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
            >
              submit
            </Button>
          </InputForm>
        </InputContainer>
      </Content>
    </StyledArcadePage>
  );
};

export default V2Page;
