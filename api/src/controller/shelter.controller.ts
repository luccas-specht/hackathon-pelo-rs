import { Router } from 'express';
import type { Request, Response, NextFunction } from 'express';

import { HttpStatusCode } from '../enums';
import { LoginRequest, RegisterShelterRequest } from '../interface/request';
import { registerShelter, loginShelter } from '../use-cases/shelter';

const shelterController = Router();

shelterController.post(
    '/',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const request: RegisterShelterRequest = req.body;

            await registerShelter(request);

            return res.status(HttpStatusCode.CREATED).end();
        } catch (error) {
            return next(error);
        }
    }
);

shelterController.post(
    '/login',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const request: LoginRequest = req.body;

            const token = await loginShelter(request);

            return res.status(HttpStatusCode.OK).json(token).end();
        } catch (error) {
            return next(error);
        }
    }
);

export { shelterController };
