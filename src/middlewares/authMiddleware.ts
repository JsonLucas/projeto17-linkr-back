import { Request, Response, NextFunction } from 'express';
import { TokenAction } from '../utils/token';

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
	const { authorization } = req.headers;
	if(!authorization) throw { code: 401, error: 'auth token not found.' };
	
	const token = authorization.split(' ')[1];
	const tokenAction = new TokenAction();
	const userId = tokenAction.decode(token);
	
	res.locals.userId = Number(userId);
	next();
}