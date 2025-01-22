import { HeaderContainer, HeaderWrapper, NavLink } from "./Header.styled";

const Header = () => {
  // если стилизовать через содули css
  // const getActiveClass = ({ isActive }: { isActive: boolean }): string => {
  //   return isActive ? `${classes.link} ${classes.active}` : classes.link;
  // };

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
    </HeaderWrapper>
  );
};

export default Header;
