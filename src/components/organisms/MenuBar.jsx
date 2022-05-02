import { UseGlobalContext } from "../../store/context";
import { useNavigate } from "react-router-dom";
import { getQueryPath } from "../../helpers/getQueryPath";
import { getActiveClass } from "../../helpers/getActiveClass";
import IconSearch from "../atoms/IconSvg/IconSearch";
import IconPhotograph from "../atoms/IconSvg/IconPhotograph";
import ButtonPrefixIcon from "../molecules/ButtonPrefixIcon";
import IconNews from "../atoms/IconSvg/IconNews";

const MenuBar = () => {
  const { state, dispatch } = UseGlobalContext();
  const { type, keyword } = state;
  const navigate = useNavigate();

  const handleChangeMenu = (typeCheck) => {
    dispatch({ type: "CHANGE_TYPE", payload: typeCheck });
    const path = getQueryPath(typeCheck, keyword);
    navigate(path);
  };

  return (
    <section>
      <div className="px-4 lg:px-24 flex text-gray-500 dark:text-gray-400">
        <ButtonPrefixIcon
          className={getActiveClass("search", type)}
          text="Search"
          icon={<IconSearch className="w-3 h-3 lg:w-5 lg:h-5" />}
          onClick={() => handleChangeMenu("search")}
        />
        <ButtonPrefixIcon
          className={getActiveClass("image", type)}
          text="Image"
          icon={<IconPhotograph className="w-3 h-3 lg:w-5 lg:h-5" />}
          onClick={() => handleChangeMenu("image")}
        />
        <ButtonPrefixIcon
          className={getActiveClass("news", type)}
          text="News"
          icon={<IconNews className="w-3 h-3 lg:w-5 lg:h-5" />}
          onClick={() => handleChangeMenu("news")}
        />
        <ButtonPrefixIcon
          className={getActiveClass("reading-list", type)}
          text="Reading List"
          icon={<IconNews className="w-3 h-3 lg:w-5 lg:h-5" />}
          onClick={() => handleChangeMenu("reading-list")}
        />
      </div>
      <hr className="border-b border-gray-200 dark:border-gray-700" />
    </section>
  );
};

export default MenuBar;
