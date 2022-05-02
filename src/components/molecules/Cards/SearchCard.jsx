import { useState } from "react";
import Description from "../../atoms/Typography/Description";
import TextLink from "../../atoms/Typography/TextLink";
import Title from "../../atoms/Typography/Title";

const SearchCard = ({ className, result }) => {
  const { title, link, description, additional_links } = result;
  const [linkIsHover, setLinkIsHover] = useState(false);
  return (
    <div className={`${className}`}>
      <div>
        <div onClick={() => window.open(`${link}`, "_blank").focus()}>
          <TextLink
            className="w-fit dark:text-[#BDC1C6]"
            text={link}
            onHover={() => setLinkIsHover(() => true)}
            onLeave={() => setLinkIsHover(() => false)}
          />
          <Title
            className={`${
              linkIsHover ? "underline" : ""
            } text-blue-700 dark:text-blue-400 cursor-pointer w-fit hover:underline`}
            text={title}
          />
        </div>
        <Description
          className="lg:pr-10 text-gray-600 dark:text-[#BDC1C6]"
          text={description ? description : "No have description"}
        />
      </div>
      {additional_links &&
        additional_links.map((additional, idx) => (
          <div key={idx} className="hidden px-5 py-2 gap-4 lg:flex lg:flex-col">
            <div>
              <Title
                className="text-blue-700 dark:text-blue-400 cursor-pointer w-fit hover:underline"
                text={additional.text}
                onClick={() =>
                  window.open(`${additional.href}`, "_blank").focus()
                }
              />
              <Description
                className="lg:pr-10 text-gray-600 dark:text-[#BDC1C6]"
                text={additional.href}
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default SearchCard;
