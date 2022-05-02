import Description from "../../atoms/Typography/Description";
import TextLink from "../../atoms/Typography/TextLink";

const ImageCard = ({ result }) => {
  const { image, link } = result;
  return (
    <div className="flex flex-col gap-2">
      <img
        className="cursor-pointer hover:shadow-lg hover:shadow-gray-300 hover:dark:shadow-gray-800 hover:scale-105 transition ease-in-out duration-200 w-full max-w-xs"
        src={image.src}
        alt={image.alt ? image.alt : "img-google"}
        onClick={() => window.open(`${link.href}`, "_blank").focus()}
      />
      <div className="cursor-pointer hover:underline">
        <Description
          className="w-fit text-gray-600 dark:text-[#BDC1C6]"
          text={link.title}
          onClick={() => window.open(`${link.href}`, "_blank").focus()}
        />
        <TextLink
          className="w-fit text-gray-500 dark:text-[#BDC1C6]"
          text={link.domain}
          onClick={() => window.open(`${link.href}`, "_blank").focus()}
        />
      </div>
    </div>
  );
};

export default ImageCard;
