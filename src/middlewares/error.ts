import { Request, Response, NextFunction } from 'express';

export const errorMiddleware = (e: any, req: Request, res: Response, next: NextFunction) => {
	return res.status(e.code).send(e.error);
}