import * as bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';

import { ShelterRepository } from '../../repository/shelter.repository';
import { createSessionToken } from '../../use-cases/session-token';
import type { LoginRequest } from '../../interface/request';

const AUTH_SECRET = 'hackathon-pelo-rs';

const ERROR_MESSAGE = 'Informações inválidas. Verifique o e-mail ou senha!';

export async function loginShelter(request: LoginRequest) {
    const shelterWithEmail = await ShelterRepository.findOne(
        { email: request.email },
        { lean: true }
    );

    if (!shelterWithEmail) {
        throw new Error(ERROR_MESSAGE);
    }

    const isCorrectPassword = await bcrypt.compareSync(
        request.password,
        shelterWithEmail.password
    );

    if (!isCorrectPassword) {
        throw new Error(ERROR_MESSAGE);
    }

    const { _id, name } = shelterWithEmail;

    const token = sign({ name }, AUTH_SECRET, {
        expiresIn: '8h',
        subject: _id.toString(),
    });

    await createSessionToken(token, _id.toString());

    return { token };
}
