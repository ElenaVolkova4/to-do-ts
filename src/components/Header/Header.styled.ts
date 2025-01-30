import styled from "styled-components";
import { NavLink as BaseNavLink } from "react-router-dom";

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  transition: background-color 0.2s;
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
  font-size: 20px;
  line-height: 24px;

  &.active {
    text-decoration: underline;
  }
`;

export const ToggleThemeButton = styled.button<{ icon: string }>`
  position: absolute;
  right: 4px;
  top: 4px;
  padding: 0;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background: none;
  border: none;
  background: transparent url(${(props) => props.icon}) no-repeat center/cover;
`;
