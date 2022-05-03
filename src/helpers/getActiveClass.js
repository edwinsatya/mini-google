export const getActiveClass = (typeCheck, type) => {
  const inActive =
    "text-blue-500 border-b-blue-600 dark:text-blue-400 dark:border-b-blue-400";
  const nonActive = "border-b-transparent";

  if (type === typeCheck) {
    return inActive;
  }
  return nonActive;
};
