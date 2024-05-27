import { OccupationArea } from '../../enums';

export interface CreateEventRequest {
    shelterId: string;
    startDate: Date;
    endDate: Date;
    neededAreas: OccupationArea[];
}
