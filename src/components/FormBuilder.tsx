import { FormField, FormFieldType } from "../types";
import TextInput from "./form-components/TextInput";
import EmailInput from "./form-components/EmailInput";
import DateInput from "./form-components/DateInput";
import TextAreaInput from "./form-components/TextAreaInput";
import NumberInput from "./form-components/NumberInput";
import MultiSelectInput from "./form-components/MultiselectInput";
import { FormLabel } from "@mui/material";

interface FormBuilderProps {
  formFields: FormField[];
}

function FormBuilder({ formFields }: FormBuilderProps) {
  return (
    <form className="form-builder">
      <FormLabel>Form</FormLabel>
      
      {formFields.map((field, index) => {
        switch (field.type) {
          case FormFieldType.TEXT:
            return <TextInput key={`input-${index}-text`} {...field} />;
          case FormFieldType.EMAIL:
            return <EmailInput key={`input-${index}-email`} {...field} />;
          case FormFieldType.DATE:
            return <DateInput key={`input-${index}-date`} {...field} />;
          case FormFieldType.TEXTAREA:
            return <TextAreaInput key={`input-${index}-textarea`} {...field} />;
          case FormFieldType.NUMBER:
            return <NumberInput key={`input-${index}-number`} {...field} />;
          case FormFieldType.MULTISELECT:
            return <MultiSelectInput key={`input-${index}-multiselect`} {...field} />;
          default:
            return null;
        }
      })}
    </form>
  );
}

export default FormBuilder;
