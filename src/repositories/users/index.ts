import { prisma } from "../../database/prisma";
import { SignUp, IUser } from "../../entities/user";
import { IUsersRepository } from "./interface";

export class UserRepository implements IUsersRepository{
	async create(body: SignUp): Promise<IUser>{
		return await prisma.users.create(body);
	}

	async getById(id: number): Promise<IUser>{
		return await prisma.users.findUnique({ where: { id } });
	}

	async getByEmail(email: string): Promise<IUser>{
		return await prisma.users.findUnique({ where: { email } });
	}
}