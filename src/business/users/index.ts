import { SignUp, IUser } from "../../entities/user";
import { UserRepository } from "../../repositories/users";
import { IUserBusiness } from "./interface";

export class UserBusiness implements IUserBusiness{
	constructor(
		private readonly userRepository: UserRepository
	){}

	async create(body: SignUp): Promise<IUser>{
		const user = await this.userRepository.getByEmail(body.email);
		if(user) throw { code: 409, error: 'this user already exists.' };
		
		return await this.userRepository.create(body);
	}

	async getById(id: number): Promise<IUser>{
		const user = await this.userRepository.getById(id);
		if(!user) throw { code: 404, error : 'user not found.' };
		
		return user;
	}

	async getByEmail(email: string): Promise<IUser>{
		const user = await this.userRepository.getByEmail(email);
		if(!user) throw { code: 404, error: 'user not found.' };

		return user;
	}
}