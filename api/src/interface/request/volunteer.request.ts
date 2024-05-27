import { OccupationArea } from '../../enums';

export interface RegisterVolunteerRequest {
    name: string;
    surname: string;
    email: string;
    password: string;
    oab: string;
    occupationArea: OccupationArea;
}
