import * as Joi from 'joi';

import { Volunteer } from '../entities/volunteer';
import { getRequiredField } from '../helper/validators';

export const registerVolunteerSchema = Joi.object<Volunteer>({
    name: Joi.string()
        .trim()
        .required()
        .messages({ ...getRequiredField('Nome') }),
    surname: Joi.string()
        .trim()
        .required()
        .messages({ ...getRequiredField('Sobrenome') }),
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
    oab: Joi.string()
        .trim()
        .required()
        .messages({ ...getRequiredField('OAB') }),
    phoneNumber: Joi.string().trim().messages({
        'string.empty': `Número de telefone é obrigatório`,
    }),
});
