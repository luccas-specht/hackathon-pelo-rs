import { Schema, model } from 'mongoose';

import { DBCollection } from '../../enums';
import { AddressSchema } from '../address';
import { EventSchema } from '../event';

import type { ShelterDocument } from './shelter.document';

const shelterSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        shelteredNumber: {
            type: Number,
            required: true,
        },
        address: {
            type: AddressSchema,
            required: true,
        },
        isApproved: {
            type: Boolean,
            required: true,
        },
        events: {
            type: [EventSchema],
            required: true,
            default: [],
        },
    },
    { autoIndex: true, timestamps: true }
);

export default model<ShelterDocument>(DBCollection.SHELTER, shelterSchema);
