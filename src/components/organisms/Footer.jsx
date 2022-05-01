const Footer = ({ className }) => {
  return (
    <footer
      className={`${className} flex flex-col text-xs lg:text-base w-full bottom-0 bg-[#F2F2F2] dark:bg-[#171717] dark:text-[#9AA0A6]`}
    >
      <div className="px-4 py-2 lg:py-4 lg:pl-24 w-full mx-auto max-w-screen-2xl">
        Indonesia
      </div>
      <div className="px-4 py-2 lg:py-4 lg:pl-24 w-full mx-auto max-w-screen-2xl flex justify-between">
        <div className="flex gap-1 lg:gap-3">
          <p>About</p>
          <p>Advertisement</p>
          <p>Business</p>
          <p>privacy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
