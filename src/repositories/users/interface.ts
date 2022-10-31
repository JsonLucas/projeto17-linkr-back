import { IUser, SignUp } from "../../entities/user";

export interface IUsersRepository{
	create: (body: SignUp) => Promise<IUser>,
	getById: (id: number) => Promise<IUser | null>,
	getByEmail: (email: string) => Promise<IUser | null>
}