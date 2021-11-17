import classes from "./CurrentWeather.module.css";
import cloudy from "../../assets/cloudy.png";

const CurrentWeather = (props) => {
  return (
    <>
      <div className={classes.currentWeather}>
        <div className={classes.imgContainer}>
          <img src={cloudy} alt="cloudy img" />
        </div>
        <div className={classes.currentWeatherDetails}>
          <p>{props.searchResult}</p>
          <span>
            {props.celsiusTransfer(
              props.dailyWeather?.Temperature.Maximum.Value
            )}
            C
          </span>
        </div>
      </div>
    </>
  );
};
export default CurrentWeather;
