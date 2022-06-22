import dotenv from "dotenv";
import jwt from "jsonwebtoken";

async function authMiddleware(req, res, next) {
    dotenv.config();
    const { authorization } = req.headers;
    console.log(authorization);
    const token = authorization?.replace('Bearer ', '');
    const secretKey = process.env.JWT_SECRET;
    if (!token){
        console.log('Você não tem autorização!');
        return res.sendStatus(401);
    }
    try{
        const userId = jwt.verify(token, secretKey);
        res.locals.userId = userId.id;
        next();
    } catch(e) {
        console.log(e);
        return res.sendStatus(402);
    }
}

export default authMiddleware;
