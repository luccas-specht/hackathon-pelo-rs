import { SessionTokenRepository } from '../../repository/session-token.repository';

const ERROR_MESSAGE = 'Erro ao criar token de sessão';

export async function createSessionToken(token: string, userId: string) {
    if (!token || !userId) {
        throw new Error(ERROR_MESSAGE);
    }

    const tokenSaved = await SessionTokenRepository.create({
        token,
        userId,
    });

    return tokenSaved;
}
