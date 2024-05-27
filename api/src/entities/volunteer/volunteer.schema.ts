import { Schema, model } from 'mongoose';

import { DBCollection, OccupationArea } from '../../enums';

import type { VolunteerDocument } from './volunteer.document';

const benefitSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        surname: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        oab: {
            type: String,
            required: true,
        },
        occupationArea: {
            type: String,
            required: true,
            enum: OccupationArea,
        },
    },
    { autoIndex: true, timestamps: true, __v: false }
);

export default model<VolunteerDocument>(DBCollection.VOLUNTEER, benefitSchema);
