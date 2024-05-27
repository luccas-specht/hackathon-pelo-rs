import { Address } from '../address';
import { Event } from '../event';

export interface Shelter {
    email: string;
    password: string;
    phoneNumber: string;
    name: string;
    shelteredNumber: number;
    address: Address;
    isApproved: boolean;
    events: Event[];
}
