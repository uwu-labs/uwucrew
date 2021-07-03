/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import Address from "./Address";
import NetworkIndicator from "./NetworkIndicator";
import { selectIsEth } from "../state/reducers/globals";
import * as ROUTES from "../constants/routes";

const NavItemsWrapper = styled.ul`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Item = styled.li`
  margin-left: 30px;
  display: flex;
  flex-direction: row;
  cursor: pointer;

  @media (max-width: 768px) {
    margin: 0.7rem 0;
  }
`;

const LinkableItem = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;

  color: var(--text-primary);
  font-size: 1.2rem;
  font-weight: 600;

  * {
    color: var(--text-primary);
  }

  :hover {
    * {
      color: var(--primary-shadow);
    }
  }

  svg {
    height: 14pt;
    margin-right: 7px;
  }

  label {
    cursor: pointer;
  }
`;

const NavItems: React.FC = () => {
  const [t] = useTranslation();
  const isEth = useSelector(selectIsEth);

  return (
    <NavItemsWrapper>
      {!isEth && (
        <Item>
          <LinkableItem to={ROUTES.FARM}>
            <label>{t("navigation.farm")}</label>
          </LinkableItem>
        </Item>
      )}
      {isEth && (
        <Item>
          <LinkableItem to={ROUTES.BROWSE}>
            <label>{t("navigation.browse")}</label>
          </LinkableItem>
        </Item>
      )}
      <Item>
        <LinkableItem to={ROUTES.WALLET}>
          <label>{t("navigation.wallet")}</label>
        </LinkableItem>
      </Item>
      <Item>
        <LinkableItem to={ROUTES.DUNGEON}>
          <label>{t("navigation.dungeon")}</label>
        </LinkableItem>
      </Item>
    </NavItemsWrapper>
  );
};

export default NavItems;
