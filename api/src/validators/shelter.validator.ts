import * as Joi from 'joi';

import { RegisterShelterRequest } from '../interface/request';
import { getRequiredField } from '../helper/validators';

export const registerShelterSchema = Joi.object<RegisterShelterRequest>({
    email: Joi.string()
        .required()
        .email()
        .messages({
            ...getRequiredField('Email'),
            'string.email': 'O formato do email deve ser válido.',
        }),
    password: Joi.string()
        .required()
        .pattern(/^(?=.{8,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9]).*$/)
        .messages({
            ...getRequiredField('Senha'),
            'string.pattern.base':
                'A senha deve conter pelo menos 8 caractéres, uma letra minúscula, uma maiúscula e um número.',
        }),
    phoneNumber: Joi.string()
        .trim()
        .required()
        .messages({ ...getRequiredField('Telefone') }),
    name: Joi.string()
        .trim()
        .required()
        .messages({ ...getRequiredField('Nome') }),
    shelteredNumber: Joi.number()
        .required()
        .messages({ ...getRequiredField('Número de abrigados') }),
    street: Joi.string()
        .trim()
        .required()
        .messages({
            ...getRequiredField('Rua'),
        }),
    number: Joi.number()
        .required()
        .messages({
            ...getRequiredField('Número'),
        }),
    district: Joi.string()
        .trim()
        .required()
        .messages({
            ...getRequiredField('Bairro'),
        }),
    city: Joi.string()
        .trim()
        .required()
        .messages({
            ...getRequiredField('Cidade'),
        }),
    additionalInfo: Joi.string().trim(),
});
