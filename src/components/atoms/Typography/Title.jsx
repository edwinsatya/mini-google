import { useMemo } from "react";

const Title = ({ className, text }) => {
  const shorthTitle = useMemo(() => {
    if (text.length > 100) {
      return text.substring(0, 100) + " ...";
    }
    return text;
  }, [text]);

  return <h1 className={`${className} text-sm lg:text-2xl`}>{shorthTitle}</h1>;
};

export default Title;
