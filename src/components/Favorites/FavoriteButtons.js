import { favoriteActions } from "../../store/favorite-slice";
import store from "../../store/store";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/material/Button";
import classes from "./FavoriteButtons.module.css";
import { useDispatch } from "react-redux";
const FavoriteButtons = (props) => {
  const dispatch = useDispatch();
  return (
    <div className={classes.Favorite}>
      <FavoriteBorderIcon
        onClick={() => {
          dispatch(favoriteActions.addToFavorite);
        }}
      />
      <Button
        onClick={() => {
          store.dispatch(
            favoriteActions.addToFavorite({
              dailyForecast: props.weekForeCast,
              CityName: props.searchResult,
            })
          );
        }}
        variant="contained"
      >
        Add To Favorite
      </Button>
    </div>
  );
};
export default FavoriteButtons;
