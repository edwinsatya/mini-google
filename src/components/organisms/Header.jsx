import { UseGlobalContext } from "../../store/context";
import Navigation from "../molecules/Navigation";

const Header = () => {
  const { state, dispatch } = UseGlobalContext();
  const { theme } = state;

  const handleChangeTheme = () => {
    console.log("masuk");
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

  const handleChangeType = () => {};

  return (
    <header>
      <Navigation
        changeTheme={handleChangeTheme}
        changeType={handleChangeType}
        theme={theme}
      />
    </header>
  );
};

export default Header;
