import { Form, FormField, FormFieldType, FormFieldValidation } from "../types";

/**
 * isValidFormFieldType is a function that checks if the type is a valid form field type.
 * @param type - The type to check.
 * @returns - Whether the type is a valid form field type.
 */
export function isValidFormFieldType(type: string): type is FormFieldType {
    return Object.values(FormFieldType).includes(type as FormFieldType);
}

/**
 * isValidValidation checks if the validation object matches the FormFieldValidation type
 * @param validation - The validation object to check
 * @returns - Whether the validation object is valid
 */
function isValidValidation(validation: any): validation is FormFieldValidation {
    return (
        typeof validation === 'object' &&
        typeof validation.required === 'boolean' &&
        (validation.pattern === undefined || typeof validation.pattern === 'string')
    );
}

/**
 * parseFormJson transforms a JSON string into a Form object
 * @param jsonString - The JSON string to parse
 * @returns - The parsed Form object
 */
export function parseFormJson(jsonString: string): Form {
    try {
        const parsedJson = JSON.parse(jsonString);

        if (!parsedJson.companyName || !Array.isArray(parsedJson.fields)) {
            throw new Error('Invalid form JSON structure');
        }

        // Validate and transform fields
        const validatedFields: FormField[] = parsedJson.fields.map((field: any) => {
            if (!field.type || !field.label) {
                throw new Error('Field missing required properties');
            }

            if (!isValidFormFieldType(field.type)) {
                throw new Error(`Invalid field type: ${field.type}`);
            }

            // Validate the validation object if it exists
            if (field.validation && !isValidValidation(field.validation)) {
                throw new Error(`Invalid validation for field: ${field.label}`);
            }

            return {
                type: field.type as FormFieldType,
                label: field.label,
                validation: field.validation as FormFieldValidation,
                options: field.options || []
            };
        });

        return {
            companyName: parsedJson.companyName,
            fields: validatedFields
        };
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(`Failed to parse form JSON: ${error.message}`);
        }
        throw new Error('Failed to parse form JSON: Unknown error');
    }
} 