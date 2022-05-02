import { useMemo } from "react";

const Description = ({ className, text, onClick }) => {
  const shorthDesc = useMemo(() => {
    if (text.length > 170) {
      return text.substring(0, 170) + " ...";
    }
    return text;
  }, [text]);

  return (
    <p
      className={`${className} text-xs font-normal lg:text-base`}
      onClick={onClick}
    >
      {shorthDesc}
    </p>
  );
};

export default Description;
