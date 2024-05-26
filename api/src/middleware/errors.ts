import { NextFunction, Request, Response } from 'express';

import { HttpStatusCode } from '../enums';

function requestErrorHandlerMiddleware(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
): Response {
    req.statusMessage = err.message;

    if (err instanceof Error) {
        return res.send({
            message: err.message,
        });
    }

    return res.sendStatus(HttpStatusCode.INTERNAL_SERVER_ERROR);
}

export { requestErrorHandlerMiddleware };
