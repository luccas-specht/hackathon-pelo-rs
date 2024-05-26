import { Schema, model } from 'mongoose';

import { SessionTokenDocument } from './session-token.document';
import { DBCollection } from '../../enums';

const sessionTokenSchema = new Schema(
    {
        token: {
            type: String,
            required: true,
        },
        userId: {
            type: String,
            required: true,
        },
    },
    { autoIndex: true }
);

export default model<SessionTokenDocument>(
    DBCollection.SESSION_TOKEN,
    sessionTokenSchema
);
