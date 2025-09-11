import React from "react";

interface InputFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (val: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
};

export default InputField;
