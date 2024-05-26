import { FilterQuery, QueryOptions } from 'mongoose';
import {
    Volunteer,
    VolunteerDocument,
    VolunteerSchema,
} from '../entities/volunteer';

export class VolunteerRepository {
    public static async create(
        volunteer: Volunteer
    ): Promise<VolunteerDocument> {
        return VolunteerSchema.create(volunteer);
    }

    public static async findOne(
        filter: FilterQuery<VolunteerDocument>,
        options: QueryOptions<VolunteerDocument>
    ) {
        return VolunteerSchema.findOne(filter, null, options);
    }
}
