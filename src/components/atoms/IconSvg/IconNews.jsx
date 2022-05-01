import { NewspaperIcon } from "@heroicons/react/outline";

const IconNews = ({ className, onClick }) => {
  return (
    <NewspaperIcon
      className={`${className} cursor-pointer`}
      onClick={onClick}
    />
  );
};

export default IconNews;
