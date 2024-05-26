import { Router } from 'express';
import type { Request, Response, NextFunction } from 'express';

import { HttpStatusCode } from '../enums';
import { loginVolunteer, registerVolunteer } from '../use-cases/volunteer';
import { LoginRequest, RegisterVolunteerRequest } from '../interface/request';
import { verifyTokenMiddleware } from '../middleware/check-jwt';

const volunteerController = Router();

volunteerController.post(
    '/',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const request: RegisterVolunteerRequest = req.body;

            await registerVolunteer(request);

            return res.status(HttpStatusCode.CREATED).end();
        } catch (error) {
            return next(error);
        }
    }
);

volunteerController.post(
    '/login',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const request: LoginRequest = req.body;

            const token = await loginVolunteer(request);

            return res.status(HttpStatusCode.OK).json(token).end();
        } catch (error) {
            return next(error);
        }
    }
);

volunteerController.get(
    '/isAuthorized',
    verifyTokenMiddleware,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            return res.status(HttpStatusCode.OK).end();
        } catch (error) {
            return next(error);
        }
    }
);

export { volunteerController };
