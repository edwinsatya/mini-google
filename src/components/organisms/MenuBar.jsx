import Button from "../atoms/Button";
import { UseGlobalContext } from "../../store/context";
import { useNavigate } from "react-router-dom";
import { getQueryPath } from "../../helpers/getQueryPath";
import { getActiveClass } from "../../helpers/getActiveClass";

const MenuBar = () => {
  const { state, dispatch } = UseGlobalContext();
  const { type, keyword } = state;
  const navigate = useNavigate();

  const activeClass = (typeCheck) => {
    return getActiveClass(typeCheck, type);
  };

  const handleChangeMenu = (typeCheck) => {
    dispatch({ type: "CHANGE_TYPE", payload: typeCheck });
    const path = getQueryPath(typeCheck, keyword);
    navigate(path);
  };

  return (
    <section>
      <div className="px-4 lg:px-24">
        <Button
          className={`${activeClass(
            "search"
          )} p-2 border-b-2 lg:p-4 lg:border-b-4`}
          text="Search"
          onClick={() => handleChangeMenu("search")}
        />
        <Button
          className={`${activeClass(
            "news"
          )} p-2 border-b-2 lg:p-4 lg:border-b-4`}
          text="News"
          onClick={() => handleChangeMenu("news")}
        />
        <Button
          className={`${activeClass(
            "image"
          )} p-2 border-b-2 lg:p-4 lg:border-b-4`}
          text="Image"
          onClick={() => handleChangeMenu("image")}
        />
      </div>
      <hr className="border-b border-gray-200 dark:border-gray-700" />
    </section>
  );
};

export default MenuBar;
