const _API_KEY_ = "3a52c53579e9e60d4e060982eb255fc2";
const _TIME_BASE_ON_IP_API_ = "https://worldtimeapi.org/api/ip";

export const forecastByCityNameURL = (cityName) =>
  `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${_API_KEY_}&lang=vi`;

export const currentWeatherByCityNameURL = (cityName) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${_API_KEY_}&lang=vi`;

export const getForecastByCityName = (cityName) =>
  fetch(forecastByCityNameURL(cityName)).then((res) => res.json());

export const getCurrentWeatherByCityName = (cityName) =>
  fetch(currentWeatherByCityNameURL(cityName)).then((res) => res.json());

export const getTimeBaseOnIP = () =>
  fetch(_TIME_BASE_ON_IP_API_).then((res) => res.json());
