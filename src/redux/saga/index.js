import { all } from "redux-saga/effects";
import { watchSetCurrentWeatherAsync } from "./currentWeather.saga";
import { watchForecastAsync } from "./forecast.saga";

export default function* rootSaga() {
  yield all([watchSetCurrentWeatherAsync(), watchForecastAsync()]);
}
