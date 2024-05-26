import { FilterQuery, QueryOptions } from 'mongoose';
import {
    SessionToken,
    SessionTokenDocument,
    SessionTokenSchema,
} from '../entities/session-token';

export class SessionTokenRepository {
    public static async create(
        sessionToken: SessionToken
    ): Promise<SessionTokenDocument> {
        return SessionTokenSchema.create(sessionToken);
    }

    public static async findOne(
        filter: FilterQuery<SessionTokenDocument>,
        options: QueryOptions<SessionTokenDocument>
    ) {
        return SessionTokenSchema.findOne(filter, null, options);
    }
}
