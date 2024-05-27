import { Shelter } from '../entities/shelter';
import { RegisterShelterRequest } from '../interface/request';

export class ShelterMapper {
    public static registerShelterRequestToShelter(
        request: RegisterShelterRequest
    ): Shelter {
        if (!request) return null;

        const {
            email,
            password,
            phoneNumber,
            name,
            shelteredNumber,
            street,
            number,
            district,
            city,
            additionalInfo,
        } = request;

        return {
            email,
            password,
            phoneNumber,
            name,
            shelteredNumber,
            address: {
                street,
                number,
                district,
                city,
                additionalInfo,
            },
            events: [],
            isApproved: false,
        };
    }
}
