export const initialState = {
  theme: "light",
  type: "search",
  keyword: "",
  isLoading: true,
  isError: false,
  dataApi: {},
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
    case "CHANGE_IS_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "CHANGE_IS_ERROR":
      return {
        ...state,
        isError: action.payload,
      };
    case "SET_DATA_API":
      return {
        ...state,
        dataApi: action.payload,
        isLoading: false,
        isError: false,
      };
    default:
      return state;
  }
};
