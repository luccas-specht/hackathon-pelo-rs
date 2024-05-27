import { OccupationArea } from '../../enums';

export interface Event {
    startDate: Date;
    endDate: Date;
    neededAreas: OccupationArea[];
}
