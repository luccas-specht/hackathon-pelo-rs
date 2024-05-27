import { FilterQuery, PipelineStage, QueryOptions } from 'mongoose';
import { Shelter, ShelterDocument, ShelterSchema } from '../entities/shelter';
import { Event } from '../entities/event';

export class ShelterRepository {
    public static async create(shelter: Shelter): Promise<ShelterDocument> {
        return ShelterSchema.create(shelter);
    }

    public static async findOne(
        filter: FilterQuery<ShelterDocument>,
        options?: QueryOptions<ShelterDocument>
    ) {
        return ShelterSchema.findOne(filter, null, options);
    }

    public static async findAllEvents() {
        const unwindEvents: PipelineStage.Unwind = {
            $unwind: {
                path: '$events',
            },
        };

        const replaceRootToEvents: PipelineStage.ReplaceRoot = {
            $replaceRoot: {
                newRoot: '$events',
            },
        };

        const result: Event[] = await ShelterSchema.aggregate([
            unwindEvents,
            replaceRootToEvents,
        ]).exec();

        return result;
    }
}
