import { PhotographIcon } from "@heroicons/react/outline";

const IconPhotograph = ({ className, onClick }) => {
  return (
    <PhotographIcon
      className={`${className} cursor-pointer`}
      onClick={onClick}
    />
  );
};

export default IconPhotograph;
