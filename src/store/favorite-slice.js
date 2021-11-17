import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites"));
  if (favorites) {
    return favorites;
  } else {
    return [];
  }
};
const serilizedState = initialState();
const favoriteSlice = createSlice({
  name: "favorite",
  initialState: serilizedState,
  reducers: {
    addToFavorite(state, action) {
      const newCityName = action.payload.CityName;
      const existsCityName = state.find(
        (city) => city.CityName === newCityName
      );
      if (!existsCityName) {
        state.push(action.payload);
        localStorage.setItem("favorites", JSON.stringify(state));
      } else {
        toast.error("Your already have that city in your favorites!");
      }
    },
    removeFromFavorite(state, action) {
      state.slice(action.payload);
      localStorage.setItem("favorites", JSON.stringify(state));
    },
  },
});
export const favoriteActions = favoriteSlice.actions;
export default favoriteSlice;
