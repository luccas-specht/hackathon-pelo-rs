import * as bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';

import { VolunteerRepository } from '../../repository/volunteer.reposiory';
import { createSessionToken } from '../../use-cases/session-token';
import type { LoginRequest } from '../../interface/request';

const AUTH_SECRET = 'hackathon-pelo-rs';

const ERROR_MESSAGE = 'Informações inválidas. Verifique o e-mail ou senha!';

export async function loginVolunteer(request: LoginRequest) {
    const volunteerWithEmail = await VolunteerRepository.findOne(
        { email: request.email },
        { lean: true }
    );

    if (!volunteerWithEmail) {
        throw new Error(ERROR_MESSAGE);
    }

    const isCorrectPassword = await bcrypt.compareSync(
        request.password,
        volunteerWithEmail.password
    );

    if (!isCorrectPassword) {
        throw new Error(ERROR_MESSAGE);
    }

    const { _id, name } = volunteerWithEmail;

    const token = sign({ name }, AUTH_SECRET, {
        expiresIn: '8h',
        subject: _id.toString(),
    });

    await createSessionToken(token, _id.toString());

    return { token };
}
