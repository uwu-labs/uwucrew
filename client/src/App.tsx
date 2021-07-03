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

const StyledApp = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
      <GlobalStyle />
      <Router>
        <StyledApp>
          <Navbar />
          <Switch>
            <Route exact path={`${ROUTES.WAIFU}/:id`} />
            <Route path={ROUTES.PROVENANCE} component={ProvenancePage} />
            <Route exact path={ROUTES.HOME} component={HomePage} />
            <Route exact path={ROUTES.ARCADE} component={V2Page} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
          <Footer />
        </StyledApp>
      </Router>
    </Suspense>
  );
};

export default App;
