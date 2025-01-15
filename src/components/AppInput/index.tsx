import React, { FC } from "react";

type AppInputProps = {
  label: string;
  name: string;
};

const AppInput: FC<AppInputProps> = ({ label, name }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-2 my-3">
      <label className="block text-xs text-gray-500" htmlFor={name}>
        {label}
      </label>
      <input
        className="w-full outline-none bg-transparent text-sm"
        name={name}
        placeholder={`Enter ${label}`}
      />
    </div>
  );
};

export default AppInput;
