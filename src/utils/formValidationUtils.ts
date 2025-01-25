import { FormFieldValidation } from "../types";

/**
 * validateField is a function that validates a field based on the validation rules.
 * @param validation - The validation rules for the field.
 * @param value - The value of the field.
 * @returns - Whether the field is valid.
 */
export function validateField(validation: FormFieldValidation = {}, value: string): boolean {
    if (validation?.required && value.length === 0) {
        return false;
    } else if (validation?.pattern && !value.match(validation.pattern)) {
        return false;
    } else {
        return true;
    }
}

/**
 * validateMultipleField is a function that validates a multiple field based on the validation rules.
 * @param validation - The validation rules for the field.
 * @param values - The values of the field.
 * @returns - Whether the field is valid.
 */
export function validateMultipleField(validation: FormFieldValidation = {}, values: string[]): boolean {
    if (validation?.required && values.length === 0) {
        return false;
    } else {
        return true;
    }
}