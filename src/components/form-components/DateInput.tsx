import { useState } from "react";
import { FormField } from "../../types";
import { validateField } from "../../utils/formValidationUtils";
import TextField from '@mui/material/TextField';
import { FormControl } from "@mui/material";

export default function TextInput(field: FormField) {
  const [error, setError] = useState(false);

  return <FormControl>
      <TextField
      onChange={(e) => {
        setError(!validateField(field.validation, e.target.value));
      }}
      error={error}
      label={field.label} 
      required={field.validation?.required}
      type="date"
      slotProps={{ // Add this to make the label shrink, so the placeholder is not cut off
        inputLabel: {
            shrink: true,
        },
      }}
      fullWidth
    />
  </FormControl>  ;
}
