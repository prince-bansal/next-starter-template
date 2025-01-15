import { cn } from "@/lib/cn";
import React, { FC } from "react";
import { useFormContext } from "react-hook-form";

type AppInputProps = {
  label: string;
  name: string;
};

const AppInput: FC<AppInputProps> = ({ label, name }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const hasError = errors[name]?.message as string;

  return (
    <div className="my-3">
      <label className="block text-xs text-gray-500" htmlFor={name}>
        {label}
      </label>
      <input
        {...register(name)}
        className={cn(
          "w-full outline-none bg-transparent text-sm border",
          "rounded-lg p-2",
          hasError ? "border-red-500" : "border-gray-300"
        )}
        name={name}
        placeholder={`Enter ${label}`}
      />
      {hasError && <p className="text-red-500 text-xs">{hasError}</p>}
    </div>
  );
};

export default AppInput;
