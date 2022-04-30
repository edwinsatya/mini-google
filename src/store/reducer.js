export const initialState = {
  theme: "light",
  type: "search",
  keyword: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return {
        ...state,
        theme: action.payload,
      };
    case "CHANGE_TYPE":
      return {
        ...state,
        type: action.payload,
      };
    case "CHANGE_KEYWORD":
      return {
        ...state,
        keyword: action.payload,
      };
    case "RESET_FILTER":
      return {
        ...state,
        type: "search",
        keyword: "",
      };
    default:
      return state;
  }
};
