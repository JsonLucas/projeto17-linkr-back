import jsonwebtoken from 'jsonwebtoken';
import { jwtSecret } from './env';
interface IToken {
	generate: (userId: string) => string
	decode: (token: string) => string | jsonwebtoken.JwtPayload
}

export class TokenAction implements IToken{
	generate(userId: string){
		if(!jwtSecret) throw { code: 500, error: 'missing token key.' };

		return jsonwebtoken.sign(userId, jwtSecret);
	}

	decode(token: string){
		if(!jwtSecret) throw { code: 500, error: 'missing token key.' };

		const verification = jsonwebtoken.verify(token, jwtSecret);
		if(!verification) throw { code: 401, error: 'invalid access token.' };
		
		const decode = jsonwebtoken.decode(token);
		if(!decode) throw { code: 400, error: 'you must to have an access token' };

		return decode;
	}
}