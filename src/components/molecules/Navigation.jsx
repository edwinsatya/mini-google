import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UseGlobalContext } from "../../store/context";
import Button from "../atoms/Button";
import GoogleLogo from "../atoms/GoogleLogo";
import IconClose from "../atoms/IconSvg/IconClose";
import IconSearch from "../atoms/IconSvg/IconSearch";
import InputText from "../atoms/InputText";

const Navigation = ({ changeTheme, changeType, theme, type }) => {
  const currentTypeSelected = (typeCheck) => {
    if (typeCheck === type) {
      return "border-b-2 border-black dark:border-white";
    }
    return "";
  };

  const { state, dispatch } = UseGlobalContext();
  const { keyword } = state;
  const [input, setInput] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setInput(() => keyword);
  }, [keyword]);

  if (location.pathname === "/") {
    return (
      <nav className="py-4 px-4 lg:px-12">
        <ul className="flex justify-end items-center gap-3 lg:gap-6">
          <li>
            <Button
              className="capitalize font-semibold text-xs lg:text-sm border bg-yellow-400 dark:bg-[#303134] border-gray-500 rounded-lg py-1 px-2"
              text={theme}
              onClick={changeTheme}
            />
          </li>
          <li>|</li>
          <li>
            <Button
              className={`${currentTypeSelected(
                "search"
              )} capitalize font-semibold text-xs lg:text-base`}
              text="Search"
              onClick={() => changeType("search")}
            />
          </li>
          <li>
            <Button
              className={`${currentTypeSelected(
                "image"
              )} capitalize font-semibold text-xs lg:text-base`}
              text="Image"
              onClick={() => changeType("image")}
            />
          </li>
          <li>
            <Button
              className={`${currentTypeSelected(
                "news"
              )} capitalize font-semibold text-xs lg:text-base`}
              text="News"
              onClick={() => changeType("news")}
            />
          </li>
        </ul>
      </nav>
    );
  }

  const handleChangeInput = (e) => {
    setInput(() => e);
  };

  const handleClearInput = (e) => {
    setInput(() => "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      dispatch({ type: "CHANGE_KEYWORD", payload: input });
      const query = input
        .split(" ")
        .filter((e) => e)
        .join("+");
      navigate(`/${type}?q=${query}`);
    }
  };

  return (
    <nav className="py-4 px-4 lg:pl-24 lg:py-10 flex justify-between items-center gap-3">
      <div className="flex gap-3 lg:gap-12 items-center">
        <GoogleLogo
          className="w-2/12 max-w-lg cursor-pointer"
          onClick={() => navigate("/")}
        />
        <form className="w-9/12 lg:max-w-xl relative" onSubmit={handleSubmit}>
          <IconSearch className="z-10 text-gray-400 absolute bottom-0 transform h-4 w-4 left-2 -translate-y-1 md:h-6 md:w-6 md:left-3 md:-translate-y-3" />

          <InputText
            className="input-text"
            type="text"
            value={input}
            onChange={handleChangeInput}
          />
          {input && (
            <IconClose
              onClick={handleClearInput}
              className="z-10 text-gray-400 absolute bottom-0 transform h-4 w-4 right-2 -translate-y-1 md:h-6 md:w-6 md:right-3 md:-translate-y-3"
            />
          )}
        </form>
      </div>
      <ul className="flex justify-end items-center gap-3 lg:gap-6">
        <li>
          <Button
            className="capitalize font-semibold text-xs lg:text-sm border bg-[#FBBC04] dark:bg-[#303134] border-gray-500 rounded-lg py-1 px-2"
            text={theme}
            onClick={changeTheme}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
