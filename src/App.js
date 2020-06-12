import React from "react";
import { connect } from "react-redux";

// action generator
import { forecastActionGenerator } from "./redux/saga/forecast.saga";
import { currentWeatherActionGenerator } from "./redux/saga/currentWeather.saga";

// component
import SearchBox from "./components/SearchBox";
import WeatherToday from "./components/WeatherToday";
import Forecast from "./components/Forecast";

import "./App.scss";

function App({ setDefaultCity }) {
  React.useEffect(() => {
    setDefaultCity();
  }, [setDefaultCity]);

  return (
    <div className="webpage">
      <SearchBox placeholder="Tên tỉnh/thành phố. Ví dụ: Hà Nội" />
      <WeatherToday />
      <Forecast />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setDefaultCity: () => {
      dispatch(currentWeatherActionGenerator("Hà Nội"));
      dispatch(forecastActionGenerator("Hà Nội"));
    },
  };
};

export default connect(null, mapDispatchToProps)(App);
