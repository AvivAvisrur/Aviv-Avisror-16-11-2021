import classes from "./WeekForeCast.module.css";
import moment from "moment";

const WeekForeCast = (props) => {
  return (
    <>
      <div key={Math.random()} className={classes.card}>
        <div className={classes.content}>
          <span>{moment(props.dailyForecast.Date).format("dddd")}</span>
          <span>
            {props.celsiusTransfer(
              props.dailyForecast.Temperature.Maximum.Value
            )}{" "}
            C
          </span>
        </div>
      </div>
    </>
  );
};
export default WeekForeCast;
