import { useMemo } from "react";

const InputText = ({ className, value, onChange, type, disabled }) => {
  const classDisabled = useMemo(() => {
    return "bg-gray-300 dark:bg-gray-800 hover:dark:bg-gray-700";
  }, []);

  return (
    <div className="w-full">
      <input
        className={`${className} w-full ${disabled ? classDisabled : ""}`}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      />
    </div>
  );
};

export default InputText;
