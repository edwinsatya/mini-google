import { UseGlobalContext } from "../../store/context";
import Navigation from "../molecules/Navigation";

const Header = () => {
  const { state, dispatch } = UseGlobalContext();
  const { theme, type } = state;

  const handleChangeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    const html = document.querySelector("html");

    localStorage.setItem("theme", newTheme);
    html.classList.add(newTheme);

    if (newTheme === "dark") {
      dispatch({ type: "CHANGE_THEME", payload: "dark" });
      html.classList.remove("light");
    } else {
      dispatch({ type: "CHANGE_THEME", payload: "light" });
      html.classList.remove("dark");
    }
  };

  const handleChangeType = (e) => {
    dispatch({ type: "CHANGE_TYPE", payload: e });
  };

  return (
    <header>
      <Navigation
        changeTheme={handleChangeTheme}
        changeType={handleChangeType}
        theme={theme}
        type={type}
      />
    </header>
  );
};

export default Header;
