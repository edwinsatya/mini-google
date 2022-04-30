export const getQueryPath = (type, keyword) => {
  const query = keyword
    .split(" ")
    .filter((e) => e)
    .join("+");
  return `/${type}?q=${query}`;
};
