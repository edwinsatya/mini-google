import React from "react";

const Footer = () => {
  return (
    <footer className="fixed flex flex-col text-xs lg:text-base w-full bottom-0 bg-[#F2F2F2] dark:bg-[#171717] dark:text-[#9AA0A6]">
      <div className="px-4 py-2 lg:py-4 lg:pl-24 w-full mx-auto max-w-7xl">
        Indonesia
      </div>
      <div className="px-4 py-2 lg:py-4 lg:pl-24 w-full mx-auto max-w-7xl flex justify-between">
        <div className="flex gap-1 lg:gap-3">
          <p>About</p>
          <p>Advertisement</p>
          <p>Business</p>
        </div>
        <div className="flex gap-1 lg:gap-3">
          <p>privacy</p>
          <p>condition</p>
          <p>Setting</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
