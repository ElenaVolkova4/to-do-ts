import { NavLink } from "react-router-dom";
import classes from "./Header.module.scss";

const Header = () => {
  const getActiveClass = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? `${classes.link} ${classes.active}` : classes.link;
  };

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <NavLink to="/" className={getActiveClass}>
          ToDo
        </NavLink>
        <NavLink to="/list" className={getActiveClass}>
          List
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
