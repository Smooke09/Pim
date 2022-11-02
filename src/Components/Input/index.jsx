import React from "react";
import "./styles.scss";

const Input = ({
  className,
  label,
  type,
  value,
  name,
  checked,
  onChange,
  placeholder,
  readOnly,
  style,
}) => {
  return (
    <div className="input-container">
      <input
        className={className}
        name={name}
        type={type}
        checked={checked}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        readOnly={value && readOnly}
        style={style}
      />
      <label>{label}</label>
    </div>
  );
};

export default Input;
