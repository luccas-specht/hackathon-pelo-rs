import { ShelterRepository } from '../../repository/shelter.repository';

export async function findAllEvents() {
    return await ShelterRepository.findAllEvents();
}
