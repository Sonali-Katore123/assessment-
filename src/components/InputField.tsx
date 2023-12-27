import React from "react";
import TextField from "@mui/material/TextField";

interface InputTextComponentProps {
  value?: any;
  onChange: (text: string) => void;
  placeholder?: string;
  inputTextComponentStyle?: React.CSSProperties;
  editable?: boolean;
  multiline?: boolean;
  maxRows: number;
}

const InputTextComponent: React.FC<InputTextComponentProps> = ({
  value,
  onChange,
  placeholder,
  inputTextComponentStyle,
  editable = true,
  multiline = false,
  maxRows,
}) => {
  return (
    <TextField
      style={inputTextComponentStyle}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      disabled={!editable}
      variant="outlined"
      margin="normal"
      required
      multiline={multiline}
      maxRows={maxRows}
    />
  );
};

export default React.memo(InputTextComponent);
