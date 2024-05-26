import type { AnySchema } from 'joi';

export function validate<T = object>(schema: AnySchema<T>, value: T) {
    const result = schema.validate(value);

    if (result.error) {
        throw new Error(result.error.message);
    }
}
