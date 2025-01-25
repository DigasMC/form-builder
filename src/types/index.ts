/**
 * FormFieldType is the type of the field.
 */
export enum FormFieldType {
    TEXT = "text",
    EMAIL = "email",
    DATE = "date",
    TEXTAREA = "textarea",
    NUMBER = "number",
    MULTISELECT = "multiselect"
}

/*
 * FormFieldValidation is the validation rules for a field.
 * @param required - Whether the field is required.
 * @param pattern - The pattern for the field.
 */
export type FormFieldValidation = {
    required?: boolean;
    pattern?: string;
};

/**
 * FormField is a single field in the form.
 * @param type - The type of the field.
 * @param label - The label of the field.
 * @param validation - The validation rules for the field.
 * @param options - The options for the field.
 */
export interface FormField {
    type: FormFieldType;
    label: string;
    validation?: FormFieldValidation;
    options?: Array<string>;
}

/**
 * Form is the main form object.
 * @param companyName - The name of the company.
 * @param fields - The fields in the form.
 */
export interface Form {
    companyName: string;
    fields: Array<FormField>;
}
