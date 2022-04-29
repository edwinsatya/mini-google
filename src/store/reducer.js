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
    case "CHANGE_TYPE_SEARCH":
      return {
        ...state,
        typeSearch: action.payload,
      };
    case "CHANGE_KEYWORD":
      return {
        ...state,
        keyword: action.payload,
      };
    default:
      return state;
  }
};
