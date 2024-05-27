import * as bcrypt from 'bcrypt';

import { validate, registerShelterSchema } from '../../validators';
import { ShelterRepository } from '../../repository/shelter.repository';
import { ShelterMapper } from '../../mapper';
import type { RegisterShelterRequest } from '../../interface/request';

const SALT_ROUNDS = 10;

export async function registerShelter(request: RegisterShelterRequest) {
    validate(registerShelterSchema, request);

    const shelterWithEmail = await ShelterRepository.findOne(
        { email: request.email },
        { lean: true }
    );

    if (shelterWithEmail) {
        throw new Error('Email já cadastrado!');
    }

    const shelter = ShelterMapper.registerShelterRequestToShelter(request);

    const hashedPassword = await bcrypt.hash(request.password, SALT_ROUNDS);

    await ShelterRepository.create({ ...shelter, password: hashedPassword });
}
