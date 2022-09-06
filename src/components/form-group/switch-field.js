import { Switch } from "@mui/material";

const SwitchField = ({
  checked,
  label,
  handleChange,
  input: {
    name
  }
}) => {
  return (
    <Switch 
      name={name}
      checked={checked}
      onChange={handleChange}
      label={label}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}
 
export default SwitchField;
