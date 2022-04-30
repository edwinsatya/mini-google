import Button from "../atoms/Button";
import IconClose from "../atoms/IconSvg/IconClose";
import IconSearch from "../atoms/IconSvg/IconSearch";
import InputText from "../atoms/InputText";

const FormHome = ({ keyword, onChange, onSubmit, clearInput }) => {
  return (
    <>
      <form
        className="flex flex-col items-center gap-7 w-full"
        onSubmit={onSubmit}
      >
        <div className="w-9/12 lg:max-w-xl relative">
          <IconSearch className="z-10 text-gray-400 absolute bottom-0 transform h-4 w-4 left-2 -translate-y-1 md:h-6 md:w-6 md:left-3 md:-translate-y-3" />
          <InputText
            className="input-text"
            type="text"
            value={keyword}
            onChange={onChange}
          />
          <IconClose
            className="z-10 text-gray-400 absolute bottom-0 transform h-4 w-4 right-2 -translate-y-1 md:h-6 md:w-6 md:right-3 md:-translate-y-3"
            onClick={clearInput}
          />
        </div>

        <div className="flex gap-2 lg:gap-4">
          <Button
            className="capitalize bg-gray-100 dark:bg-[#303134] text-xs p-1 w-28 lg:text-base lg:px-3 lg:py-2 lg:w-40 rounded-md text-center border border-white dark:border-black hover:border-gray-400 hover:dark:border-gray-400"
            text="google search"
            type="submit"
          />
          <Button
            className="capitalize bg-gray-100 dark:bg-[#303134] text-xs p-1 w-28 lg:text-base lg:px-3 lg:py-2 lg:w-40 rounded-md text-center border border-white dark:border-black hover:border-gray-400 hover:dark:border-gray-400"
            text="i'm feeling lucky"
            onClick={() =>
              window.open("https://www.google.com/doodles", "_blank").focus()
            }
          />
        </div>
        <div>
          <Button
            className="text-blue-500 dark:text-blue-300 text-xs lg:text-sm hover:underline"
            text="Share Eid greeting cards with Google"
            type="submit"
            onClick={() => onChange("idul fitri")}
          />
        </div>
      </form>
    </>
  );
};

export default FormHome;
