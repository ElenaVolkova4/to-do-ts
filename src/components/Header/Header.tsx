import { Link, NavLink } from "react-router-dom";
import classes from "./Header.module.scss";

const Header = () => {
  const getActiveClass = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? `${classes.link} ${classes.active}` : classes.link;
  };

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <NavLink to="/" className={getActiveClass}>
          Home
        </NavLink>
        <NavLink to="/todo" className={getActiveClass}>
          ToDo
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
