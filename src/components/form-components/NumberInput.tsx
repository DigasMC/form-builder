import { useState } from "react";
import { FormField } from "../../types";
import { validateField } from "../../utils/formValidationUtils";
import TextField from '@mui/material/TextField';

export default function NumberInput(field: FormField) {
  const [error, setError] = useState(false);

  return <TextField
    onChange={(e) => {
      setError(!validateField(field.validation, e.target.value));
    }}
    error={error}
    label={field.label} 
    required={field.validation?.required}
    type="number"
    inputMode="numeric"
  />;
}
