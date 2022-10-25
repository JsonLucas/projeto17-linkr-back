import { Request, Response } from 'express';
import { UserBusiness } from '../business/users';
import { UserRepository } from '../repositories/users';
import bcrypt from 'bcrypt';
import { TokenAction } from '../utils/token';

const userBusiness = new UserBusiness(new UserRepository());

export const signUpController = async (req: Request, res: Response) => {
	const { data } = res.locals;
	await userBusiness.create({...data, password: bcrypt.hashSync(data.password, 10)});
	res.sendStatus(201);
}

export const signInController = async (req: Request, res: Response) => {
	const { data } = res.locals;
	const { id, password } = await userBusiness.getByEmail(data.email);
	if(!bcrypt.compareSync(data.password, password)) throw { code: 401, error: 'incorrect password.' };

	const tokenAction = new TokenAction();
	const token = tokenAction.generate(id.toString());
	res.status(200).send({ token });
}