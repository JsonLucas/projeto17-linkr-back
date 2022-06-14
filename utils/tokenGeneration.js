import jwt from 'jsonwebtoken';
import { v4 as uuid } from 'uuid';

export const tokenGeneration = (tokenContent) => {
    const token = jwt.sign(tokenContent, uuid());
    return token;
}