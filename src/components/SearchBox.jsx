import React, { useState } from "react";
import { connect } from "react-redux";
import { forecastActionGenerator } from "../redux/saga/forecast.saga";
import { currentWeatherActionGenerator } from "../redux/saga/currentWeather.saga";

function SearchBox({ placeholder, setCity }) {
  const [cityName, setCityName] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cityName) {
      setCity(cityName);
      setCityName("");
    }
  };

  const handleChange = (e) => {
    setCityName(e.target.value);
  };

  return (
    <div className="search-box">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search-box"
          id="search-box"
          placeholder={placeholder}
          onChange={handleChange}
          value={cityName || ""}
        />
        <input type="submit" id="search-button" value="Tìm kiếm" />
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCity: (cityName) => {
      dispatch(currentWeatherActionGenerator(cityName));
      dispatch(forecastActionGenerator(cityName));
    },
  };
};

export default connect(null, mapDispatchToProps)(SearchBox);
