import { Schema } from 'mongoose';

import { OccupationArea } from '../../enums';

const eventSchema = new Schema(
    {
        startDate: {
            type: Date,
            required: true,
        },
        endDate: {
            type: Date,
            required: false,
        },
        neededAreas: {
            type: [String],
            required: true,
            enum: OccupationArea,
        },
    },
    { autoIndex: true, timestamps: false, __v: false }
);

export default eventSchema;
