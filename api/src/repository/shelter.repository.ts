import { FilterQuery, QueryOptions } from 'mongoose';
import { Shelter, ShelterDocument, ShelterSchema } from '../entities/shelter';

export class ShelterRepository {
    public static async create(shelter: Shelter): Promise<ShelterDocument> {
        return ShelterSchema.create(shelter);
    }

    public static async findOne(
        filter: FilterQuery<ShelterDocument>,
        options: QueryOptions<ShelterDocument>
    ) {
        return ShelterSchema.findOne(filter, null, options);
    }
}
