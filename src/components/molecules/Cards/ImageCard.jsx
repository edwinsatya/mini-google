import Description from "../../atoms/Typography/Description";
import TextLink from "../../atoms/Typography/TextLink";

const ImageCard = ({ result }) => {
  const { image, link } = result;
  return (
    <div className="flex flex-col gap-2">
      <img
        className="cursor-pointer hover:shadow-lg hover:dark:shadow-gray-800"
        src={image.src}
        alt={image.alt}
      />
      <div className="cursor-pointer hover:underline">
        <Description
          className="w-fit text-gray-600 dark:text-[#BDC1C6]"
          text={link.title}
        />
        <TextLink
          className="w-fit text-gray-500 dark:text-[#BDC1C6]"
          text={link.domain}
        />
      </div>
    </div>
  );
};

export default ImageCard;
