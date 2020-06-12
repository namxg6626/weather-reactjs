const defaultState = {
  isLoading: true,
  list: [
    {
      time: "...",
      temperature: "...",
      icon: "...",
    },
    {
      time: "...",
      temperature: "...",
      icon: "...",
    },
    {
      time: "...",
      temperature: "...",
      icon: "...",
    },
    {
      time: "...",
      temperature: "...",
      icon: "...",
    },
    {
      time: "...",
      temperature: "...",
      icon: "...",
    },
    {
      time: "...",
      temperature: "...",
      icon: "...",
    },
  ],
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case "SET_FORECAST_OF_THE_DAY":
      return { ...state, ...payload };

    case "RESET_FORECAST":
      return defaultState;

    default:
      return state;
  }
};
