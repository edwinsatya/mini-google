import { useContext } from "react";
import { ThemeContext } from "../../store/themeContext";

const GoogleLogo = ({ className }) => {
  const { theme } = useContext(ThemeContext);
  if (theme === "dark") {
    return (
      <img
        className={className}
        src={require("../../assets/images/google-white.png")}
        alt="logo-google"
      />
    );
  }

  return (
    <img
      className={className}
      src={require("../../assets/images/google-full.png")}
      alt="logo-google"
    />
  );
};

export default GoogleLogo;
