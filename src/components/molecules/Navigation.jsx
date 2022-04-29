import { useContext } from "react";
import { ThemeContext } from "../../store/themeContext";

const Navigation = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const changeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    const html = document.querySelector("html");

    localStorage.setItem("theme", newTheme);
    html.classList.add(newTheme);

    if (newTheme === "dark") {
      setTheme(() => "dark");
      html.classList.remove("light");
    } else {
      setTheme(() => "light");
      html.classList.remove("dark");
    }
  };

  return (
    <nav className="p-4">
      <button onClick={changeTheme}>{theme}</button>
    </nav>
  );
};

export default Navigation;
