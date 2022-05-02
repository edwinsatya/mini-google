import { ArrowUpIcon } from "@heroicons/react/outline";

const IconArrowUp = ({ className, onClick }) => {
  return (
    <ArrowUpIcon className={`${className} cursor-pointer`} onClick={onClick} />
  );
};

export default IconArrowUp;
