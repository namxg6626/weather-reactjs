import { put, takeLatest, call } from "redux-saga/effects";
import { getForecastByCityName } from "../../services";

export function* setForecastAsync({ payload: { cityName } }) {
  yield put({ type: "RESET_FORECAST" });

  try {
    const { list } = yield call(getForecastByCityName, cityName);

    const forecasts = [];
    let count = 1;
    for (const forecast of list) {
      const temperature = forecast.main.temp;
      const time = forecast.dt_txt.split(" ")[1].split(":")[0];
      const icon = forecast.weather[0].icon;
      forecasts.push({ temperature, time, icon });

      if (count === 6) break;
      count++;
    }

    yield put({
      type: "SET_FORECAST_OF_THE_DAY",
      payload: { list: forecasts, isLoading: false },
    });
  } catch (e) {
    alert("Tên tỉnh/thành phố không tồn tại!");
  }
}

export function* watchForecastAsync() {
  yield takeLatest("SET_FORECAST_OF_THE_DAY_ASYNC", setForecastAsync);
}

export function forecastActionGenerator(cityName) {
  return {
    type: "SET_FORECAST_OF_THE_DAY_ASYNC",
    payload: { cityName },
  };
}
