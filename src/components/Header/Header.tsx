import { useDispatch, useSelector } from "react-redux";
import {
  HeaderContainer,
  HeaderWrapper,
  NavLink,
  ToggleThemeButton,
} from "./Header.styled";
import { RootState } from "../../store";
import { toggleThemeAction } from "../../features/themeList";

const Header = () => {
  // если стилизовать через модули css
  // const getActiveClass = ({ isActive }: { isActive: boolean }): string => {
  //   return isActive ? `${classes.link} ${classes.active}` : classes.link;
  // };

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
        onClick={() => {
          dispatch(toggleThemeAction());
        }}
      >
        Сменить тему
      </ToggleThemeButton>
    </HeaderWrapper>
  );
};

export default Header;
