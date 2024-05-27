import { Router } from 'express';
import type { Request, Response, NextFunction } from 'express';

import { HttpStatusCode } from '../enums';
import { CreateEventRequest } from '../interface/request';
import { createEvent, findAllEvents } from '../use-cases/event';
import { verifyTokenMiddleware } from '../middleware/check-jwt';

const eventController = Router();

eventController.post(
    '/create',
    verifyTokenMiddleware,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const request: CreateEventRequest = req.body;

            await createEvent(request);

            return res.status(HttpStatusCode.CREATED).end();
        } catch (error) {
            return next(error);
        }
    }
);

eventController.get(
    '/',
    verifyTokenMiddleware,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const events = await findAllEvents();

            return res.status(HttpStatusCode.OK).json(events).end();
        } catch (error) {
            return next(error);
        }
    }
);

export { eventController };
