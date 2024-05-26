import { Schema, model } from "mongoose";

import { DBCollection } from "../../enums";

import type { BenefitDocument } from "./benefit.document";

const benefitSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        shortDescription: {
            type: String,
            required: false,
        },
        description: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            required: true,
        },
    },
    { autoIndex: true, timestamps: false, __v: false }
)

export default model<BenefitDocument>(DBCollection.BENEFIT, benefitSchema);