import { Router } from 'express';
import type { Request, Response, NextFunction } from 'express';

import { HttpStatusCode } from '../enums';
import { checkIfOABExists } from '../use-cases/oab';

const oabController = Router();

oabController.get(
    '/check/:name/:oabNumber',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { name, oabNumber } = req.params;

            const response = await checkIfOABExists({ name, oabNumber });

            return res.status(HttpStatusCode.OK).json(response).end();
        } catch (error) {
            return next(error);
        }
    }
);

export { oabController };
