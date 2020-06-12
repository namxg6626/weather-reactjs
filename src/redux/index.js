import { applyMiddleware, createStore, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import currentWeatherReducer from "./reducer/currentWeather.reducer";
import forecastReducer from "./reducer/forecast.reducer";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    currentWeatherState: currentWeatherReducer,
    forecastState: forecastReducer,
  }),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
