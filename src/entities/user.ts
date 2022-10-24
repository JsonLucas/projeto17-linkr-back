export interface IUser {
	id: number,
	nickname: string,
	email: string,
	password: string,
	picture?: string
}

export type Login = Pick<IUser, 'email' | 'password'>;
export type SignUp = Pick<IUser, 'email' | 'nickname' | 'password' | 'picture'>;