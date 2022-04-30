import { XIcon } from "@heroicons/react/outline";
const IconClose = ({ className, onClick }) => {
  return <XIcon className={`${className} cursor-pointer`} onClick={onClick} />;
};

export default IconClose;
