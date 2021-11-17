import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Box from "../UI/Box";
import classes from "./Favorite.module.css";
const Favorites = (props) => {
  const favorites = useSelector((state) => state.favorite);
  return (
    <Box className={classes.Box}>
      <div>
        <h1>Your Favorite Cities: </h1>
        <div className={classes.content}>
          {favorites.map((favorite) => {
            return (
              <NavLink
                to={{
                  pathname: "/home",
                  state: { city: favorite.CityName },
                }}
                key={Math.random()}
                className={classes.card}
              >
                <span>{favorite.CityName}</span>
                <span>
                  {props.celsiusTransfer(
                    favorite.dailyForecast.Temperature.Maximum.Value
                  )}
                  C
                </span>
                <span>{favorite.dailyForecast.Day.IconPhrase}</span>
              </NavLink>
            );
          })}
        </div>
      </div>
    </Box>
  );
};
export default Favorites;
