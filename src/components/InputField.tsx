import React from "react";

interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "px-2 py-1 text-sm",
  md: "px-3 py-2 text-base",
  lg: "px-4 py-3 text-lg",
};

const variantClasses = {
  filled: "bg-gray-100 border border-transparent focus:border-blue-500",
  outlined: "border border-gray-400 focus:border-blue-500",
  ghost: "border-b border-gray-400 focus:border-blue-500 rounded-none",
};

export const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  variant = "outlined",
  size = "md",
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="text-sm font-medium">{label}</label>}

      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`
          rounded-md outline-none transition-all
          ${sizeClasses[size]}
          ${variantClasses[variant]}
          ${invalid ? "border-red-500 bg-red-50" : ""}
          ${disabled ? "bg-gray-200 cursor-not-allowed" : ""}
        `}
      />

      {invalid && errorMessage ? (
        <span className="text-xs text-red-600">{errorMessage}</span>
      ) : helperText ? (
        <span className="text-xs text-gray-500">{helperText}</span>
      ) : null}
    </div>
  );
};
