export interface IUser {
	id: number,
	nickname: string,
	email: string,
	password: string,
	picture: string | null,
	createdAt: Date | null,
	updatedAt: Date | null
}

export type Login = Pick<IUser, 'email' | 'password'>;
export type SignUp = Pick<IUser, 'email' | 'nickname' | 'password' | 'picture'>;