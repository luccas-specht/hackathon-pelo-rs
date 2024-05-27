import { OccupationArea } from '../../enums';

export interface Volunteer {
    name: string;
    surname: string;
    email: string;
    password: string;
    oab: string;
    occupationArea: OccupationArea;
}
