import Button from "../atoms/Button";

const ButtonPrefixIcon = ({ className, text, icon, onClick }) => {
  return (
    <div
      className={`${className} cursor-pointer flex justify-center items-center gap-1 p-1 border-b-2 hover:text-blue-500 lg:gap-2 lg:p-2 lg:border-b-4`}
      onClick={onClick}
    >
      {icon}
      <Button className="text-xs lg:text-base" text={text} />
    </div>
  );
};

export default ButtonPrefixIcon;
