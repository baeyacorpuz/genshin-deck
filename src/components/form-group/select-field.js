import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { useState } from "react";

const SelectField = ({
  input: {
    name,
    onChange,
    value
  },
  label,
  elements,
}) => {
  const [vision, setVision] = useState(value);
  const handleChange = (event) => {
    setVision(event.target.value)
    onChange(event.target.value)
  }
  return (
    <FormControl  fullWidth>
    <InputLabel id="vision" >Vision</InputLabel>
    <Select
      id="vision"
      name={name}
      value={value}
      placeholder={value}
      onChange={handleChange}
      fullWidth
      sx={{
        marginBottom: 2
      }}
      maxRows={5}
      label="Vision"
    >
      {elements.map(element => (
        <MenuItem
          key={element._id}
          value={element}
        >
          {element.name}
        </MenuItem>
      ))}
    </Select>
    </FormControl>
  );
}

export default SelectField;
