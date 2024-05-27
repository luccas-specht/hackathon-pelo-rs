import { Schema } from 'mongoose';

const addressSchema = new Schema(
    {
        street: {
            type: String,
            required: true,
        },
        number: {
            type: Number,
            required: true,
        },
        district: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        additionalInfo: {
            type: String,
            required: false,
        },
    },
    { _id: false }
);

export default addressSchema;
