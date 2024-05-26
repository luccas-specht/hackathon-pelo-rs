import { verify } from 'jsonwebtoken';
import type { JwtPayload } from 'jsonwebtoken';
import type { Request, Response, NextFunction } from 'express';

import { SessionTokenRepository } from '../repository/session-token.repository';
import { HttpStatusCode } from '../enums';

export interface LoggedUserRequest extends Request {
    userId: string;
    token: string;
}

const AUTH_SECRET = 'hackathon-pelo-rs';

const TOKEN_NOT_RECEIVED = 'Nenhum token recebido';
const INVALID_TOKEN = 'Token inválido';
const UNAUTHORIZED = 'Não autorizado';
const JWT_EXPIRED_MESSAGE = 'jwt expired';

export async function verifyTokenMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        res.status(HttpStatusCode.UNAUTHORIZED).send({
            message: TOKEN_NOT_RECEIVED,
        });
        return;
    }

    try {
        const { sub } = verify(token, AUTH_SECRET) as JwtPayload;
        (req as LoggedUserRequest).userId = sub as string;
        const { userId } = req as LoggedUserRequest;

        const sessionToken = await SessionTokenRepository.findOne(
            {
                token,
                userId,
            },
            {
                lean: true,
            }
        );

        if (!sessionToken) {
            res.status(HttpStatusCode.UNAUTHORIZED).send({
                message: INVALID_TOKEN,
            });
            return;
        }

        const decoded = verify(token, AUTH_SECRET);
        (req as LoggedUserRequest).userId = decoded.sub as string;
        (req as LoggedUserRequest).token = token;

        next();
    } catch (error) {
        res.status(HttpStatusCode.UNAUTHORIZED).send({
            message: UNAUTHORIZED,
        });
    }
}
