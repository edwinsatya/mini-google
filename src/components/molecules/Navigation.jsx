import Button from "../atoms/Button";

const Navigation = ({ changeTheme, changeType, theme, type }) => {
  const currentTypeSelected = (typeCheck) => {
    if (typeCheck === type) {
      return "border-b-2 border-black dark:border-white";
    }
    return "";
  };

  return (
    <nav className="py-4 px-4 lg:px-12">
      <ul className="flex justify-end items-center gap-3 lg:gap-6">
        <li>
          <Button
            className="capitalize font-semibold text-xs lg:text-sm border bg-[#FBBC04] dark:bg-[#303134] border-gray-500 rounded-lg py-1 px-2"
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
};

export default Navigation;
