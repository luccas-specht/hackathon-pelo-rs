import type { Document, ObjectId } from 'mongoose';
import type { SessionToken } from './session-token';

export interface SessionTokenDocument
    extends SessionToken,
        Document<ObjectId> {}
