export const getActiveClass = (typeCheck, type) => {
  const inActive = "text-blue-500 border-b-blue-500";
  const nonActive = "border-b-transparent";

  if (type === typeCheck) {
    return inActive;
  }
  return nonActive;
};
