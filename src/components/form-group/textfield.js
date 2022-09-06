import { TextField } from "@mui/material";

const Textfield = ({
  input: {
    name,
    value,
    onChange,
  },
  placeholder,
  multiline,
  rows,
  label
}) => {
  return (
    <TextField
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      fullWidth
      multiline={multiline}
      rows={rows}
      sx={{
        paddingBottom: 2
      }}
      variant="outlined"
      label={label}
    />
  );
}
 
export default Textfield;
