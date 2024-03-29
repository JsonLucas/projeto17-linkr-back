import { IUser, SignUp } from "../../entities/user";

export interface IUserBusiness {
	create: (body: SignUp) => Promise<IUser>,
	getById: (id: number) => Promise<IUser>,
	getByEmail: (email: string) => Promise<IUser>
}