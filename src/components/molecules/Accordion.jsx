import { useState } from "react";
import IconArrowDown from "../atoms/IconSvg/IconArrowDown";
import IconArrowUp from "../atoms/IconSvg/IconArrowUp";
import Description from "../atoms/Typography/Description";
import Title from "../atoms/Typography/Title";

const Accordion = ({ className, dataAccordion }) => {
  const [showDetail, setShowDetail] = useState(() => {
    return dataAccordion.map((data) => ({
      text: data,
      show: false,
    }));
  });

  const handleShowDetail = (idx) => {
    const newArr = [...showDetail];
    newArr[idx].show = !newArr[idx].show;
    setShowDetail(() => newArr);
  };

  return (
    <div className="flex flex-col gap-1 lg:gap-3">
      <div>
        <Title
          className="w-fit text-gray-600 dark:text-gray-200"
          text="People also ask"
        />
      </div>
      <div>
        {dataAccordion.map((data, idx) => (
          <div
            key={idx}
            className={`${className} py-1 lg:py-3 border-y w-full border-gray-500 dark:border-gray-600 dark:text-[#BDC1C6] flex flex-col transition-all ease-linear duration-300 ${
              showDetail[idx].show ? "gap-3" : "gap-0"
            }
            ${idx !== dataAccordion.length - 1 ? "border-b-transparent" : ""}
            `}
          >
            <div
              className="flex justify-between items-center"
              onClick={() => handleShowDetail(idx)}
            >
              <Description
                className="w-fit text-gray-600 dark:text-[#BDC1C6]"
                text={data}
              />
              {showDetail[idx].show ? (
                <IconArrowUp className="h-4 w-4 md:h-6 md:w-6 text-gray-600 dark:text-[#BDC1C6]" />
              ) : (
                <IconArrowDown className="h-4 w-4 md:h-6 md:w-6 text-gray-600 dark:text-[#BDC1C6]" />
              )}
            </div>
            <div
              className={`${
                showDetail[idx].show ? "max-h-fit" : "max-h-0"
              } overflow-hidden`}
            >
              <Description
                className={`${
                  showDetail[idx].show ? "opacity-100" : "opacity-0"
                } transition-all ease-linear duration-300 text-gray-600 dark:text-[#BDC1C6]`}
                text="-"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Accordion;
