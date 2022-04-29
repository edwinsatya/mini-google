import Button from "../atoms/Button";

const FormHome = ({ keyword, onChange, onSubmit }) => {
  return (
    <>
      <form
        className="flex flex-col items-center gap-7 w-full"
        onSubmit={onSubmit}
      >
        <div className="w-9/12 lg:max-w-xl">
          <input
            className="w-full bg-white dark:bg-bg-dark md:py-3 md:px-4 border border-gray-400 rounded-full focus:outline-none focus:drop-shadow-md focus:dark:border-bg-dark focus:dark:bg-[#303134] hover:drop-shadow-md hover:dark:border-bg-dark hover:dark:bg-[#303134]"
            type="text"
            value={keyword}
            onChange={onChange}
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
          />
        </div>
      </form>
      <div>
        <Button
          className="text-blue-500 dark:text-blue-300 text-xs lg:text-sm hover:underline"
          text="Share Eid greeting cards with Google"
        />
      </div>
    </>
  );
};

export default FormHome;
