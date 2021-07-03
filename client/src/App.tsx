import React, { Suspense, useEffect, useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GlobalStyle from "./GlobalStyles";
import ProvenancePage from "./pages/ProvenancePage";
import HomePage from "./pages/HomePage";
import V2Page from "./pages/V2Page";
import NotFoundPage from "./pages/NotFoundPage";
import { initWeb3 } from "./services/web3";
import Loading from "./components/Loading";
import { setGlobals } from "./state/reducers/globals";
import { getGlobals } from "./services/globals";
import * as ROUTES from "./constants/routes";

const Wrapper = styled.div`
  color: #29252a;
`;

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 83.2vh;
`;

const App: React.FC = () => {
  const dispatch = useDispatch();
  const [hasPendingReveal, setHasPendingReveal] = useState(false);

  const updateGlobals = async () => {
    const globals = await getGlobals();
    dispatch(setGlobals(globals));
  };

  const init = async () => {
    initWeb3();
    (window as any).ethereum.enable();
    (window as any).ethereum.on("networkChanged", async () => {
      await updateGlobals();
    });
    await updateGlobals();
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <Wrapper>
        <GlobalStyle />
        <Router>
          <Navbar />

          <ContentWrapper>
            <Switch>
              <Route exact path={`${ROUTES.WAIFU}/:id`} />
              <Route path={ROUTES.PROVENANCE} component={ProvenancePage} />
              <Route exact path={ROUTES.HOME} component={HomePage} />
              <Route exact path={ROUTES.ARCADE} component={V2Page} />
              <Route path="*" component={NotFoundPage} />
            </Switch>
          </ContentWrapper>

          <Footer />
        </Router>
      </Wrapper>
    </Suspense>
  );
};

export default App;
