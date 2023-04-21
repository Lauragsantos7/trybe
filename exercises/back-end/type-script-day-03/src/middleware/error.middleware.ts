import { ErrorRequestHandler } from "express";
import statusCodes from "../utils/statusCodes";

const errorMiddleware: ErrorRequestHandler = (err: unknown, req, res, _next) => {
    if (err instanceof Error && err.message === 'UNAUTHORIZED') {
        return res.status(statusCodes.UNAUTHORIZED).json({ message: 'username or password invalids'})
    };
    return res.status(statusCodes.SERVER_ERROR).json({ message: 'Erro inesperado'})
};

export default errorMiddleware;

// o tipo ErrorRequestHandler já vem por padrão os 4 params, por isso não precisa tipá-los um a um. err foi tipado, pq por padrão é any, é so uma boa prática.
