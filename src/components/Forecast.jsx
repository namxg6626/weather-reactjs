import React from "react";
import { connect } from "react-redux";

import DotLoading from "./DotLoading";

const Forecast = ({ isLoading, time, icon, temperature }) => {
  return (
    <div className="column">
      <p className="time">{parseInt(time)}h</p>
      {isLoading ? (
        <DotLoading />
      ) : (
        <img
          style={{ display: "block" }}
          src={`https://openweathermap.org/img/wn/${icon}.png`}
          alt="weather-icon"
        />
      )}
      <p className="temperature">
        {typeof temperature === "number"
          ? Math.round(temperature) + "°"
          : "..."}
      </p>
    </div>
  );
};

function ForecastInDay({ list, isLoading }) {
  return (
    <div className="forecast-in-day">
      {list.map((item, idx) => (
        <Forecast
          key={idx}
          isLoading={isLoading}
          time={item.time}
          icon={item.icon}
          temperature={item.temperature}
        />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    list: state.forecastState.list,
    isLoading: state.forecastState.isLoading,
  };
};

export default connect(mapStateToProps)(ForecastInDay);
