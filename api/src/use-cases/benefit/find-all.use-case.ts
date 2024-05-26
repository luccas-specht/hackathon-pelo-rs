import { BenefitRepository } from '../../repository/benefit.repository';

export async function findAllBenefits() {
    return BenefitRepository.findAll();
}
