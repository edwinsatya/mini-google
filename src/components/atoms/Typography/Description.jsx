const Description = ({ className, text }) => {
  return (
    <p className={`${className} text-xs font-normal lg:text-base`}>{text}</p>
  );
};

export default Description;
