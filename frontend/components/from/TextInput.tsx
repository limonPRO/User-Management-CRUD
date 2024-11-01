import React from "react";
import { TextField } from "@mui/material";

// Define props type for the TextInput component
interface TextInputProps {
  label: string;
  value: string;
  variant?: "outlined" | "filled" | "standard"; // Allow for different variants
  type?: string; // Input type (e.g., text, email, etc.)
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
//   variant = "outlined", // Default variant
  value,
  type = "text", // Default to 'text' if type is not provided
  onChange,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-[18px]">
      <label className="text-[#4D5746]">{label}:</label>
      <TextField
        // variant={variant} // Use the variant prop
        placeholder={label}
        fullWidth
        value={value}
        type={type} // Use the type prop from props
        onChange={onChange}
        {...props} // Spread any additional props
      />
    </div>
  );
};

export default TextInput;
