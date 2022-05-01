import { useMemo } from "react";

const TextLink = ({ className, text, onHover, onLeave }) => {
  const shorthLink = useMemo(() => {
    if (text.length > 30) {
      return text.substring(0, 30) + " > ...";
    }
    return text;
  }, [text]);

  return (
    <p
      className={`${className} cursor-pointer text-[10px] lg:text-[15px]`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {shorthLink}
    </p>
  );
};

export default TextLink;
