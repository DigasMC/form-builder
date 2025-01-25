import { useState } from "react";
import { FormField } from "../../types";
import { validateMultipleField } from "../../utils/formValidationUtils";
import Select, { SelectChangeEvent } from '@mui/material/Select';  
import MenuItem from '@mui/material/MenuItem';
import { Checkbox, FormControl, InputLabel, ListItemText } from "@mui/material";

export default function MultiSelectInput(field: FormField) {
  const [error, setError] = useState(false);
  const [value, setValue] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof value>) => {
    const {
      target: { value },  
    } = event;
    setValue(
      // On autofill we could get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    setError(!validateMultipleField(field.validation, 
      typeof value === 'string' ? value.split(',') : value
    ));
  };

  return <FormControl variant="outlined">
    <InputLabel required={field.validation?.required} error={error} id={`select-label`}>{field.label}</InputLabel> 
    <Select
      label={field.label}
      labelId={`select-label`}
      required={field.validation?.required}
      error={error}
      value={value}
      renderValue={(selected) => selected.join(', ')}
      onChange={handleChange}
      multiple
    >
      {field.options?.map((option, index) => (
        <MenuItem key={`select-option-${field.label}-${index}`} value={option}>
          <Checkbox checked={value.indexOf(option) > -1} />
          <ListItemText primary={option} />
        </MenuItem>
      ))}
    </Select>
  </FormControl>;
}
