import { createContext, useEffect, useReducer, useContext } from "react";

import { initialState, reducer } from "./reducer";

export const GlobalContext = createContext();

export const UseGlobalContext = () => {
  return useContext(GlobalContext);
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.removeItem("theme");

    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      dispatch({ type: "CHANGE_THEME", payload: "dark" });
    } else {
      document.documentElement.classList.remove("dark");
      dispatch({ type: "CHANGE_THEME", payload: "light" });
    }
  }, []);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
