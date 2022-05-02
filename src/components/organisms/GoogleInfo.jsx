const GoogleInfo = () => {
  return (
    <div className="hidden lg:flex flex-col w-4/12 rounded-lg border border-gray-400 h-fit">
      <div className="h-40 w-full border-b border-gray-400 flex items-center p-4">
        <div className="w-1/2 flex flex-col gap-2">
          <h1 className="text-4xl font-medium">Google</h1>
          <h2 className="text-gray-500 dark:text-[#BDC1C6]">Company</h2>
        </div>
        <div className="w-1/2">
          <img src={require("../../assets/images/google.png")} alt="google" />
        </div>
      </div>
      <div className="p-4 text-gray-600 dark:text-[#BDC1C6] flex flex-col gap-3">
        <div>
          <p>
            Google LLC is an American multinational corporation specializing in
            Internet services and products. These products include search
            technology, web computing, software, and online advertising. Most of
            its profits come from AdWords.{" "}
            <span className="text-blue-600 dark:text-blue-400 hover:underline">
              Wikipedia
            </span>
          </p>
        </div>
        <div>
          <p>
            <span className="font-medium">CEO : </span>
            <span className="text-blue-600 dark:text-blue-400">
              Sundar Pichai
            </span>
            <span> (2 Okt 2015-)</span>
          </p>

          <p>
            <span className="font-medium">Be Founded : </span>
            <span>4 September 1998, </span>
            <span className="text-blue-600 dark:text-blue-400">
              Menlo Park, California, Amerika
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GoogleInfo;
