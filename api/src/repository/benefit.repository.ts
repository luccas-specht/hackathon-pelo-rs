import { Benefit, BenefitDocument, BenefitSchema } from "../entities/benefit";

export class BenefitRepository {
    public static async findAll(): Promise<BenefitDocument[]> {
        return BenefitSchema.find();
    }
}