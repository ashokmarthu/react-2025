import React from "react";

const InputField = ({
  formData,
  title,
  name,
  type,
  onUserChange,
  ...props
}) => {
  return (
    <p className="relative">
      <label for={name} className="absolute">
        {title}
      </label>
      <input
        id={name}
        type={type}
        value={formData[name]}
        className="mt-7 rounded border-none outline-none p-1 sm:w-72 lg:w-96 h-10"
        onChange={onUserChange}
      />
    </p>
  );
};

export default InputField;
