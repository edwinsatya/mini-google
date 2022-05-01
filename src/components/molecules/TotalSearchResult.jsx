import { useMemo } from "react";
import Description from "../atoms/Typography/Description";

export const TotalSearchResult = ({ total, time }) => {
  const getTotalAndTime = useMemo(() => {
    return `Around ${total
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} result (${Number(
      time.toFixed(2)
    )} second)`;
  }, [time, total]);

  return (
    <article className="py-1 lg:py-3 ">
      <Description
        className="text-gray-500 dark:text-gray-400"
        text={getTotalAndTime}
      />
    </article>
  );
};
