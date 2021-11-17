import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import Header from "./components/Header";
import Favorites from "./components/Favorites/Favorites";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function App() {
  const favorites = useSelector((state) => state.favorite);
  const celsiusTransfer = (fahrenheit) => {
    let celsius;
    celsius = ((fahrenheit - 32) * 5) / 9;
    return Math.floor(celsius);
  };
  const toastError = () => {
    return toast.error("You dont have any favorites!");
  };

  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" component={MainPage} />
        {favorites.length <= 0 ? (
          toastError() && <Redirect to="/home" exact></Redirect>
        ) : (
          <Route path="/favorites">
            <Favorites celsiusTransfer={celsiusTransfer} />
          </Route>
        )}
      </Switch>
    </>
  );
}

export default App;
