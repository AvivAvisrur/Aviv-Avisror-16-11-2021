import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <>
      <header className={classes.headerContainer}>
        <h1>Herolo Weather</h1>
        <nav className={classes.navBar}>
          <NavLink className={classes.HeaderButton} to="/home">
            Home
          </NavLink>
          <NavLink className={classes.HeaderButton} to="/favorites">
            Favorites
          </NavLink>
        </nav>
      </header>
    </>
  );
};
export default Header;
