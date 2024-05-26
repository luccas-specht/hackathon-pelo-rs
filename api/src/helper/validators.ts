export function getRequiredField(field: string) {
    return {
        'any.required': `${field} é obrigatório(a)`,
        'array.base': `${field} é obrigatório(a)`,
        'string.base': `${field} é obrigatório(a)`,
        'string.empty': `${field} é obrigatório(a)`,
    };
}
