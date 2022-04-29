import { UseGlobalContext } from "../../store/context";

const GoogleLogo = ({ className }) => {
  const { state } = UseGlobalContext();
  const { theme } = state;

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
