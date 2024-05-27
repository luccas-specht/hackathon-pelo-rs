export interface RegisterShelterRequest {
    email: string;
    password: string;
    phoneNumber: string;
    name: string;
    shelteredNumber: number;
    street: string;
    number: number;
    district: string;
    city: string;
    additionalInfo?: string;
}
