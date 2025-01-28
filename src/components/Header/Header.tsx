import { useDispatch, useSelector } from "react-redux";
import {
  HeaderContainer,
  HeaderWrapper,
  NavLink,
  ToggleThemeButton,
} from "./Header.styled";
import { RootState } from "../../store";
import { toggleThemeAction } from "../../features/themeList";

import sunIcon from "../../assets/images/icon-sun.png";
import moonIcon from "../../assets/images/icon-moon.png";

const Header = () => {
  // если стилизовать через модули css
  // const getActiveClass = ({ isActive }: { isActive: boolean }): string => {
  //   return isActive ? `${classes.link} ${classes.active}` : classes.link;
  // };

  // тема из стора
  const theme = useSelector((state: RootState) => state.themeList.theme);
  // методы по управлению темой из стора
  const dispatch = useDispatch();

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <NavLink to="/">ToDo</NavLink>
        {/* <NavLink to="/" className={getActiveClass}>
          ToDo
        </NavLink> */}
        <NavLink to="/list">List</NavLink>
        {/* <NavLink to="/list" className={getActiveClass}>
          List
        </NavLink> */}
      </HeaderContainer>
      <ToggleThemeButton
        icon={theme.name === "light" ? sunIcon : moonIcon} // иконка в зависимости от темы
        onClick={() => {
          dispatch(toggleThemeAction());
        }}
      ></ToggleThemeButton>
    </HeaderWrapper>
  );
};

export default Header;
