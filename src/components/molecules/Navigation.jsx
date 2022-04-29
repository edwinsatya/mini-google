import Button from "../atoms/Button";

const Navigation = ({ changeTheme, changeType, theme }) => {
  return (
    <nav className="p-4">
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
            className="capitalize font-semibold text-xs lg:text-base"
            text="Search"
            onClick={changeType}
          />
        </li>
        <li>
          <Button
            className="capitalize font-semibold text-xs lg:text-base"
            text="Image"
            onClick={changeType}
          />
        </li>
        <li>
          <Button
            className="capitalize font-semibold text-xs lg:text-base"
            text="News"
            onClick={changeType}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
