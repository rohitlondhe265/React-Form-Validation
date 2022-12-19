import { useState } from "react";
import "./input.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="flex flex-col w-80">
      <label className="text-2xs text-gray-600">{label}</label>
      <input className="p-3 m-2 rounded-xl border border-gray-300"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span className="text-sm p-3 text-red-500 hidden invalid:border-blue-500">{errorMessage}</span>
    </div>
  );
};

export default FormInput;