import React from "react";

import CircleLoading from "./CircleLoading";
import { connect } from "react-redux";

export function WeatherToday({
  isLoading,
  cityName,
  temperature,
  description,
  icon,
  dayOfWeek,
}) {
  return (
    <div className="current-weather">
      <div className="status">
        <p className="name">{cityName}</p>
        <p className="temperature">{Math.round(temperature) || "..."}</p>
        {isLoading ? (
          <CircleLoading />
        ) : (
          <img
            style={{ display: "block" }}
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="weather"
          />
        )}
        <div className="today">
          <p className="wday">{numberOfDayToWeekday(dayOfWeek)}</p>
          <p className="weather">{description}</p>
        </div>
      </div>
    </div>
  );
}

var numberOfDayToWeekday = (number) => {
  if (number >= 1 && number <= 6) return "Thứ " + (number + 1);
  if (number === 7) return "Chủ Nhật";
  return "Không rõ ngày trong tuần";
};

const mapStateToProps = (state) => {
  return { ...state.currentWeatherState };
};

export default connect(mapStateToProps)(WeatherToday);
