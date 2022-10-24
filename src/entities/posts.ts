export interface IPost{
	id: number,
	text: string,
	url?: string,
	userId: string,
	hashtagId: string,
	createdAt?: Date,
	updatedAt?: Date
}

export type Post = Pick<IPost, 'text' | 'url'>;