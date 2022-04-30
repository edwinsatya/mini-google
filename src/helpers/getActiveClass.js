export const getActiveClass = (typeCheck, type) => {
  const inActive = "border-b-blue-400";
  const nonActive = "border-b-transparent";

  if (type === typeCheck) {
    return inActive;
  }
  return nonActive;
};
