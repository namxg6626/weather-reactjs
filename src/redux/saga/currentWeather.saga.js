import { put, takeLatest, call } from "redux-saga/effects";
import { getCurrentWeatherByCityName, getTimeBaseOnIP } from "../../services";

export function* setCurrentWeatherAsync({ payload: { cityName } }) {
  yield put({
    type: "RESET_CURRENT_WEATHER",
  });

  try {
    const json = yield call(getCurrentWeatherByCityName, cityName);
    const timeAPIRes = yield call(getTimeBaseOnIP);

    const StandardUnixtime =
      (timeAPIRes.unixtime - timeAPIRes.raw_offset) * 1000;

    const { name } = json;
    const { description, icon } = json.weather[0];
    const { temp: temperature } = json.main;

    yield put({
      type: "SET_CURRENT_WEATHER",
      payload: {
        description,
        icon,
        cityName: name,
        temperature,
        dayOfWeek: new Date(StandardUnixtime + json.timezone * 1000).getDay(),
        isLoading: false,
      },
    });
  } catch (e) {
    alert("Tên tỉnh không tồn tại");
  }
}

export function* watchSetCurrentWeatherAsync() {
  yield takeLatest("SET_CURRENT_WEATHER_ASYNC", setCurrentWeatherAsync);
}

export function currentWeatherActionGenerator(cityName) {
  return {
    type: "SET_CURRENT_WEATHER_ASYNC",
    payload: { cityName },
  };
}
