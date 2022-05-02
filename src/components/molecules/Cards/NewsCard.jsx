import { useState } from "react";
import Button from "../../atoms/Button";
import Description from "../../atoms/Typography/Description";
import TextLink from "../../atoms/Typography/TextLink";
import Title from "../../atoms/Typography/Title";

const NewsCard = ({ result, addNews, removeNews }) => {
  const [onHover, setOnHover] = useState(false);
  const { title, source, inReadingList } = result;

  return (
    <div
      className="p-4 max-w-3xl rounded-lg border border-gray-400 flex flex-col gap-1 lg:gap-2"
      onMouseEnter={() => setOnHover(() => true)}
      onMouseLeave={() => setOnHover(() => false)}
    >
      <TextLink className="dark:text-[#BDC1C6]" text={source.title} />
      <Title
        className={`${
          onHover ? "text-blue-500 dark:text-blue-400" : ""
        } cursor-pointer`}
        text={title}
        onClick={() => window.open(`${source.href}`, "_blank").focus()}
      />
      <Description className="dark:text-[#BDC1C6]" text="2 week ago" />
      <div className="flex gap-2 lg:gap-4">
        {!inReadingList && (
          <Button
            className="p-1 border border-green-600 hover:bg-green-500 hover:text-white rounded-lg text-xs lg:p-2 lg:text-sm"
            text="Add News"
            onClick={addNews}
          />
        )}
        {inReadingList && (
          <Button
            className="p-1 border border-red-600 hover:bg-red-500 hover:text-white rounded-lg text-xs lg:p-2 lg:text-sm"
            text="Remove News"
            onClick={removeNews}
          />
        )}
      </div>
    </div>
  );
};

export default NewsCard;
