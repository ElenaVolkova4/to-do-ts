import styled from "styled-components";
import { NavLink as BaseNavLink } from "react-router-dom";

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 50px;
  background-color: #4682b4;
  display: flex;
  align-items: center;
  justify-content: center;

  &.active {
    text-decoration: underline;
  }
`;

export const HeaderContainer = styled.div`
  text-decoration: none;
  padding: 10px;
  color: #fff;
`;

export const NavLink = styled(BaseNavLink)`
  text-decoration: none;
  padding: 10px;
  color: #fff;

  &.active {
    text-decoration: underline;
  }
`;

export const ToggleThemeButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
`;
