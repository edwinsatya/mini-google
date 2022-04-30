import { UseGlobalContext } from "../../store/context";

const GoogleLogo = ({ className, onClick }) => {
  const { state } = UseGlobalContext();
  const { theme } = state;

  if (theme === "dark") {
    return (
      <img
        className={className}
        src={require("../../assets/images/google-white.png")}
        alt="logo-google"
        onClick={onClick}
      />
    );
  }

  return (
    <img
      className={className}
      src={require("../../assets/images/google-full.png")}
      alt="logo-google"
      onClick={onClick}
    />
  );
};

export default GoogleLogo;
