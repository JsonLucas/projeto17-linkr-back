import { Request, Response, NextFunction } from 'express';
import { LoginSchema, SignUpSchema } from '../utils/schemas';
import { Validator } from '../utils/validator';

const validator = new Validator();

export const signUpMiddleware = async (req: Request, res: Response, next: NextFunction) => {
	const { body } = req;
	await validator.validate(SignUpSchema, body);
	
	const { nickname, email, password, picture } = body;
	res.locals.data = { nickname, email, password, picture };

	next();
}

export const signInMiddleware = async (req: Request, res: Response, next: NextFunction) => {
	const { body } = req;
	await validator.validate(LoginSchema, body);

	res.locals.data = body;
	next();
}