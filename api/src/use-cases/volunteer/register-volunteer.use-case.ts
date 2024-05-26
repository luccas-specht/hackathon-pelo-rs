import * as bcrypt from 'bcrypt';

import { validate, registerVolunteerSchema } from '../../validators';
import { VolunteerRepository } from '../../repository/volunteer.reposiory';
import type { RegisterVolunteerRequest } from '../../interface/request';

const SALT_ROUNDS = 10;

export async function registerVolunteer(request: RegisterVolunteerRequest) {
    validate(registerVolunteerSchema, request);

    const volunteerWithEmail = await VolunteerRepository.findOne(
        { email: request.email },
        { lean: true }
    );

    if (volunteerWithEmail) {
        throw new Error('Email já cadastrado!');
    }

    const hashedPassword = await bcrypt.hash(request.password, SALT_ROUNDS);

    await VolunteerRepository.create({ ...request, password: hashedPassword });
}
