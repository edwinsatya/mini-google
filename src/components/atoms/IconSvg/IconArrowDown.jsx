import { ArrowDownIcon } from "@heroicons/react/outline";

const IconArrowDown = ({ className, onClick }) => {
  return (
    <ArrowDownIcon
      className={`${className} cursor-pointer`}
      onClick={onClick}
    />
  );
};

export default IconArrowDown;
