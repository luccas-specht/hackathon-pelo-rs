import * as bcrypt from 'bcrypt';
import { Types } from 'mongoose';

import { ShelterRepository } from '../../repository/shelter.repository';
import type { CreateEventRequest } from '../../interface/request';

export async function createEvent(request: CreateEventRequest) {
    const { startDate, endDate, shelterId, neededAreas } = request;

    const shelter = await ShelterRepository.findOne({
        _id: new Types.ObjectId(shelterId),
    });

    if (!shelter) {
        throw new Error('Abrigo não encotrado!');
    }

    shelter.events = [
        ...shelter.events,
        {
            startDate,
            endDate,
            neededAreas,
        },
    ];

    await shelter.save();
}
