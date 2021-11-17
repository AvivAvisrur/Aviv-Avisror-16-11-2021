import classes from "./MainBox.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import axios from "axios";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import WeekForeCast from "./WeekForeCast/WeekForeCast";
import FavoriteButtons from "./Favorites/FavoriteButtons";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const MainBox = ({ placeHolder, props }) => {
  const location = useLocation();
  const favorites = useSelector((state) => state.favorite);

  const [searchInput, setSearchInput] = useState(
    location.state ? location.state.city : "Tel Aviv"
  );
  const [searchResult, setSearchResult] = useState(
    location.state ? location.state.city : "Tel Aviv"
  );
  const [weekForeCast, setWeekForeCast] = useState([]);
  const onChangeSearchHandler = (event) => {
    setSearchInput(event.target.value);
  };
  const getForecastWeather = (key) => {
    axios
      .get(
        `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=fMK0ekaopOMx55BI5Ua9puCemYAliOKM&details=false`
      )
      .then((response) => {
        let data = response.data.DailyForecasts;
        setWeekForeCast(() => {
          return data;
        });
      });
  };

  const onSubmitHandler = (event) => {
    axios
      .get(
        `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=fMK0ekaopOMx55BI5Ua9puCemYAliOKM&q=${searchInput}`
      )
      .then((response) => {
        if (response.data[0]) {
          getForecastWeather(response.data[0].Key);
          setSearchResult(response.data[0]?.LocalizedName);
        } else {
          toast.error("City not found!");
        }
      });
  };

  useEffect(() => {
    axios
      .get(
        `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=fMK0ekaopOMx55BI5Ua9puCemYAliOKM&q=${searchInput}`
      )
      .then((response) => {
        getForecastWeather(response.data[0].Key);
      });
    console.log("hi");
  }, []);

  const celsiusTransfer = (fahrenheit) => {
    let celsius;
    celsius = ((fahrenheit - 32) * 5) / 9;
    return Math.floor(celsius);
  };

  return (
    <div className={classes.search}>
      <div className={classes.searchInputs}>
        <input
          type="text"
          placeholder={placeHolder}
          onChange={onChangeSearchHandler}
          value={searchInput}
        />
        <button onClick={onSubmitHandler} className={classes.searchIcon}>
          <SearchIcon />
        </button>
      </div>
      <div className={classes.forecastContainer}>
        <p className={classes.WeatherCondition}>
          {weekForeCast[0]?.Day.IconPhrase}
        </p>
        <FavoriteButtons
          weekForeCast={weekForeCast[0]}
          searchResult={searchResult}
        />
        {weekForeCast.map((dailyForecast) => (
          <WeekForeCast
            key={Math.random()}
            celsiusTransfer={celsiusTransfer}
            dailyForecast={dailyForecast}
          />
        ))}
        <CurrentWeather
          searchResult={searchResult}
          dailyWeather={weekForeCast[0]}
          celsiusTransfer={celsiusTransfer}
        />
      </div>
    </div>
  );
};
export default MainBox;
