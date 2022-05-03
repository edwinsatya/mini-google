const Button = ({ className, text = "btn", type = "button", onClick }) => {
  return (
    <button
      data-testid="button"
      type={type}
      className={`${className} cursor-pointer`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
