const InputText = ({ className, value, onChange, type }) => {
  return (
    <div className="w-full">
      <input
        className={`${className} w-full`}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default InputText;
