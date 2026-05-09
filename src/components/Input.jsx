import React from "react";

function Input({
  type,
  name,
  placeholder,
  value,
  onChange,
  errors,
  // isEditing,
  inputRef,
}) {
  return (
    <div className="">
      <label className="mb-2 block"> {placeholder.toWellFormed()} :</label>
      <input
        ref={inputRef}
        type={type}
        name={name}
        placeholder={placeholder}
        className="p-4 rounded-xl bg-gray-100 w-full  outline-0 "
        value={value}
        onChange={onChange}
        errors={errors}
      />
      {errors?.[name] && (
        <p className="text-red-500 text-sm">{errors[name] || "required"} </p>
      )}
    </div>
  );
}

export default Input;
