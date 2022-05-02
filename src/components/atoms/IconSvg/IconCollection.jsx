import { CollectionIcon } from "@heroicons/react/outline";

const IconCollection = ({ className, onClick }) => {
  return (
    <CollectionIcon
      className={`${className} cursor-pointer`}
      onClick={onClick}
    />
  );
};

export default IconCollection;
