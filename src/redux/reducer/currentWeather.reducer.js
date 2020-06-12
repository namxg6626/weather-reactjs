const defautlState = {
  isLoading: true,
  cityName: "...",
  description: "...",
  icon: "...",
  temperature: "...",
  dayOfWeek: 0,
};

export default (state = defautlState, { type, payload }) => {
  switch (type) {
    case "SET_CURRENT_WEATHER":
      return { ...state, ...payload };

    case "RESET_CURRENT_WEATHER":
      return defautlState;

    default:
      return state;
  }
};
