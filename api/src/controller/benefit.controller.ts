import { Router } from 'express';
import type { Request, Response, NextFunction } from 'express';

import { HttpStatusCode } from '../enums';
import { findAllBenefits } from '../use-cases/benefit';

const benefitController = Router();

benefitController.get(
    '/',
    async (_req: Request, res: Response, next: NextFunction) => {
        try {
            const benefits = await findAllBenefits();

            return res.status(HttpStatusCode.OK).json(benefits);
        } catch (error) {
            return next(error);
        }
    }
);

export { benefitController };
